import daisyui from 'daisyui';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			container: {
				center: true,
				padding: '1rem'
			}
		}
	},
	plugins: [daisyui],
	daisyui: {
		themes: [
			{
				arquiepoxy: {
					primary: '#1b68a9',
					'primary-content': '#ffffff',
					secondary: '#0ea5e9',
					'secondary-content': '#001018',
					accent: '#22c55e',
					'accent-content': '#052e16',
					neutral: '#0b1220',
					'neutral-content': '#e5e7eb',
					'base-100': '#0b1220',
					'base-200': '#0f1a2e',
					'base-300': '#16233d',
					'base-content': '#e5e7eb',
					info: '#38bdf8',
					success: '#22c55e',
					warning: '#f59e0b',
					error: '#ef4444'
				}
			},
			'dark'
		]
	}
};
