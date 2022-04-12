import React from 'react';
import {Input, Typography} from 'antd';
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
							fontSize: '1.25rem',
							textTransform: 'capitalize',
							marginBottom: '10px',
							fontWeight: '100',
							fontSize: '1.35rem',
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

			<div
				css={{
					padding: '1rem 1.5rem',
				}}
			>
				<Input
					css={(theme) => ({
						'&&': {
							backgroundColor: theme.colors.inputBackgroundColor,
							border: 'none',
							color: theme.colors.inputTextColor,
							borderRadius: '6px',
						},
					})}
					disabled={disabled}
					type="text"
					defaultValue={defaultValue}
					onChange={onChange}
				/>
			</div>
		</div>
	);
};

export default FaucetSettings;
