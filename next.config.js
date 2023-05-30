const path = require('path');

// TODO: Add i18n https://github.com/vercel/next.js/blob/canary/examples/app-dir-i18n-routing/get-dictionary.ts
/** @type {import('next').NextConfig} */
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    eslint: {
        dirs: ['src'],
    },
};

module.exports = nextConfig;
