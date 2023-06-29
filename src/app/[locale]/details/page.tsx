import { useTranslations } from 'next-intl';

import styles from './page.module.scss';

const Details = () => {
    const t = useTranslations('Details');

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
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5957.079738461267!2d13.8334114!3d52.5553493!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a833a697a09c97%3A0x7421130f2f8357b8!2sSeehotel%20Villago!5e1!3m2!1sen!2sde!4v1688035942473!5m2!1sen!2sde"
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
