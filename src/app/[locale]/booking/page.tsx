'use client';

import React from 'react';

import { format } from 'date-fns';
import { useTranslations } from 'next-intl';

import Directions from '@components/Directions';
import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './page.module.scss';

const Booking = () => {
    const t = useTranslations('Booking');

    const { data } = useEventData();

    if (!data) return <Loader />;

    const hotelDates = {
        start: format(data.dates.start, 'dd.MM.yyyy'),
        end: format(data.dates.end, 'dd.MM.yyyy'),
    };

    return (
        <div className="w-full mb-[300px]">
            <div className="page w-3/4 flex gap-6 flex-col items-center text-center">
                <h2>{t('title')} </h2>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <h5>{t('hotel.title')}</h5>
                        <div className={styles.content}>
                            {t('hotel.description')}
                            <div className={styles.list}>
                                <div>{t('hotel.dates', hotelDates)}</div>
                                <div>
                                    {t('hotel.code', { code: 'Hochzeit Bermudez - Crespillo' })}
                                </div>
                            </div>
                            <div className={styles.hint}>{t('hotel.hint')}</div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className={styles.row} id="shuttle">
                        <h5>{t('directions.title')}</h5>
                        <div className={styles.content}>{t('directions.description')}</div>
                    </div>
                    <div className={styles.extra}>
                        <Directions />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Booking;
