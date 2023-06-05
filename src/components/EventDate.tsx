'use client';

import React, { Fragment } from 'react';

import { format } from 'date-fns';

import CountdownTimer from '@components/countdown';
import Loader from '@components/Loader';
import SaveTheDateButton from '@components/SaveTheDateButton';
import { useEventData } from '@hooks/useEventData';

const EventDate = () => {
    const { data, error } = useEventData();

    if (!data) return <Loader error={error} />;

    const { date } = data;
    const formattedDate = format(new Date(date), 'MMMM dd, yyyy');
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
