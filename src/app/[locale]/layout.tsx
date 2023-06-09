import React, { ReactNode } from 'react';

import { Metadata, ResolvingMetadata } from 'next';
import { notFound } from 'next/navigation';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { betterSaturday, inter, montserrat, sacramento, workSans } from '@/fonts';
import Header from '@components/Header';
import Nav from '@components/Nav';
import { eventData } from '@utils/eventData';


const { initials } = eventData;

type Props = {
    children: ReactNode;
    params: { locale: string };
};

export async function generateMetadata(parent?: ResolvingMetadata): Promise<Metadata> {
    const t = await getTranslations();

    const previousImages = (await parent)?.openGraph?.images || [];

    return {
        title: t('metadata.title', { initials }),
        icons: {
            icon: '/logo-rings.svg',
            shortcut: '/favicon.ico',
        },
        openGraph: {
            images: ['/api/og', ...previousImages],
        },
    };
}

export default async function LocaleLayout({ children, params }: Props) {
    const locale = useLocale();
    const showDetails: boolean = process.env.NEXT_PUBLIC_SHOW_DETAILS === 'true';
    let messages;
    try {
        messages = (await import(`../../locales/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }
    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <html
            lang={locale}
            className={`${inter.variable} ${workSans.variable} ${sacramento.variable} ${montserrat.variable} ${betterSaturday.variable}`}>
            <body>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    {showDetails && <Nav />}
                    <div className="body w-full min-h-screen flex flex-col items-center justify-between bg-simple">
                        <Header />
                        {children}
                    </div>
                    <div className="footer bg-trees"></div>
                </NextIntlClientProvider>
            </body>
        </html>
    );
}
