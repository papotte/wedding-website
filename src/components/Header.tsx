'use client';
import CountdownTimer from '@components/CountdownTimer';
import Loader from '@components/Loader';
import SaveTheDateButton from '@components/SaveTheDateButton';
import { eventData } from '@utils/eventData';
import React, { Suspense } from 'react';

const Header = () => {
    const { title, date } = eventData;

    return (
        <div className="hero bg-banner bg-cover py-[10rem]">
            <div className="hero-content text-center flex-col">
                <h1>{title}</h1>
                <h3>We Are Getting Married</h3>
                <Suspense fallback={<Loader />}>
                    <CountdownTimer targetDate={date} />
                    <SaveTheDateButton />
                </Suspense>
            </div>
        </div>
    );
};

export default Header;
