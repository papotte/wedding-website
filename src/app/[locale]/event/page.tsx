import { useTranslations } from 'next-intl';

import EventDetails from './eventDetails';
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
            </div>
        </div>
    );
};
export default Event;
