export const searchItem = [
	{
		id: 1,
		slug: 'block',
		title: 'Search Block',
		description:
			'Search by block by inserting block number. No commas, no dots, just pure numbers.',
		sampleInput: '194',
		sampleInputDescription: 'Block number',
		placeholder: 'Enter Block number',
		autocomplete: false,
	},
	{
		id: 2,
		slug: 'wallet',
		title: 'Search Wallet',
		description:
			"Looking for a wallet? Start typing the first letters of it's name and let the auto complete feature help you find the exact wallet name string.",
		sampleInput: 'meta1',
		sampleInputDescription: 'Wallet name or ID',
		placeholder: 'Enter wallet name or id',
		autocomplete: true,
	},
	{
		id: 3,
		slug: 'object',
		title: 'Search Object',
		description:
			'In order to search for an object you need to insert an ID with the correct META1 object format. More info and list can be found HERE',
		sampleInput: '1.3.0',
		sampleInputDescription: 'Object ID',
		placeholder: 'Enter object id',
		autocomplete: false,
	},
	{
		id: 4,
		slug: 'asset',
		title: 'Search Asset',
		description:
			"Looking for a SmartCoin or UIA? Start typing the first letters of it's name and let the auto complete feature help you find the exact asset name string.",
		sampleInput: 'USDT',
		sampleInputDescription: 'Asset name or id',
		placeholder: 'Enter asset name or id',
		autocomplete: true,
	},
	{
		id: 5,
		slug: 'transaction',
		title: 'Search Transaction Hash',
		description:
			'If you have a transaction hash, please paste it here to get transaction information.',
		sampleInput: 'cb4a306cb75.....6bb37bbcd29',
		sampleInputDescription: 'Transaction ID',
		placeholder: 'Enter transaction hash',
		autocomplete: true,
	},
];
