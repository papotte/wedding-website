'use client';

import React, { Fragment } from 'react';

import { AddToCalendarButton } from 'add-to-calendar-button-react';
import { useTranslations } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

const styleVars: string[] = [
    '--btn-background: var(--button-background)',
    '--btn-background-hover: var(--button-background-hover)',
    '--btn-shadow: none',
    '--btn-text: var(--button-color)',
    '--btn-text-hover: var(--button-color-hover)',
    '--btn-shadow-hover: none',
    '--font: var(--font-work-sans)',
];

const SaveTheDateButton = () => {
    const { data, error } = useEventData();
    const t = useTranslations('Calendar');

    if (!data) return <Loader error={error} />;

    const { title, location, formattedDates, timezone } = data;

    const calendarTitle = t('title', { title });
    return (
        <Fragment>
            <AddToCalendarButton
                styleLight={styleVars.join(';')}
                name={calendarTitle}
                options={['Apple', 'Google', 'iCal']}
                location={location.map}
                startDate={formattedDates.startDate}
                endDate={formattedDates.endDate}
                startTime={formattedDates.startTime}
                endTime={formattedDates.endTime}
                timeZone={timezone}
                buttonStyle="round"
                lightMode="light"
                label={t('button')}></AddToCalendarButton>
        </Fragment>
    );
};

export default SaveTheDateButton;
