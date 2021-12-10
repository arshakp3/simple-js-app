module.exports = {
	'env': {
		'browser': true,
		'es2021': true
	},
	'extends': 'eslint:recommended',
	'parserOptions': {
		'ecmaVersion': 13,
		'sourceType': 'module'
	},
	'rules': {

		'linebreak-style': [
			'error',
			'windows'
		],
		'quotes': [
			'error',
			'single'
		]
	}
}