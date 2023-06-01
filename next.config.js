const path = require('path');
const { parseISO } = require('date-fns');

const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE;
const currentTime = new Date().getTime();
const countDownDate = parseISO(eventDate).getTime();

// TODO: Add i18n https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/get-dictionary.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
        dirs: ['src'],
    },
    env: {
        eventHasPassed: currentTime > countDownDate,
    },
};

module.exports = nextConfig;
