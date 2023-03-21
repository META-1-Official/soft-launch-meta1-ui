import React from 'react';
import {Typography} from 'antd';
import Translate from 'react-translate-component';

const {Title} = Typography;

interface IFaucetSettings {
	disabled: boolean;
	defaultValue: 'string | number | undefined';
	onChange: () => void;
	menuEntries: string[];
	activeSetting: number;
}

const FaucetSettings = ({
	disabled,
	defaultValue,
	onChange,
	menuEntries,
	activeSetting,
}: IFaucetSettings) => {
	return (
		<div>
			<div
				css={(theme) => ({
					padding: '1rem 1.5rem',
					borderBottom: `1px solid ${theme.colors.borderColor}`,
				})}
			>
				<Translate
					component="h3"
					css={(theme) => ({
						'&&': {
							color: theme.colors.primaryColor,
							marginBottom: '10px',
							fontSize: '1.35rem',
							textTransform: 'capitalize',
							fontWeight: '100',
						},
					})}
					content={'settings.' + menuEntries[activeSetting]}
				/>

				<Title
					css={() => ({
						'&&': {
							fontSize: '0.8125rem',
							marginTop: '10px',
						},
					})}
				>
					<Translate
						unsafe
						style={{
							paddingTop: 5,
							marginBottom: 30,
						}}
						content={`settings.${menuEntries[activeSetting]}_text`}
						className="panel-bg-color"
					/>
				</Title>
			</div>
		</div>
	);
};

export default FaucetSettings;
