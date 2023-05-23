import CountdownTimer from '@components/CountdownTimer';
import Loader from '@components/Loader';
import React, { Suspense } from 'react';

const Header = () => {
    const date = '2023-07-10T15:00:00.000Z';

    return (
        <div className="w-full h-[900px] bg-cover bg-banner">
            <div className="flex items-start justify-center pt-[10rem]">
                <div className="flex justify-center">
                    <div className="flex flex-col items-center gap-y-5">
                        <h1>Joefrey &amp; Sheila</h1>
                        <h3>We Are Getting Married</h3>
                        <Suspense fallback={<Loader />}>
                            <CountdownTimer targetDate={date} />
                        </Suspense>
                        <a href="#" className="btn btn-secondary">
                            <h6>Save the date</h6>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Header;
