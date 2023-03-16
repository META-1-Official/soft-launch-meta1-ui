import React from 'react';
import styles from './Search.module.scss';
import SearchCard from './SearchCard';
import {searchItem} from './constants';

const Search = () => {
	return (
		<div className={styles.searchContainer}>
			{searchItem.map((item) => (
				<SearchCard key={item.slug} item={item} />
			))}
		</div>
	);
};

export default Search;
