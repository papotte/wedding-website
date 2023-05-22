/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        colors: {
            black: colors.black,
            white: colors.white,
            primary: 'darken(#428bca, 6.5%)',
            success: '#5cb85c',
            info: '#5bc0de',
            warning: '#f0ad4e',
            danger: '#d9534f',
        },
        fontFamily: {
            primary: ['Graphik', 'sans-serif'],
            secondary: ['Merriweather', 'serif'],
        },
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [],
};
