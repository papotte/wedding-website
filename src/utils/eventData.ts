export interface EventData {
    names: string[];
    title: string;
    initials: string;
    date: string;
    location: {
        address: string;
        map: string;
        url: string;
        name: string;
    };
}

let defaultNames = ['Jeofrey', 'Sheila'];
const defaults = {
    date: '2021-10-10',
    location: {
        name: 'The Venue',
        address: '123 Main St',
        url: 'https://www.google.com/maps?q=123+Main+St',
        map: 'https://goo.gl/maps/123',
    },
};

const names: string[] = process.env.NEXT_PUBLIC_NAMES?.split(',') ?? defaultNames;
export const eventData: EventData = {
    names,
    initials: names.map((n) => n.at(0)).join('&'),
    title: names.join(' & '),
    date: process.env.NEXT_PUBLIC_EVENT_DATE ?? defaults.date,
    location: {
        name: process.env.NEXT_PUBLIC_EVENT_LOCATION_NAME ?? defaults.location.name,
        address: process.env.NEXT_PUBLIC_EVENT_LOCATION_ADDRESS ?? defaults.location.address,
        map: process.env.NEXT_PUBLIC_EVENT_LOCATION_MAP_URL ?? defaults.location.map,
        url: process.env.NEXT_PUBLIC_EVENT_LOCATION_URL ?? defaults.location.url,
    },
};
