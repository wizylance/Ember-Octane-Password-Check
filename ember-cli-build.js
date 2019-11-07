/* eslint-env node */

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const nodeSass = require('node-sass'); // loads the version in your package.json

module.exports = function(defaults) {
	const environment = EmberApp.env();
	const isProduction = environment === 'production';

	const app = new EmberApp(defaults, {
		sassOptions: {
			includePaths: ['node_modules/materialize-css/sass'],
			implementation: nodeSass,
		},

		intl: {
			silent: true,
		},

		hinting: isProduction,

		autoprefixer: {
			browsers: ['defaults', 'last 3 years', 'IE >= 11'],
			cascade: false,
			enabled: isProduction,
		},
	});

	app.import('vendor/materialize-css/materialize.js');

	return app.toTree();
};
