'use client';

import React from 'react';

import Image from 'next/image';
import { useTranslations } from 'next-intl';

import Directions from '@components/Directions';
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

                    <div className={styles.row} id="shuttle">
                        <h5>{t('directions.title')}</h5>
                        <div className={styles.content}>{t('directions.description')}</div>
                    </div>
                    <div className={styles.extra}>
                        <Directions />
                    </div>
                    <div className="divider"></div>

                    <div className={styles.row}>
                        <h5>{t('lodging.title')}</h5>
                        <div className={styles.content}>{t('lodging.description')}</div>
                    </div>

                    <div className="divider"></div>

                    <div className={styles.row}>
                        <h5>{t('gifts.title')}</h5>
                        <div className={styles.content}>{t('gifts.description')}</div>
                    </div>
                    <div className={styles.extra}>
                        <div className={styles.bankDetails}>
                            <span>Ross Bermúdez De La Hoz</span>
                            <span>IBAN: DE17100110012469495445</span>
                            <span>BIC: NTSBDEB1XXX</span>
                        </div>
                        <div className={styles.paypal}>
                            <a href={'https://paypal.me/' + data.paypal} target="_blank">
                                <Image
                                    src="/images/paypal.svg"
                                    alt="paypal.me"
                                    width={300}
                                    height={300}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Details;
