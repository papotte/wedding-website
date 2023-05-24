'use client';

import { eventData } from '@utils/eventData';
import { AddToCalendarButton } from 'add-to-calendar-button-react';
import React from 'react';

const { title, date, location } = eventData;

const startDate = new Date(date);
const startTime = startDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
const endDate = startDate;
endDate.setHours(startDate.getHours() + 9);
const endTime = endDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

const styleVars: string[] = [
    '--btn-background: var(--button-background)',
    '--btn-background-hover: var(--button-background-hover)',
    '--btn-shadow: none',
    '--btn-text: var(--button-color)',
    '--btn-text-hover: var(--button-color-hover)',
    '--btn-shadow-hover: none',
    '--font: var(--font-work-sans)',
    '--font-size: var(--font-size-xs)',
];

const SaveTheDateButton = () => {
    return (
        <AddToCalendarButton
            styleLight={styleVars.join(';')}
            name={title + ' Wedding'}
            options={['Apple', 'Google', 'iCal']}
            location={location.map}
            startDate={date}
            endDate={date}
            startTime={startTime}
            endTime={endTime}
            timeZone="Europe/Berlin"
            buttonStyle="round"
            lightMode="light"
            label="Save the date"></AddToCalendarButton>
    );
};

export default SaveTheDateButton;
