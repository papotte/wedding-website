import { Suspense } from 'react';

import EventDetails from '@/app/event/eventDetails';
import Loader from '@components/Loader';

const Event = () => {
    return (
        <div className="w-full bg-primary-900 bg-event bg-cover bg-center" data-theme="alt">
            <div className="page w-3/4 flex gap-6 flex-col items-center text-center">
                <p className="uppercase text-gray-400 text-sm font-semibold">Our Special Events</p>
                <h2>Wedding Events</h2>
                <Suspense fallback={<Loader />}>
                    <EventDetails />
                </Suspense>
            </div>
        </div>
    );
};
export default Event;
