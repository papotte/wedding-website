import React from 'react';

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';
import TLink from 'next-intl/link';

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
const locales = ['en', 'es'];

const ChangeLanguage = () => {
    const t = useTranslations('language');
    const locale = useLocale();

    return (
        <div className="dropdown dropdown-end">
            <label tabIndex={0}>{t('button')}</label>
            <ul
                tabIndex={0}
                data-theme="alt"
                className="menu dropdown-content p-2 shadow bg-base-100 rounded-box w-52 mt-4">
                {locales.map((lng) => {
                    if (lng !== locale)
                        return (
                            <li key={lng}>
                                <TLink href="/" locale={lng}>
                                    {t(`${lng}`)}
                                </TLink>
                            </li>
                        );
                })}
            </ul>
        </div>
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
        <div className={`navbar absolute z-50`}>
            <div className="navbar-end flex-1">
                <ul className="menu menu-horizontal px-1">
                    {filteredLinks.map((item, index) => (
                        <NavigationLink item={item} key={index} />
                    ))}
                    <li className={styles.NavigationMenuLink}>
                        <ChangeLanguage />
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Nav;
