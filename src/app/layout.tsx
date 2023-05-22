import React from 'react';

import { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Header from '@components/Header';
import Nav from '@components/Nav';

import '@styles/globals.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'R&R Wedding',
    description: '07.10.2023',
    icons: {
        icon: '/logo-rings.svg',
        shortcut: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Nav></Nav>
                <Header></Header>
                {children}
            </body>
        </html>
    );
}
