import { inter, sacramento, workSans } from '@/app/fonts';
import Header from '@components/Header';
import Nav from '@components/Nav';

import '@styles/globals.scss';
import { eventData } from '@utils/eventData';

import { Metadata } from 'next';
import React from 'react';

const { initials } = eventData;

export const metadata: Metadata = {
    title: initials + ' Wedding',
    icons: {
        icon: '/logo-rings.svg',
        shortcut: '/favicon.ico',
    },
};

const RootLayout = ({ children }: { children: React.ReactNode }) => (
    <html lang="en" className={`${inter.variable} ${workSans.variable} ${sacramento.variable}`}>
        <body>
            <Nav />
            <Header />
            <main className="container mx-auto">{children}</main>
        </body>
    </html>
);
export default RootLayout;
