import React, { PropsWithChildren } from 'react';

import { Metadata } from 'next';

import Header from '@components/Header';
import Nav from '@components/Nav';
import { i18n } from '@i18n';
import '@styles/globals.scss';
import { eventData } from '@utils/eventData';


import { betterSaturday, inter, montserrat, sacramento, workSans } from './fonts';

const { initials } = eventData;

export const metadata: Metadata = {
    title: initials + ' Wedding',
    icons: {
        icon: '/logo-rings.svg',
        shortcut: '/favicon.ico',
    },
};


export async function generateStaticParams() {
    return i18n.locales.map((locale) => ({ lang: locale }))
  }

type RootProps = {
    params: {
        lang: string;
    };
};
const RootLayout = ({ children, params }: PropsWithChildren<RootProps>) => {
    const showDetails: boolean = process.env.NEXT_PUBLIC_SHOW_DETAILS === 'true';

    return (
        <html
            lang={params.lang}
            className={`${inter.variable} ${workSans.variable} ${sacramento.variable} ${montserrat.variable} ${betterSaturday.variable}`}>
            <body>
                {showDetails && <Nav />}
                <div className="w-full flex flex-col items-center justify-between">
                    <Header />
                    {children}
                </div>
            </body>
        </html>
    );
};
export default RootLayout;
