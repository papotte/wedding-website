import React, { Suspense } from 'react';

import EventDate from '@components/EventDate';
import EventTitle from '@components/EventTitle';
import Loader from '@components/Loader';
import { useDictionary } from '@/hooks/useDictionary';

const Header = () => {
    const {dictionary} = useDictionary()

    return (
        <div className="hero bg-banner md:bg-cover bg-bottom py-[10rem]" data-theme="alt">
            <div className="hero-content text-center flex-col">
                <Suspense fallback={<Loader />}>
                    <EventTitle />
                    <h3>We are getting married on </h3>
                    <EventDate />
                </Suspense>
            </div>
        </div>
    );
};

export default Header;
