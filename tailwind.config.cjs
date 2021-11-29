const config = {
	// mode: 'jit',
	purge: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [
		require('daisyui'),
	],

	daisyui: {
		themes: [
			{
				'brand': {
					'primary': '#00a335',
					'primary-focus': '#007938',
					'primary-content': '#ffffff',
					'secondary': '#507888',
					'secondary-focus': '#21495a',
					'secondary-content': '#ffffff',
					'accent': '#27bdbe',
					'accent-focus': '#00a196',
					'accent-content': '#ffffff',
					'neutral': '#3d4451',
					'neutral-focus': '#2a2e37',
					'neutral-content': '#ffffff',
					'base-100': '#ffffff',
					'base-200': '#f9fafb',
					'base-300': '#d1d5db',
					'base-content': '#1f2937',
					'info': '#00a8d5',
					'success': '#00a335',
					'warning': '#eab42a',
					'error': '#d72735',
				},
			},
		],
	},
};

module.exports = config;
