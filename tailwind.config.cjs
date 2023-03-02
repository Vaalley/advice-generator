/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			screens: {
				// '-2xl': { max: '1439px' },
				'-xl': { max: '1279px' },
				'-lg': { max: '1023px' },
				'-md': { max: '767px' },
				'-sm': { max: '639px' }
			},
			colors: {
				'light-cyan': 'hsl(193, 38%, 86%)',
				'neon-green': 'hsl(150, 100%, 66%)',
				'grayish-blue': 'hsl(217, 19%, 38%)',
				'dark-grayish-blue': 'hsl(217, 19%, 24%)',
				'dark-blue': 'hsl(218, 23%, 16%)'
			},
			fontFamily: {
				Roboto: ['Roboto', 'sans-serif'],
				'dancing-script': ['Dancing Script', 'cursive']
			}
		}
	},
	plugins: []
};
