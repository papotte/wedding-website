const { parseISO } = require('date-fns');
const withNextIntl = require('next-intl/plugin')();

const path = require('path');

const ghPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'gh-pages';
const output = ghPages ? 'export' : undefined;
const eventDate = process.env.NEXT_PUBLIC_EVENT_DATE;
const currentTime = new Date().getTime();
const countDownDate = parseISO(eventDate).getTime();

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: { appDir: true },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
        dirs: ['src'],
    },
    env: {
        eventHasPassed: currentTime > countDownDate,
        forceStatic: ghPages,
    },
    basePath: '/nextjs-github-pages',
    reactStrictMode: true,
    output,
    images: {
        unoptimized: ghPages,
    },
};
console.log(nextConfig);

module.exports = withNextIntl(nextConfig);
// module.exports = nextConfig;
