'use client';

import React, { Fragment } from 'react';

import { useFormatter } from 'next-intl';

import CountdownTimer from '@components/countdown';
import Loader from '@components/Loader';
import SaveTheDateButton from '@components/SaveTheDateButton';
import { useEventData } from '@hooks/useEventData';

const EventDate = () => {
    const { data, error } = useEventData();
    const formatter = useFormatter();

    if (!data) return <Loader error={error} />;

    const date = new Date(data.date);

    const formattedDate = formatter.dateTime(date, { dateStyle: 'long' });
    const eventHasPassed: boolean = process.env.eventHasPassed === 'true';

    return (
        <Fragment>
            <h3 className="text-3xl">{formattedDate}</h3>
            {!eventHasPassed && (
                <Fragment>
                    <CountdownTimer targetDate={data.date} />
                    <SaveTheDateButton />
                </Fragment>
            )}
        </Fragment>
    );
};

export default EventDate;
