import 'webrtc-adapter';
import './css/style.css';

import React, {
	forwardRef,
	useEffect,
	useImperativeHandle,
	useRef,
	useState,
} from 'react';
import {PauseCircleOutlined, PlayCircleOutlined} from '@ant-design/icons';
import {Button, message, Select} from 'antd';
import Webcam from 'react-webcam';
import useDevices from './hooks/useDevices';
import ProgressScores from './hud/ProgressScores';
import Loader from './LoaderComponent';
import parseTurnServer from './helpers/parseTurnServer';
import calculateCompletionPercentage from './helpers/calculateTasksProgress';
import HudUserGuidanceAlert from './hud/HudUserGuidanceAlert';
import HudFaceMagnetProgress from './hud/HudFaceMagnetProgress';
import HudBitrateMonitor from './hud/HudBitrateMonitor';
import ProcessingCanvasComponent from './ProcessingCanvasComponent';
import {toast} from 'react-toastify';

const WSSignalingServer = process.env.REACT_APP_SIGNALIG_SERVER;

const IceServer = parseTurnServer();

console.log('ICE Turn Server', IceServer);

const FASClient = forwardRef((props, ref) => {
	message.config({
		// top: 100,
		duration: 2,
		maxCount: 1,
		rtl: true,
		getContainer: () => {
			return document.getElementById('notification-container');
		},
	});

	const webcamRef = useRef(null);
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);
	const [progress, setProgress] = useState(0.0);
	const {
		token,
		username,
		task,
		activeDeviceId,
		onComplete,
		onFailure = () => {},
	} = props;

	const updateWindowWidth = () => {
		setWindowWidth(window.innerWidth);
	};

	const polite = true; // Set whether this peer is the polite peer

	const [devices, selectedDevice, setSelectedDevice] =
		useDevices(activeDeviceId);

	const [makingOffer, setMakingOffer] = useState(false);
	const [connected, setConnected] = useState(false);
	const [logs, setLogs] = useState([]);
	const [shouldCloseCamera, setShouldCloseCamera] = useState(false);
	const [notification, setNotification] = useState();

	const [loading, setLoading] = useState(false);
	const [currentStream, setCurrentStream] = useState('empty');

	const ws = useRef(null);
	const pc = useRef(null);
	const dc = useRef(null);
	// const notificationRef = useRef();
	const hudUserGuidanceAlertRef = useRef();
	const hudFacemagnetRef = useRef();
	const hudBirateMonitorRef = useRef();

	const processingCanvasComponentref = useRef(null);
	// const preloadCanvasRef = useRef(null);
	const emptyStreamRef = useRef(null);

	let jwtTokenRef = useRef(token);

	const checkAndAddDir = (description) => {
		// if (!description.sdp.includes('a=sendrecv')) {
		//     description.sdp = description.sdp.replace(/(m=application[\s\S]*?)(a=)/, '$1a=sendrecv\r\n$2');
		// }
		return description;
	};

	const bindWSEvents = () => {
		ws.current.onclose = (event) => console.log('WS Closed', event);
		ws.current.onerror = (event) => console.log('WS error', event);

		ws.current.onopen = (event) => {
			console.log('WS Opened', event);
			pc.current = new RTCPeerConnection({
				iceServers: IceServer,
				// iceTransportPolicy: 'relay',
				iceCandidatePoolSize: 10,
			});

			if (webcamRef.current && typeof webcamRef.current.video !== 'undefined') {
				beginSession();
			}

			// Get user media and add track to the connection
		};

		ws.current.onmessage = async (event) => {
			const msg = JSON.parse(event.data);

			if (msg.description) {
				const offerCollision =
					msg.description.type === 'offer' &&
					(makingOffer || (!polite && pc.current.signalingState !== 'stable'));

				setMakingOffer(false);

				if (offerCollision) {
					return;
				}

				const remoteOffer = new RTCSessionDescription(msg.description);
				await pc.current.setRemoteDescription(remoteOffer);

				if (msg.description.type === 'offer') {
					await pc.current.setLocalDescription();
					ws.current.send(
						JSON.stringify({
							description: checkAndAddDir(pc.current.localDescription),
							token: jwtTokenRef.current,
							task: task,
						})
					);
				}
			} else if (msg.candidate) {
				try {
					if (Boolean(String(msg.candidate.candidate).trim().length))
						await pc.current.addIceCandidate(msg.candidate);
				} catch (err) {
					if (!polite) {
						console.error(err);
					}
				}
			} else if (typeof msg.type !== 'undefined') {
				handleFASData(msg);
			}
		};
	};

	const handleFASData = (msg) => {
		console.log('MSG: ', msg);
		if (
			typeof msg.type !== 'undefined' &&
			['success', 'error', 'info', 'warning'].indexOf(String(msg.type)) !== -1
		) {
			let content = msg.message;
			let type = msg.type;

			if (
				notification &&
				notification.content === content &&
				notification.type === type
			) {
				return;
			} else {
				toast(content, {type});
			}
			setNotification({content, type});

			if (
				msg.type === 'success' &&
				['Verification successful!!', 'Registration successful!!!'].includes(
					msg.message
				)
			) {
				console.log('Message: ', msg);
				// message.success(msg.message, 10000);
				hudUserGuidanceAlertRef.current.clear();
				onComplete(msg.token);
			} else if (
				(msg.type === 'error' && msg.message === 'Registration failure') ||
				(msg.type === 'warning' && msg.message === 'Liveliness check failed!!!')
			) {
				hudUserGuidanceAlertRef.current.clear();
				// message.error(msg.message, 10000);
				onFailure();
			}
		} else if (typeof msg.type !== 'undefined' && msg.type === 'data') {
			console.log('log', msg);
			hudUserGuidanceAlertRef.current.updateData(msg.message);

			if (webcamRef.current && webcamRef.current.video) {
				const video = webcamRef.current.video;
				if (video.videoWidth && video.videoHeight) {
					hudFacemagnetRef.current.setOriginalWidth(video.videoWidth);
					hudFacemagnetRef.current.setOriginalHeight(video.videoHeight);
				}
			}

			hudFacemagnetRef.current.setData(msg.message);
			setLogs((prevLogs) => [...prevLogs, {msg, timestamp: new Date()}]);
		}

		if (
			typeof msg.type !== 'undefined' &&
			msg.type === 'info' &&
			msg.message === 'Session completed!!!'
		) {
			forceCleanUp();
			hudUserGuidanceAlertRef.current.clear();
			setConnected(false);
		}
	};

	const openAndBindDCEvents = () => {
		dc.current = pc.current.createDataChannel('hotline', {
			ordered: false,
			maxPacketLifetime: 500,
		});

		dc.current.onclose = () => console.log('data channel closed');

		dc.current.onopen = () => console.log('data channel opened');

		dc.current.onmessage = function (event) {
			// console.log(evt.data);
			try {
				const msg = JSON.parse(event.data);
				console.log(JSON.stringify(msg));

				if (typeof msg.type !== 'undefined') {
					handleFASData(msg);
				}
			} catch (e) {
				console.error(e);
			}
		};
	};

	const bindRTCEvents = () => {
		pc.current.onsignalingstatechange = (event) => {
			console.log('Current signaling state', pc.current.signalingState);

			// if (pc.current.signalingState === "stable") {
			//     openAndBindDCEvents()
			// }
		};
		pc.current.onicegatheringstatechange = (event) =>
			console.log('Current icegathering state', pc.current.iceGatheringState);
		pc.current.oniceconnectionstatechange = (event) =>
			console.log('Current iceconnection state', pc.current.iceConnectionState);

		pc.current.onicecandidateerror = (event) =>
			console.error('ICE candidate error', event);

		pc.current.onconnectionstatechange = (event) => {
			console.log('Current connection state', pc.current.connectionState);

			if (pc.current.connectionState === 'connected') {
				setLoading(false);
				// localVideoRef.current.srcObject = localTrackRef.current;
			}
		};

		pc.current.ontrack = (event) => {
			console.log('Track received', event);
			// if (remoteVideoRef.current.srcObject) {return;
			// remoteVideoRef.current = event.streams[0];
		};

		pc.current.onicecandidate = (event) => {
			if (event.candidate) {
				console.log('New local candidate', event.candidate);
				ws.current.send(JSON.stringify({candidate: event.candidate}));
			}
		};

		pc.current.onnegotiationneeded = async () => {
			console.log('Negotiations needed!!!');
			try {
				if (!makingOffer) {
					setMakingOffer(true);
					await pc.current.setLocalDescription();
					ws.current.send(
						JSON.stringify({
							description: checkAndAddDir(pc.current.localDescription),
							token: jwtTokenRef.current,
							task: task,
						})
					);
				}
			} catch (err) {
				console.error(err);
			}
		};
	};

	const connect = () => {
		setLoading(true);
		ws.current = new WebSocket(WSSignalingServer);
		bindWSEvents();
	};

	const addOrReplaceTrack = async (track, stream) => {
		console.log(track);

		const senders = pc.current.getSenders();

		const videoSender = senders.find(
			(sender) => sender.track && sender.track.kind === 'video'
		);
		if (videoSender) {
			console.log('Replacing track!!!!', track.readyState);
			videoSender
				.replaceTrack(track)
				.then((r) => {
					console.log('Track replaced');
				})
				.catch((e) => console.log(e));
		} else {
			// If there was no previous video track to replace, just add the new one
			console.log('Adding track!!!!', track.readyState);
			pc.current.addTrack(track, stream);
		}
	};

	const stop = () => {
		console.log('@1 STOP');
		setLoading(false);

		if (pc.current && emptyStreamRef.current) {
			sendMessageToServer({type: 'msg', message: {fas: 'stop'}});
			let currentTrack = null;
			const currentSender = pc.current
				.getSenders()
				.find((sender) => sender.track && sender.track.kind === 'video');
			if (currentSender) {
				currentTrack = currentSender.track;
			}

			if (shouldCloseCamera) {
				addOrReplaceTrack(
					emptyStreamRef.current.getTracks()[0],
					emptyStreamRef.current
				);
			}

			if (currentTrack) {
				// Close current webcam video track
				if (shouldCloseCamera) {
					currentTrack.stop();
				}
			}
		}
	};

	const start = () => {
		setLoading(true);
		if (pc.current) {
			if (pc.current.connectionState === 'connected') {
				sendMessageToServer({
					type: 'msg',
					message: {fas: 'start', token: jwtTokenRef.current, task: task},
				});
			} else {
				pc.current.onconnectionstatechange = (event) => {
					console.log('Current connection state', pc.current.connectionState);

					if (pc.current.connectionState === 'connected') {
						sendMessageToServer({
							type: 'msg',
							message: {fas: 'start', token: jwtTokenRef.current, task: task},
						});
					}
				};
			}
		}
	};

	const __unload = () => {
		// Close ws connection
		if (ws.current !== null) {
			ws.current.close();
			ws.current = null;
		}

		if (dc.current !== null) {
			dc.current.close();
			dc.current = null;
		}

		// Close RTC
		if (pc.current !== null) {
			pc.current.getSenders().forEach((sender) => {
				if (sender.track) sender.track.stop();
			});
			pc.current.getReceivers().forEach((receiver) => {
				if (receiver.track) receiver.track.stop();
			});

			// Close all transceivers
			pc.current.getTransceivers().forEach((transceiver) => {
				if (transceiver.stop) transceiver.stop();
			});

			// Close the peer connection (including ICE)
			pc.current.close();
			pc.current = null;

			setLoading(false);
		}

		if (jwtTokenRef.current !== null) {
			jwtTokenRef.current = null;
		}
	};

	const sendMessageToServer = (message) => {
		message = JSON.stringify(message);
		if (dc.current && dc.current.readyState === 'open') {
			dc.current.send(message);
		} else if (ws.current) {
			ws.current.send(message);
		} else {
			console.log(`Couldn't send message, no channel open: ${message}`);
		}
	};

	function forceCleanUp() {
		// disconnect();
		// message.info('Disconnected forcefully, Please reload!!!', 9999999);
	}

	const toggleConnected = () => {
		setConnected(!connected);
	};

	const __load = () => {
		connect();

		console.log('Started FAS Loading!!!');

		setTimeout(() => {
			forceCleanUp();
		}, 30000); // 5 Mins
	};

	const __start = () => {
		console.log('Connecting');

		if (!selectedDevice) {
			message['error']('No camera selected/found');
			return toggleConnected();
		}

		if (!username) {
			message['error'](
				'Username required, Username should be at-least 3 char long'
			);
			return toggleConnected();
		}

		if (username.length < 3) {
			message['error'](
				'Invalid username, Username should be at-least 3 char long'
			);
			return toggleConnected();
		} else {
			jwtTokenRef.current = token;
			console.log('Token set', token);
			start();
		}
	};

	const __stop = () => {
		console.log('Disconnecting');
		stop();
	};

	useImperativeHandle(ref, () => ({
		load: __load,
		start: __start,
		stop: __stop,
		unload: __unload,
	}));

	useEffect(() => {
		window.addEventListener('resize', updateWindowWidth);
		return () => {
			window.removeEventListener('resize', updateWindowWidth);
		};
	}, []);

	useEffect(() => {
		if (connected) {
			__start();
		} else {
			__stop();
		}
	}, [connected]);

	useEffect(() => {
		if (selectedDevice && !shouldCloseCamera) {
			setCurrentStream('altcam');
		}
	}, [selectedDevice]);

	useEffect(() => {
		const data = logs[logs.length - 1]?.msg;
		if (data && data?.type === 'data') {
			const tasks = data?.message;
			const progress = calculateCompletionPercentage(tasks);
			console.log('SCORE: ', progress);
			console.log('!!!!!!!!!!!!!!', tasks);
			setProgress(progress);
		}
	}, [logs]);

	const onProcessingTrackReady = (track, stream) => {
		console.log('FASC', 'processing track is ready');
		addOrReplaceTrack(track, stream).then(() => {
			setCurrentStream('empty');

			const sender = pc.current
				.getSenders()
				.find((s) => s.track.kind === 'video');

			const parameters = sender.getParameters();

			if (!parameters.encodings) {
				parameters.encodings = [{}];
			}

			if (parameters.encodings && parameters.encodings.length > 0) {
				parameters.encodings[0].active = true;
				parameters.encodings[0].maxBitrate = 30000000; // e.g., 30 Mbps
				parameters.encodings[0].scaleResolutionDownBy = 1;
				parameters.encodings[0].priority = 'high';
			} else {
				console.warn('Encodings is not defined or empty.');
			}

			sender
				.setParameters(parameters)
				.then((success) => console.log(success))
				.catch((err) => console.log('Failed to set params'));

			openAndBindDCEvents();
			bindRTCEvents();
		});
	};

	const beginSession = () => {
		processingCanvasComponentref.current.setOriginalStream(
			emptyStreamRef.current
		);

		hudBirateMonitorRef.current.setPc(pc.current);
	};

	const getCanvasWidth = () => {
		if (!document.getElementsByClassName('camera-container').length) return 0;
		const width = parseInt(
			getComputedStyle(document.getElementsByClassName('camera-container')[0])
				.width
		);
		// console.log("Canvas Width", width)
		return width;
	};

	const getCanvasHeight = () => {
		if (!document.getElementsByClassName('camera-container').length) return 0;
		const height = parseInt(
			getComputedStyle(document.getElementsByClassName('camera-container')[0])
				.height
		);
		// console.log("Canvas Height", height)
		return height;
	};

	return (
		<div>
			<div className="FASClient" style={{maxWidth: '900px', margin: 'auto'}}>
				<div style={{maxWidth: '900px', margin: 'auto', position: 'relative'}}>
					<div>
						<div style={{marginTop: 15, position: 'relative', zIndex: 1}}>
							{devices.length > 0 ? (
								<Select
									style={{width: '100%'}}
									placeholder="Please select a camera"
									value={selectedDevice}
									onChange={(value) => setSelectedDevice(value)}
									options={devices.map((device, index) => {
										return {
											value: device.deviceId,
											label: device.label || `Camera #${index + 1}`,
										};
									})}
								/>
							) : null}
						</div>

						<div
							style={{
								position: 'absolute',
								bottom: 10,
								left: 0,
								zIndex: 1,
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Button
								icon={
									connected ? <PauseCircleOutlined /> : <PlayCircleOutlined />
								}
								onClick={toggleConnected}
								style={{
									background: '#07bc0c',
									outline: 'none',
									width: 100,
									color: 'white',
									border: 'none',
									height: 40,
									fontWeight: 600,
								}}
							>
								{connected ? 'Stop' : 'Start'}
							</Button>
						</div>
						<div
							className="camera-container"
							style={{
								display: 'flex',
								justifyContent: 'center',
								height: 640,
								backgroundColor: '#f0f0f0',
								position: 'relative',
								margin: '0 auto',
							}}
						>
							<Webcam
								audio={false}
								ref={webcamRef}
								mirrored
								screenshotFormat="image/jpeg"
								className="cropped-video"
								style={{
									width: '100%',
									maxHeight: '100%',
									objectFit: 'cover',
								}}
								videoConstraints={{
									width: 1920,
									height: 1080,
									facingMode: 'user',
								}}
								onUserMedia={() => {
									const videoConstraints = webcamRef.current.videoConstraints;
									const videoTrack =
										webcamRef.current.video.srcObject.getVideoTracks()[0];
									const currentSettings = videoTrack.getSettings();

									console.log('Video Constraints:', videoConstraints);
									console.log('Current Video Settings:', currentSettings);

									emptyStreamRef.current = webcamRef.current.video.srcObject;

									setTimeout(() => {
										hudFacemagnetRef.current.setCanvasWidth(getCanvasWidth());
										hudFacemagnetRef.current.setCanvasHeight(getCanvasHeight());
									}, 1000);

									if (
										typeof ws.current.readyState !== 'undefined' &&
										ws.current.readyState === 1
									) {
										beginSession();
									}
								}}
							/>

							<div id="hud-bitrate-monitor">
								<HudBitrateMonitor
									ref={hudBirateMonitorRef}
								></HudBitrateMonitor>
							</div>

							<div
								id="hud-facemagnet-container"
								style={{
									position: 'absolute',
									bottom: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
							>
								<HudFaceMagnetProgress ref={hudFacemagnetRef} />
							</div>
							<div
								id="hud-user-guidance-text-container"
								style={{
									position: 'absolute',
									bottom: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
							>
								<HudUserGuidanceAlert ref={hudUserGuidanceAlertRef} />
							</div>

							<div
								id="hud-processing-canvas-component"
								style={{
									display: 'none',
									bottom: 0,
									left: 0,
									width: '100%',
									height: '100%',
								}}
							>
								<ProcessingCanvasComponent
									onTrackReady={onProcessingTrackReady}
									ref={processingCanvasComponentref}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
});

export default FASClient;
