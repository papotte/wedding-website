import EventDetails from '@/app/event/eventDetails';
import Loader from '@components/Loader';
import { Suspense } from 'react';

const Event = () => {
    return (
        <div className="page w-full text-white bg-event">
            <p className="uppercase text-gray-400 text-sm font-semibold">Our Special Events</p>
            <h2 className="text-white">Wedding Events</h2>
            <Suspense fallback={<Loader />}>
                <EventDetails />
            </Suspense>
        </div>
    );
};
export default Event;
