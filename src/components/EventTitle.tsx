'use client';

import React from 'react';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

const EventTitle = () => {
    const { data, error } = useEventData();

    if (!data) return <Loader error={error} />;

    const { title } = data;

    return <h1>{title}</h1>;
};

export default EventTitle;
