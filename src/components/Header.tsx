import React, { Suspense } from 'react';

import { useTranslations } from 'next-intl';

import EventDate from '@components/EventDate';
import EventTitle from '@components/EventTitle';
import Loader from '@components/Loader';


const Header = () => {
    const t = useTranslations('Main');
    return (
        <div className="hero bg-banner md:bg-cover bg-bottom py-[10rem]" data-theme="alt">
            <div className="hero-content text-center flex-col">
                <Suspense fallback={<Loader />}>
                    <EventTitle />
                    <h3>{t('title')} </h3>
                    <EventDate />
                </Suspense>
            </div>
        </div>
    );
};

export default Header;
