import React from 'react';

import Image from 'next/image';

import styles from './Footer.module.css';

const Footer = () => (
    <>
        <footer className={styles.footer}>
            <Image
                src="/logo-rings.svg"
                alt="Netlify Logo"
                className={styles.logo}
                width={120}
                height={120}
            />
        </footer>
    </>
);
export default Footer;
