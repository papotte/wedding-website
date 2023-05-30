'use client';
import Link from 'next/link';
import React from 'react';
import styles from './Nav.module.scss';

const NavigationItems = [
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

const links = NavigationItems.map((item, index) => {
    return (
        <li key={index} className={styles.NavigationMenuLink}>
            <Link href={item.link}>{item.name}</Link>
        </li>
    );
});

const Nav = () => {
    return (
        <div className={`navbar absolute`}>
            <div className="navbar-end flex-1">
                <ul className="menu menu-horizontal px-1">{...links}</ul>
            </div>
        </div>
    );
};
export default Nav;
