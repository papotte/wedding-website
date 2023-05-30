'use client';

import { useFormattedDates } from '@hooks/useFormattedDates';
import { eventData } from '@utils/eventData';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import React from 'react';

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
    const { title, location, events } = eventData;
    const formattedDates = useFormattedDates(events.ceremony.start, events.party.end);
    return (
        <AddToCalendarButton
            styleLight={styleVars.join(';')}
            name={title + ' Wedding'}
            options={['Apple', 'Google', 'iCal']}
            location={location.map}
            startDate={formattedDates.startDate}
            endDate={formattedDates.endDate}
            startTime={formattedDates.startTime}
            endTime={formattedDates.endTime}
            timeZone="Europe/Berlin"
            buttonStyle="round"
            lightMode="light"
            label="Save the date"></AddToCalendarButton>
    );
};

export default SaveTheDateButton;
