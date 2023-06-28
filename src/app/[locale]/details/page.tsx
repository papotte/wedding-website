import { useTranslations } from 'next-intl';

const Details = () => {
    const t = useTranslations('Details');

    return (
        <div className="w-full">
            <div className="page w-3/4 flex gap-6 flex-col items-center text-center">
                <h2>{t('title')} </h2>
                <div className="items-center pt-8">
                    <h5 className="text-5xl text-left">{t('dresscode.title')}</h5>
                    <p className="text-right">{t('dresscode.description')}</p>
                </div>
                <div className="items-center pt-8">
                    <h2 className="text-5xl text-left">{t('directions.title')}</h2>
                    <p className="text-right">{t('directions.description')}</p>
                </div>
                <div className="items-center pt-8">
                    <h2 className="text-5xl text-left">{t('lodging.title')}</h2>
                    <p className="text-right">{t('lodging.description')}</p>
                </div>
            </div>
        </div>
    );
};
export default Details;
