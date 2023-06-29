const { parseISO } = require('date-fns');
const withNextIntl = require('next-intl/plugin')();

const path = require('path');

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
    },
};

const ghPages = process.env.NEXT_PUBLIC_DEPLOY_TARGET === 'gh-pages';

if (ghPages) {
    nextConfig.output = 'export';
    nextConfig.basePath = '/nextjs-github-pages;';
    nextConfig.images = {
        unoptimized: true,
    };
}
console.log(nextConfig);

module.exports = withNextIntl(nextConfig);
// module.exports = nextConfig;
