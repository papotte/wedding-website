'use client';
import React, { Fragment } from 'react';

import { useFormatter } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

const EventDetails = () => {
    const { data, error } = useEventData();
    const formatter = useFormatter();

    if (!data) return <Loader error={error} />;

    const date = new Date(data.date);
    const formattedDate = formatter.dateTime(date, { dateStyle: 'long' });

    return (
        <Fragment>
            {formattedDate} - {data.location.city}
        </Fragment>
    );
};

export default EventDetails;
