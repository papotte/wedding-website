'use client';

import { useTranslations } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './page.module.scss';

const Details = () => {
    const t = useTranslations('Details');

    const { data } = useEventData();

    if (!data) return <Loader />;

    return (
        <div className="w-full">
            <div className="page w-3/4 flex gap-6 flex-col items-center text-center">
                <h2>{t('title')} </h2>
                <div className={styles.details}>
                    <div className={styles.row}>
                        <h5>{t('dresscode.title')}</h5>
                        <div className={styles.content}>{t('dresscode.description')}</div>
                    </div>
                    <div className="divider"></div>
                    <div className={styles.row}>
                        <h5>{t('directions.title')}</h5>
                        <div className={styles.content}>{t('directions.description')}</div>
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
                    <div className="divider"></div>

                    <div className={styles.row}>
                        <h5>{t('lodging.title')}</h5>
                        <div className={styles.content}>{t('lodging.description')}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Details;
