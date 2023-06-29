import { useTranslations } from 'next-intl';

import styles from './page.module.scss';

const Main = () => {
    const t = useTranslations('Main');

    return (
        <div className="w-full">
            <div className="page text-center">
                <div className="flex flex-row gap-5 items-center flex-wrap md:flex-nowrap">
                    <div className={styles.text}>
                        <h2>{t('title')}</h2>
                        <p className="text-right">{t('subtitle')}</p>
                    </div>
                    <div className={styles.engagementPicture}></div>
                </div>
            </div>
        </div>
    );
};
export default Main;
