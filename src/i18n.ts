import deepmerge from 'deepmerge';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ locale }) => {
    const baseDir = './locales';

    return {
        messages: deepmerge(
            (await import(`${baseDir}/en.json`)).default,
            (await import(`${baseDir}/${locale}.json`)).default
        ),
    };
});
