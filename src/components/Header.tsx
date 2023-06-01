import React, { Suspense } from 'react';

import { format } from 'date-fns';

import CountdownTimer from '@components/CountdownTimer';
import Loader from '@components/Loader';
import SaveTheDateButton from '@components/SaveTheDateButton';
import { eventData } from '@utils/eventData';

const Header = () => {
    const { title, date } = eventData;
    const formattedDate = format(new Date(eventData.date), 'MMMM dd, yyyy');
    return (
        <div className="hero bg-banner bg-cover bg-bottom py-[10rem]" data-theme="alt">
            <div className="hero-content text-center flex-col">
                <h1>{title}</h1>
                <h3>We are getting married on </h3>
                <h3 className="text-3xl">{formattedDate}</h3>
                <Suspense fallback={<Loader />}>
                    <CountdownTimer targetDate={date} />
                    <SaveTheDateButton />
                </Suspense>
            </div>
        </div>
    );
};

export default Header;
