/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

const customColors = require('./colors.json');

const daisyUiColors = {
    primary: customColors.primary.DEFAULT,
    secondary: customColors.secondary.DEFAULT,
    accent: customColors.accent.DEFAULT,
    neutral: customColors.neutral,
    info: customColors.info,
    success: customColors.success,
    warning: customColors.warning,
    error: customColors.error,
};
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
                foreground: customColors.primary['900'],
                black: colors.black,
                white: colors.white,
            },
            fontFamily: {
                primary: ['var(--font-montserrat)', 'sans-serif'],
                secondary: ['var(--font-inter)', 'sans-serif'],
                fancy: ['var(--font-better-saturday)', 'serif'],
            },
            backgroundImage: {
                banner: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.3)), url("/images/background_1.png")',
                simple: 'linear-gradient(rgba(255,255,255,.5), rgba(0,0,0,.2)), url("/images/background.png")',
                trees: 'url("/images/trees.png")',
                event: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/images/img_bg_3.jpg")',
                rsvp: 'linear-gradient(rgba(0,0,0,.5), rgba(0,0,0,.5)), url("/images/img_bg_4.jpg")',
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
                fadeInUp: {
                    from: { opacity: 0, transform: 'translateY(100px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                },
                beat: {
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
            fadeInUp: 'fadeInUp 200ms ease',
            enterFromLeft: 'enterFromLeft 250ms ease',
            enterFromRight: 'enterFromRight 250ms ease',
            exitToLeft: 'exitToLeft 250ms ease',
            exitToRight: 'exitToRight 250ms ease',
            beat: 'beat 1s ease infinite',
            pulse: 'pulse 1s ease infinite',
        },
    },
    plugins: [
        require('daisyui'),
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
                    color: 'inherit',
                    fontFamily: theme('fontFamily.fancy'),
                },
                h3: {
                    fontSize: theme('fontSize.2xl'),
                    color: 'inherit',
                    fontFamily: theme('fontFamily.primary'),
                },
                h5: {
                    color: 'inherit',
                    fontFamily: theme('fontFamily.fancy'),
                    fontSize: theme('fontSize.3xl'),
                },
                h6: {
                    color: 'inherit',
                    fontSize: theme('fontSize.xs'),
                    textTransform: 'uppercase',
                },
                legend: {
                    color: 'inherit',
                    fontSize: theme('fontSize.base'),
                    fontWeight: '300',
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
    daisyui: {
        styled: true,
        themes: [
            {
                default: {
                    ...daisyUiColors,
                    'base-100': colors.white,
                },
            },
        ],
    },
};
