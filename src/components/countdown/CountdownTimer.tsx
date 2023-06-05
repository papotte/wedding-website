'use client';

import React from 'react';

import { useCountdown } from '@hooks/useCountdown';

import { ExpiredNotice } from './ExpiredNotice';
import { ShowCounter } from './ShowCounter';



type Props = {
    targetDate: string;
};

const CountdownTimer = ({ targetDate }: Props) => {
    const [days, hours, minutes, seconds] = useCountdown(targetDate);

    if (days + hours + minutes + seconds <= 0) {
        return <ExpiredNotice />;
    } else {
        return <ShowCounter days={days} hours={hours} minutes={minutes} seconds={seconds} />;
    }
};
export default CountdownTimer;
