'use client';
import React from 'react';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

const EventTitle = () => {
    const { data, error } = useEventData();

    if (error) return <div>Failed to load</div>;
    if (!data) return <Loader />;

    const { title } = data;

    return <h1>{title}</h1>;
};

export default EventTitle;
