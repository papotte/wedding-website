import React from 'react';

import { useTranslations } from 'next-intl';

import { DateTimeDisplay } from './DateTimeDisplay';

type CounterProps = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};
export const ShowCounter = ({ days, hours, minutes, seconds }: CounterProps) => {
    const t = useTranslations('countdown');

    return (
        <div className="justify-center flex row gap-x-4">
            <DateTimeDisplay value={days} type={t('days')} />
            <DateTimeDisplay value={hours} type={t('hours')} />
            <DateTimeDisplay value={minutes} type={t('minutes')} />
            <DateTimeDisplay value={seconds} type={t('seconds')} />
        </div>
    );
};
