'use client';

import { format } from 'date-fns';
import { useTranslations } from 'next-intl';

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
                    <div className={styles.row}>
                        <h5>{t('directions.title')}</h5>
                        <div className={styles.content}>
                            {t('directions.description')}
                            <div className={styles.list}>
                                <h6>{t('directions.arrival.title')}</h6>
                                <div>
                                    {t('directions.arrival.time', {
                                        date: data.shuttle.start,
                                    })}
                                </div>
                                <div>{t('directions.arrival.location')}</div>
                            </div>
                            <div className={styles.hint}>{t('directions.hint')}</div>
                            <div className={styles.list}>
                                <h6>{t('directions.departure.title')}</h6>
                                <div>
                                    {t('directions.departure.time', {
                                        date: data.shuttle.end,
                                    })}
                                </div>
                                <div>{t('directions.departure.location')}</div>
                            </div>
                            <div className="mt-8">{t('directions.alternative')}</div>
                        </div>
                    </div>
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
            </div>
        </div>
    );
};
export default Booking;
