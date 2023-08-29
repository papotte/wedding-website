import { addHours, addMinutes, format, setHours, subHours } from 'date-fns';
import useSWR from 'swr';

import { EventData } from '@models/EventData';

const formatDate = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
};

const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
};

export const formatDates = (start: Date, end: Date) => {
    return {
        startDate: formatDate(start),
        startTime: formatTime(start),
        endDate: formatDate(end),
        endTime: formatTime(end),
    };
};
let generateEvents = (strDate: string) => {
    const dateNotIso = new Date(strDate);
    const startTime: Date = addMinutes(dateNotIso, dateNotIso.getTimezoneOffset());

    const shuttleStart = subHours(startTime, 3);
    const arrivalStart = subHours(startTime, 1);
    const ceremonyStart = startTime;
    const ceremonyEnd = addHours(ceremonyStart, 2);
    const dinnerStart = addHours(ceremonyStart, 3);
    const partyStart = addHours(ceremonyStart, 5);
    const partyEnd = addHours(ceremonyStart, 10);
    const shuttleEnd = setHours(partyEnd, 12);

    return {
        date: strDate,
        dates: {
            start: ceremonyStart,
            end: partyEnd,
        },
        events: {
            arrival: {
                start: arrivalStart,
                end: ceremonyStart,
                formatted: formatDates(arrivalStart, ceremonyStart),
            },
            ceremony: {
                start: ceremonyStart,
                end: ceremonyEnd,
                formatted: formatDates(ceremonyStart, ceremonyEnd),
            },
            photos: {
                start: ceremonyEnd,
                end: partyStart,
                formatted: formatDates(ceremonyEnd, dinnerStart),
            },
            dinner: {
                start: dinnerStart,
                end: partyStart,
                formatted: formatDates(dinnerStart, partyStart),
            },
            party: {
                start: partyStart,
                end: partyEnd,
                formatted: formatDates(partyStart, partyEnd),
            },
        },
        shuttle: {
            start: shuttleStart,
            end: shuttleEnd,
        },
        formattedDates: formatDates(ceremonyStart, partyEnd),
    };
};
type ED = EventData & {
    date: Date;
    events: ReturnType<typeof generateEvents>;
    formattedDates: ReturnType<typeof formatDates>;
};
const fetcher = (url: string) => fetch(url).then((res) => res.json());

const useEventData = () => {
    const { data, error } = useSWR<ED>('/api/event', fetcher);

    if (!data) {
        return { data, error };
    }

    return {
        data: {
            ...data,
            ...generateEvents(data.date),
        },
        error,
    };
};

export { useEventData };
