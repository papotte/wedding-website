import CountdownTimer from '@components/CountdownTimer';
import Loader from '@components/Loader';
import SaveTheDateButton from '@components/SaveTheDateButton';
import { eventData } from '@utils/eventData';
import React, { Suspense } from 'react';

const { title, date } = eventData;

const Header = () => {
    return (
        <div className="w-full h-[700px] bg-cover bg-banner">
            <div className="flex items-start justify-center pt-[10rem]">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-y-5">
                        <h1>{title}</h1>
                        <h3>We Are Getting Married</h3>
                        <Suspense fallback={<Loader />}>
                            <CountdownTimer targetDate={date} />
                        </Suspense>
                        <SaveTheDateButton />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;
