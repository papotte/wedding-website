import { addHours, format, parseISO } from 'date-fns';
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
        dayMonth: format(start, 'cccc d'),
        monthYear: format(start, 'MMMM, yyyy'),
        fullDate: format(start, 'MMMM d, yyyy')
    };
};
let generateEvents = (strDate: string) => {
    const startTime: Date = parseISO(strDate);
    const ceremonyStart = startTime;
    const partyEnd = addHours(ceremonyStart, 10);
    const ceremonyEnd = addHours(ceremonyStart, 2);
    const partyStart = addHours(ceremonyStart, 3);

    return {
        date: strDate,
        events: {
            ceremony: {
                start: ceremonyStart,
                end: ceremonyEnd,
                formatted: formatDates(ceremonyStart, ceremonyEnd)
            },
            party: {
                start: partyStart,
                end: partyEnd,
                formatted: formatDates(partyStart, partyEnd)
            }
        },
        formattedDates: formatDates(ceremonyStart, partyEnd)
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
            ...generateEvents(data.date)
        },
        error
    };
};

export { useEventData };
