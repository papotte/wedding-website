const { parseISO } = require('date-fns');
const withNextIntl = require('next-intl/plugin')();

const path = require('path');

const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE;
const currentTime = new Date().getTime();
const countDownDate = parseISO(eventDate).getTime();

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

module.exports = withNextIntl(nextConfig);
// module.exports = nextConfig;
