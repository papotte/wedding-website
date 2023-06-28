import { useTranslations } from 'next-intl';

import EventDetails from '@app/main/eventDetails';

import EventTimeline from './eventTimeline';

const Event = () => {
    const t = useTranslations('Event');

    return (
        <div className="w-full">
            <div className="page w-3/4 flex gap-6 flex-col items-center text-center">
                <h2>{t('title')} </h2>
                <h3 className="text-secondary-600">
                    <EventDetails />
                </h3>
                <EventTimeline />
                <div className="items-center pt-8">
                    <h2 className="text-5xl text-left">{t('dresscode.title')}</h2>
                    <p className="text-right">{t('dresscode.description')}</p>
                </div>
            </div>
        </div>
    );
};
export default Event;
