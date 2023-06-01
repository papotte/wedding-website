'use client';
import React, { Fragment } from 'react';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

const Contact = () => {
    const { data, error } = useEventData();

    if (error) return <div>Failed to load</div>;
    if (!data) return <Loader />;

    const { email } = data;

    return <Fragment>If you have any questions or requests, please contact us at {email}</Fragment>;
};

export default Contact;
