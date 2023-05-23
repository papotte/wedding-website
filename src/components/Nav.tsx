'use client';
import React from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import Link from 'next/link';
import styles from './Nav.module.scss';

const Nav = () => {
    return (
        <NavigationMenu.Root className={`${styles.NavigationMenuRoot} absolute w-full top`}>
            <NavigationMenu.List
                className={`${styles.NavigationMenuList} flex row justify-end gap-4 px-32 py-10`}>
                <Link className={styles.NavigationMenuLink} href="/">
                    Home
                </Link>
                <Link className={styles.NavigationMenuLink} href="/gallery">
                    Gallery
                </Link>
                <Link className={styles.NavigationMenuLink} href="/rsvp">
                    RSVP
                </Link>
            </NavigationMenu.List>
        </NavigationMenu.Root>
    );
};
export default Nav;
