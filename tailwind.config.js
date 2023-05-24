/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const customColors = require('./colors.json');

module.exports = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            colors: {
                ...customColors,
                black: colors.black,
                white: colors.white,
                success: '#5cb85c',
                info: '#5bc0de',
                warning: '#f0ad4e',
                danger: '#d9534f',
            },
            fontFamily: {
                primary: ['var(--font-work-sans)', 'sans-serif'],
                secondary: ['var(--font-inter)', 'sans-serif'],
                fancy: ['var(--font-sacramento)', 'serif'],
            },
            backgroundImage: {
                banner: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/images/img_bg_2.jpg")',
            },
            keyframes: {
                enterFromRight: {
                    from: { opacity: 0, transform: 'translateX(200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                enterFromLeft: {
                    from: { opacity: 0, transform: 'translateX(-200px)' },
                    to: { opacity: 1, transform: 'translateX(0)' },
                },
                exitToRight: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(200px)' },
                },
                exitToLeft: {
                    from: { opacity: 1, transform: 'translateX(0)' },
                    to: { opacity: 0, transform: 'translateX(-200px)' },
                },
                scaleIn: {
                    from: { opacity: 0, transform: 'rotateX(-10deg) scale(0.9)' },
                    to: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                },
                scaleOut: {
                    from: { opacity: 1, transform: 'rotateX(0deg) scale(1)' },
                    to: { opacity: 0, transform: 'rotateX(-10deg) scale(0.95)' },
                },
                fadeIn: {
                    from: { opacity: 0 },
                    to: { opacity: 1 },
                },
                fadeOut: {
                    from: { opacity: 1 },
                    to: { opacity: 0 },
                },
                pulse: {
                    '0%, 100%': { transform: 'scale(1)', opacity: 1 },
                    '50%': { transform: 'scale(1.05)', opacity: 1 },
                },
            },
        },
        animation: {
            scaleIn: 'scaleIn 200ms ease',
            scaleOut: 'scaleOut 200ms ease',
            fadeIn: 'fadeIn 200ms ease',
            fadeOut: 'fadeOut 200ms ease',
            enterFromLeft: 'enterFromLeft 250ms ease',
            enterFromRight: 'enterFromRight 250ms ease',
            exitToLeft: 'exitToLeft 250ms ease',
            exitToRight: 'exitToRight 250ms ease',
            pulse: 'pulse 1s ease infinite',
        },
    },
    plugins: [
        plugin(function ({ addBase, theme }) {
            addBase({
                h1: {
                    fontSize: '6rem',
                    color: 'inherit',
                    fontFamily: theme('fontFamily.fancy'),
                },
                h2: {
                    fontSize: '3.5rem',
                    fontWeight: 'bold',
                    color: theme('colors.secondary.600'),
                    fontFamily: theme('fontFamily.fancy'),
                },
                h3: {
                    fontSize: theme('fontSize.lg'),
                    color: 'inherit',
                    fontFamily: theme('fontFamily.primary'),
                },
                h5: {
                    color: 'inherit',
                    fontSize: theme('fontSize.2xl'),
                },
                h6: {
                    color: 'inherit',
                    fontSize: theme('fontSize.xs'),
                    textTransform: 'uppercase',
                },
            });
        }),
        plugin(({ matchUtilities }) => {
            matchUtilities({
                perspective: (value) => ({
                    perspective: value,
                }),
            });
        }),
    ],
};
