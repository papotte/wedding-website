import React from 'react';

import Contact from '@app/success/contact';

import styles from './page.module.scss';


export default function Success() {
    return (
        <div className={styles.wrapper} data-theme="alt">
            <div className="page w-3/4 flex gap-6 flex-col">
                <h2 className="text-white">Thanks!</h2>
                <p className="text-white/50">
                    <Contact />
                </p>
            </div>
        </div>
    );
}
