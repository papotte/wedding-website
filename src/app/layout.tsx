import { inter, sacramento, workSans } from '@/app/fonts';
import Header from '@components/Header';
import Loader from '@components/Loader';
import Nav from '@components/Nav';

import '@styles/globals.scss';

import { Metadata } from 'next';
import React, { Suspense } from 'react';

export const metadata: Metadata = {
    title: 'R&R Wedding',
    description: '07.10.2023',
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
            <Suspense fallback={<Loader />}>
                <main className="container mx-auto">{children}</main>
            </Suspense>
        </body>
    </html>
);
export default RootLayout;
