import { EventData } from '@models/EventData';

const defaultNames = ['Jeofrey', 'Sheila'];
export const defaultDate = '2021-10-10';
export const defaultData = {
    names: defaultNames,
    timezone: 'America/New_York',
    location: {
        name: 'The Venue',
        city: 'City, Country',
        address: '123 Main St',
        url: 'https://www.google.com/maps?q=123+Main+St',
        map: 'https://goo.gl/maps/123',
        embed: '',
    },
};

const names: string[] = process.env.NEXT_PUBLIC_NAMES?.split(',') ?? defaultNames;

const date = process.env.NEXT_PUBLIC_EVENT_DATE ?? defaultDate;

export const eventData: EventData = {
    names,
    initials: names.map((n) => n.at(0)).join('&'),
    title: names.join(' & '),
    date,
    timezone: process.env.NEXT_PUBLIC_EVENT_TIMEZONE ?? defaultData.timezone,
    email: process.env.NEXT_PUBLIC_EMAIL,
    location: {
        name: process.env.NEXT_PUBLIC_EVENT_LOCATION_NAME ?? defaultData.location.name,
        city: process.env.NEXT_PUBLIC_EVENT_LOCATION_CITY ?? defaultData.location.city,
        address: process.env.NEXT_PUBLIC_EVENT_LOCATION_ADDRESS ?? defaultData.location.address,
        map: process.env.NEXT_PUBLIC_EVENT_LOCATION_MAP_URL ?? defaultData.location.map,
        embed: process.env.NEXT_PUBLIC_EVENT_LOCATION_MAP_EMBED ?? defaultData.location.embed,
        url: process.env.NEXT_PUBLIC_EVENT_LOCATION_URL ?? defaultData.location.url,
    },
};
