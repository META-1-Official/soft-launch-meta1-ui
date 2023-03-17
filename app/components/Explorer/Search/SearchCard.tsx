import React, {FC, useState} from 'react';
import {AutoComplete, Input} from 'antd';
import {Link} from 'react-router-dom';
import styles from './Search.module.scss';
import Api from '../../../api/explorerApi';

interface Props {
	item: {
		slug: string;
		title: string;
		description: string;
		sampleInput: string;
		sampleInputDescription: string;
		placeholder: string;
		autocomplete: boolean;
	};
}

const SearchCard: FC<Props> = ({
	item: {
		slug,
		title,
		description,
		sampleInput,
		sampleInputDescription,
		placeholder,
		autocomplete,
	},
}) => {
	const [value, setValue] = useState<string>('');
	const [options, setOptions] = useState<{value: string; label: string}[]>([]);

	const handleChange = async (value: string) => {
		setValue(value);

		if (autocomplete) {
			let data: string[] = [];
			if (slug === 'asset') {
				data = await Api.lookupAssets(value);
			} else if (slug === 'wallet') {
				data = (await Api.lookupAccounts(value)).filter(
					(_, index) => index % 2 === 0
				);
			} else if (slug === 'transaction') {
				data = await Api.lookupTransactions(value);
				data = [...new Set(data)];
			}
			const newOptions: {value: string; label: string}[] = data.map((str) => ({
				value: str,
				label: str.toUpperCase(),
			}));
			setOptions(newOptions);
		}
	};

	const linkTo = (): string => {
		switch (slug) {
			case 'block':
				return `/block/${value}`;
			case 'asset':
				return `/asset/${value}`;
			case 'wallet':
				return `/account/${value}`;
			case 'transaction':
				return `/explorer/txs/${value}`;
			case 'object':
				return `/explorer/objects/${value}`;
			default:
				return '/explorer/search';
		}
	};

	return (
		<div className={styles.searchCard}>
			<div className={styles.searchCardHeader}>
				<p className={styles.searchCardHeaderText}>{title}</p>
			</div>
			<div className={styles.searchCardMain}>
				<div className={styles.searchCardMainDescription}>
					<p className={styles.searchCardMainDescriptionText}>{description}</p>
				</div>
				<div className={styles.sampleInputBlock}>
					<div className={styles.sampleInputTextBlock}>
						<p className={styles.sampleInputText}>{'Sample input:'}</p>
						<p className={styles.sampleInputTextYellow}>{sampleInput}</p>
					</div>
					<p className={styles.sampleInputDescription}>
						{sampleInputDescription}
					</p>
				</div>
				<div className={styles.downBlock}>
					<div className={styles.downInputBlock}>
						{autocomplete ? (
							<AutoComplete
								className={styles.autocomplete}
								onChange={handleChange}
								options={options}
							>
								<Input
									className={styles.input}
									placeholder={placeholder}
									value={value}
								/>
							</AutoComplete>
						) : (
							<Input
								className={styles.input}
								placeholder={placeholder}
								onChange={(e) => handleChange(e.target.value)}
								value={value}
							/>
						)}
					</div>
					<Link to={linkTo()}>
						<div className={styles.downButton}>Search</div>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default SearchCard;
