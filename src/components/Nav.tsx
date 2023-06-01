'use client';
import React from 'react';

import Link from 'next/link';

import styles from './Nav.module.scss';

type NavItem = {
    name: string;
    link: string;
};

const NavigationItems: NavItem[] = [
    {
        name: 'Home',
        link: '/',
    },
    {
        name: 'Event',
        link: '/event',
    },
    {
        name: 'Gallery',
        link: '/gallery',
    },
    {
        name: 'RSVP',
        link: '/rsvp',
    },
];

const NavigationLink = ({ item }: React.PropsWithRef<{ item: NavItem }>) => {
    return (
        <li className={styles.NavigationMenuLink}>
            <Link href={item.link}>{item.name}</Link>
        </li>
    );
};

const Nav = () => {
    const showGallery: boolean = process.env.eventHasPassed === 'true';

    const filteredLinks = NavigationItems.filter((item) => {
        if (!showGallery) {
            return item.name !== 'Gallery';
        } else {
            return item.name !== 'RSVP';
        }
    });

    return (
        <div className={`navbar absolute`}>
            <div className="navbar-end flex-1">
                <ul className="menu menu-horizontal px-1">
                    {filteredLinks.map((item, index) => (
                        <NavigationLink item={item} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};
export default Nav;
