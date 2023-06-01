import { addHours, parseISO } from 'date-fns';

import { EventData } from '@models/EventData';

let generateEvents = (strDate: string) => {
    const date: Date = parseISO(strDate);

    return {
        date: strDate,
        events: {
            ceremony: {
                start: date,
                end: addHours(date, 2),
            },
            party: {
                start: addHours(date, 3),
                end: addHours(date, 10),
            },
        },
    };
};
let defaultNames = ['Jeofrey', 'Sheila'];
let defaultDate = '2021-10-10';
export const defaultData = {
    names: defaultNames,
    location: {
        name: 'The Venue',
        city: 'City, Country',
        address: '123 Main St',
        url: 'https://www.google.com/maps?q=123+Main+St',
        map: 'https://goo.gl/maps/123',
    },
};

const names: string[] = process.env.NEXT_PUBLIC_NAMES?.split(',') ?? defaultNames;

const date = process.env.NEXT_PUBLIC_EVENT_DATE ?? defaultDate;
export const eventData: EventData = {
    names,
    initials: names.map((n) => n.at(0)).join('&'),
    title: names.join(' & '),
    ...generateEvents(date),
    location: {
        name: process.env.NEXT_PUBLIC_EVENT_LOCATION_NAME ?? defaultData.location.name,
        city: process.env.NEXT_PUBLIC_EVENT_LOCATION_CITY ?? defaultData.location.city,
        address: process.env.NEXT_PUBLIC_EVENT_LOCATION_ADDRESS ?? defaultData.location.address,
        map: process.env.NEXT_PUBLIC_EVENT_LOCATION_MAP_URL ?? defaultData.location.map,
        url: process.env.NEXT_PUBLIC_EVENT_LOCATION_URL ?? defaultData.location.url,
    },
};
