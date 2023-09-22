'use client';

import React from 'react';

import { useTranslations } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './Directions.module.scss';

const Directions = () => {
    const t = useTranslations('Directions');

    const { data } = useEventData();

    if (!data) return <Loader />;

    return (
        <div className={styles.content}>
            <div className={styles.list}>
                <h6>{t('arrival.title')}</h6>
                <div>
                    {t('arrival.time', {
                        date: data.shuttle.start,
                    })}
                </div>
                <div>{t('arrival.location')}</div>
            </div>
            <div className={styles.hint}>{t('hint')}</div>
            <div className={styles.list}>
                <h6>{t('departure.title')}</h6>
                <div>
                    {t('departure.time', {
                        date: data.shuttle.end,
                    })}
                </div>
                <div>{t('departure.location')}</div>
            </div>
            <div className="mt-8">{t('alternative')}</div>
            <div className={styles.map}>
                <iframe
                    src={data.location.embed}
                    width="400"
                    height="300"
                    style={{ border: 0 }}
                    allow=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};
export default Directions;
