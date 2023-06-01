import React from 'react';

import { eventData } from '@utils/eventData';

import styles from './page.module.scss';

export default function Success() {
    const email = eventData.email;
    return (
        <div className={styles.wrapper} data-theme="alt">
            <div className="page w-3/4 flex gap-6 flex-col">
                <h2 className="text-white">Thanks!</h2>
                <p className="text-white/50">
                    If you have any questions or requests, please contact us at {email}
                </p>
            </div>
        </div>
    );
}
