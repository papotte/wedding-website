import { betterSaturday, inter, montserrat, sacramento, workSans } from '@/fonts';
import Header from '@components/Header';
import Nav from '@components/Nav';
import { eventData } from '@utils/eventData';
import { useLocale } from 'next-intl';
import { getTranslator } from 'next-intl/server';

import { notFound } from 'next/navigation';
import React, { ReactNode } from 'react';

const { initials } = eventData;

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export async function generateMetadata({ params: { locale } }: Omit<Props, 'children'>) {
    const t = await getTranslator(locale, 'metadata');
    return {
        title: t('title', { initials }),
        icons: {
            icon: '/logo-rings.svg',
            shortcut: '/favicon.ico',
        },
    };
}

export function generateStaticParams() {
    return [{ locale: 'en' }, { locale: 'es' }];
}

export default async function LocaleLayout({ children, params }: Props) {
    const locale = useLocale();
    console.log(params.locale, locale);
    const showDetails: boolean = process.env.NEXT_PUBLIC_SHOW_DETAILS === 'true';

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html
            className={`${inter.variable} ${workSans.variable} ${sacramento.variable} ${montserrat.variable} ${betterSaturday.variable}`}>
            <body>
                {showDetails && <Nav />}
                <div className="body w-full min-h-screen flex flex-col items-center justify-between bg-simple">
                    <Header />
                    {children}
                </div>
                <div className="footer bg-trees"></div>
            </body>
        </html>
    );
}
