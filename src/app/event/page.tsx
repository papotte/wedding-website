import { Suspense } from 'react';

import EventDetails from '@/app/event/eventDetails';
import Loader from '@components/Loader';

const Event = () => {
    return (
        <div className="page w-full bg-event bg-cover bg-center" data-theme="alt">
            <p className="uppercase text-gray-400 text-sm font-semibold">Our Special Events</p>
            <h2>Wedding Events</h2>
            <Suspense fallback={<Loader />}>
                <EventDetails />
            </Suspense>
        </div>
    );
};
export default Event;
