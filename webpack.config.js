/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const git = require('git-rev-sync');
require('es6-promise').polyfill();
const CopyWebpackPlugin = require('copy-webpack-plugin');
const locales = require('./app/assets/locales');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

/*
 * For staging builds, set the version to the latest commit hash, for
 * production set it to the package version
 */
let branch = !!process.env.BRANCH ? process.env.BRANCH : git.branch();
const __VERSION__ =
	branch === 'develop' ? git.short() : require('./package.json').version;

// BASE APP DIR
const root_dir = path.resolve(__dirname);

module.exports = function (env) {
	// STYLE LOADERS
	let cssLoaders = [
		{
			loader: 'style-loader',
		},
		{
			loader: 'css-loader',
		},
		{
			loader: 'postcss-loader',
		},
	];

	let scssLoaders = [
		{
			loader: 'style-loader',
		},
		{
			loader: 'css-loader',
		},
		{
			loader: 'postcss-loader',
		},
		{
			loader: 'sass-loader',
			options: {
				implementation: require.resolve('sass'),
				sassOptions: {
					fiber: false,
					outputStyle: 'expanded',
				},
			},
		},
	];

	// OUTPUT PATH
	let outputPath = path.join(root_dir, 'assets');

	// COMMON PLUGINS
	const baseUrl = env.electron ? './' : 'baseUrl' in env ? env.baseUrl : '/';

	/*
	 * moment and react-intl include tons of locale files, use a regex and
	 * ContextReplacementPlugin to only include certain locale files
	 */
	let regexString = '';
	locales.forEach((l, i) => {
		regexString = regexString + (l + (i < locales.length - 1 ? '|' : ''));
	});
	const localeRegex = new RegExp(regexString);
	const plugins = [
		new HtmlWebpackPlugin({
			template: '!!handlebars-loader!app/assets/index.hbs',
			templateParameters: {
				title: 'META Exchange ' /* + __VERSION__, */,
				INCLUDE_BASE: !!env.prod && !env.hash,
				PRODUCTION: !!env.prod,
				ELECTRON: !!env.electron,
			},
		}),

		new webpack.DefinePlugin({
			APP_VERSION: JSON.stringify(__VERSION__),
			__ELECTRON__: !!env.electron,
			__HASH_HISTORY__: true,
			__BASE_URL__: JSON.stringify(baseUrl),
			__UI_API__: JSON.stringify(env.apiUrl),
			__TESTNET__: !!env.testnet,
			__DEPRECATED__: !!env.deprecated,
			DEFAULT_SYMBOL: 'META1',
			__GIT_BRANCH__: JSON.stringify(git.branch()),
			__PERFORMANCE_DEVTOOL__: !!env.perf_dev,
		}),
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, localeRegex),
		new webpack.ContextReplacementPlugin(
			/react-intl[\/\\]locale-data$/,
			localeRegex
		),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: path.join(root_dir, 'charting_library'),
					to: 'charting_library',
				},
				{
					from: path.join(root_dir, 'voiceit_library'),
					to: 'voiceit_library',
				},
			],
		}),
		new webpack.ProgressPlugin(function (percentage, msg) {
			process.stdout.write(
				(percentage * 100).toFixed(2) + '% ' + msg + '                 \033[0G'
			);
		}),
		new NodePolyfillPlugin(),
	];
	if (env.prod) {
		// PROD OUTPUT PATH
		let outputDir = env.electron
			? 'electron'
			: env.hash
			? !baseUrl
				? 'hash-history'
				: `hash-history_${baseUrl.replace('/', '')}`
			: 'dist';
		outputPath = path.join(root_dir, 'build', outputDir);

		// WRAP INTO CSS FILE
		cssLoaders = [
			{loader: MiniCssExtractPlugin.loader},
			{loader: 'css-loader'},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						minimize: true,
						debug: false,
					},
				},
			},
		];
		scssLoaders = [
			{loader: MiniCssExtractPlugin.loader},
			{loader: 'css-loader'},
			{
				loader: 'postcss-loader',
				options: {
					postcssOptions: {
						minimize: true,
						debug: false,
					},
				},
			},
			{
				loader: 'sass-loader',
				options: {
					implementation: require.resolve('sass'),
					sassOptions: {
						fiber: false,
						outputStyle: 'expanded',
					},
				},
			},
		];

		// PROD PLUGINS
		plugins.push(new CleanWebpackPlugin());
		plugins.push(
			new Dotenv({
				path: `.env.${process.env.NODE_ENV}`,
				safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
				allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
				systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
				silent: true, // hide any errors
				defaults: false, // load '.env.defaults' as the default values if empty
			}),
			new webpack.DefinePlugin({
				__DEV__: false,
			})
		);
		plugins.push(
			new MiniCssExtractPlugin({
				filename: '[name].[contenthash].css',
			})
		);
	} else {
		plugins.push(
			new Dotenv({
				path: `.env.${process.env.NODE_ENV}`,
				safe: true, // load '.env.example' to verify the '.env' variables are all set. Can also be a string to a different file.
				allowEmptyValues: true, // allow empty variables (e.g. `FOO=`) (treat it as empty string, rather than missing)
				systemvars: true, // load all the predefined 'process.env' variables which will trump anything local per dotenv specs.
				silent: true, // hide any errors
				defaults: false, // load '.env.defaults' as the default values if empty
			}),
			new webpack.DefinePlugin({
				__DEV__: true,
			})
		);
		plugins.push(
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin()
		);
	}

	plugins.push(
		new CopyWebpackPlugin(
			{
				patterns: [
					{
						from: path.join(root_dir, 'app', 'assets', 'locales', '*.json'),
						to: path.join(outputPath, '[name].[ext]'),
						toType: 'template',
					},
					{
						from: path.join(
							root_dir,
							'app',
							'lib',
							'common',
							'dictionary_en.json'
						),
						to: path.join(outputPath, 'dictionary.json'),
						toType: 'file',
					},
					{
						from: path.join(root_dir, 'app', 'assets', 'outdated_browser.css'),
						to: path.join(outputPath, 'outdated_browser.css'),
						toType: 'file',
					},
				],
			},
			{}
		)
	);

	const config = {
		mode: env.noUgly ? 'none' : env.prod ? 'production' : 'development',
		entry: {
			app: env.prod
				? path.resolve(root_dir, 'app/Main.js')
				: [
						'webpack-hot-middleware/client',
						'react-hot-loader/patch',
						path.resolve(root_dir, 'app/Main.js'),
				  ],
		},
		output: {
			publicPath: env.prod ? '' : '/',
			path: outputPath,
			filename: env.prod ? '[name].[chunkhash].js' : '[name].js',
			chunkFilename: env.prod ? '[name].[chunkhash].js' : '[name].js',
			pathinfo: !env.prod,
			sourceMapFilename: '[name].js.map',
			globalObject: 'this',
		},
		performance: {
			hints: false,
			maxEntrypointSize: 512000,
			maxAssetSize: 512000,
		},
		optimization: {
			runtimeChunk: 'single',
			splitChunks: {
				cacheGroups: {
					styles: {
						name: 'styles',
						test: /.css$/,
						chunks: 'all',
						enforce: true,
					},
					vendor: {
						name: 'vendor',
						test: /[\/]node_modules[\/]/,
						chunks: 'all',
						enforce: true,
					},
				},
			},
		},
		devtool:
			env.noUgly || !env.prod
				? 'inline-cheap-module-source-map'
				: 'cheap-source-map',
		module: {
			rules: [
				{
					// Test for a polyfill (or any file) and it won't be included in your
					// bundle
					test: /node-fetch/,
					use: 'null-loader',
				},
				{
					test: /\.(ts|tsx)$/,
					exclude: /node_modules/,
					use: {
						loader: 'babel-loader',
					},
				},
				{
					test: /\.jsx$/,
					include: [
						path.join(root_dir, 'app'),
						path.join(root_dir, 'node_modules/react-foundation-apps'),
					],
					use: [
						{
							loader: 'babel-loader',
							options: {
								cacheDirectory: env.prod ? false : true,
								plugins: ['react-hot-loader/babel'],
							},
						},
					],
				},
				{
					test: /\.js$/,
					include: [
						path.join(root_dir, 'app'),
						path.join(root_dir, 'node_modules/react-datepicker2'),
						path.join(root_dir, 'node_modules/alt-container'),
						path.join(root_dir, 'node_modules/alt-react'),
					],
					use: [
						{
							loader: 'babel-loader',
							options: {
								compact: false,
								cacheDirectory: env.prod ? false : true,
								plugins: ['react-hot-loader/babel'],
							},
						},
					],
				},
				{
					test: /\.mjs$/,
					include: /node_modules/,
					type: 'javascript/auto',
				},
				{test: /\.coffee$/, loader: 'coffee-loader'},
				{
					test: /\.(coffee\.md|litcoffee)$/,
					loader: 'coffee-loader',
					options: {
						literate: true,
					},
				},
				{
					test: /\.css$/,
					use: cssLoaders,
				},
				{
					test: /\.scss$/,
					use: scssLoaders,
				},
				{
					test: /\.(png|gif)$/,
					exclude: [
						path.resolve(root_dir, 'app/assets/asset-symbols'),
						path.resolve(root_dir, 'app/assets/language-dropdown/img'),
						path.resolve(root_dir, 'app/assets/loader'),
					],
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 1000000,
							},
						},
					],
				},
				{
					test: /\.woff$/,
					use: [
						{
							loader: 'url-loader',
							options: {
								limit: 100000,
								mimetype: 'application/font-woff',
							},
						},
					],
				},
				{
					test: /.*\.svg$/,
					exclude: [
						path.resolve(root_dir, 'app/assets/model-type-images'),
						path.resolve(root_dir, 'app/assets/bin-file'),
					],
					use: [
						{
							loader: 'svg-inline-loader',
						},
						{
							loader: 'svgo-loader',
							options: {
								plugins: [
									{cleanupAttrs: true},
									{removeMetadata: true},
									{removeXMLNS: true},
									{removeViewBox: false},
								],
							},
						},
					],
				},
				{
					test: /\.md/,
					use: [
						{
							loader: 'html-loader',
							options: {
								removeAttributeQuotes: false,
							},
						},
						{
							loader: 'markdown-loader',
							options: {},
						},
					],
				},
				{
					test: /\.worker\.js$/,
					use: {loader: 'worker-loader'},
				},
			],
		},
		resolve: {
			modules: [
				path.resolve(root_dir, 'app'),
				path.resolve(root_dir, 'app/lib'),
				'node_modules',
			],
			extensions: ['.ts', '.tsx', '.js', '.jsx', '.coffee', '.json'],
			mainFields: ['module', 'jsnext:main', 'browser', 'main'],
			alias: {
				sanitize$: 'xss',
				moment$: path.resolve(root_dir, 'node_modules/moment/moment.js'),
				meta1js$: path.resolve(root_dir, 'node_modules/meta1js/'),
			},
		},
		plugins: plugins,
		devServer: {
			historyApiFallback: true,
		},
	};

	return config;
};
