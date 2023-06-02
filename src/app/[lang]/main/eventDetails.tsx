'use client';
import React, { Fragment } from 'react';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

const EventDetails = () => {
    const { data, error } = useEventData();

    if (error) return <div>Failed to load</div>;
    if (!data) return <Loader />;

    return (
        <Fragment>
            {data.formattedDates.fullDate} - {data.location.city}
        </Fragment>
    );
};

export default EventDetails;
