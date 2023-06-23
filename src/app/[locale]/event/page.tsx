import EventDetails from '@app/main/eventDetails';

import EventTimeline from './eventTimeline';

const Event = () => {
    return (
        <div className="w-full bg-tertiary-900 bg-cover bg-center" data-theme="alt">
            <div className="page w-3/4 flex gap-6 flex-col items-center text-center">
                <h2>The Event</h2>
                <h3 className="text-white">
                    <EventDetails />
                </h3>
                <p className="text-gray-300">We invite you to celebrate our wedding</p>
                <EventTimeline />
            </div>
        </div>
    );
};
export default Event;
