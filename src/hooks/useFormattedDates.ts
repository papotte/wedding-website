import { useEffect, useState } from 'react';

import { format } from 'date-fns';

import { FormattedDates } from '@models/FormattedDates';

const formatDate = (date: Date) => {
    return format(date, 'yyyy-MM-dd');
};

const formatTime = (date: Date) => {
    return format(date, 'HH:mm');
};

const formatDates = (start: Date, end: Date) => {
    return {
        startDate: formatDate(start),
        startTime: formatTime(start),
        endDate: formatDate(end),
        endTime: formatTime(end),
        startDayMonth: format(start, 'cccc d'),
        startMonthYear: format(start, 'MMMM, yyyy'),
    };
};

export const useFormattedDates = (start: Date, end: Date) => {
    const [formatted, setFormatted] = useState<FormattedDates>(formatDates(start, end));

    useEffect(() => {
        setFormatted(formatDates(start, end));
    }, [start, end]);

    return formatted;
};
