'use client';
import { CalendarIcon, ClockIcon } from '@radix-ui/react-icons';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './page.module.scss';

const EventDetails = () => {
    const { data } = useEventData();

    if (!data) return <Loader />;

    const { ceremony, party } = data.events;
    const events = [
        {
            name: 'Ceremony',
            ...ceremony.formatted,
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            name: 'Wedding Party',
            ...party.formatted,
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
    ];

    return (
        <div className={styles.events}>
            {events.map((event, index) => (
                <div key={index} className={styles.eventBox}>
                    <h3>{event.name}</h3>
                    <div className={styles.details}>
                        <div className={styles.time}>
                            <ClockIcon />
                            <span>{event.startTime}</span>
                            <span>{event.endTime}</span>
                        </div>
                        <div className={styles.date}>
                            <CalendarIcon />
                            <span>{event.dayMonth}</span>
                            <span>{event.monthYear}</span>
                        </div>
                    </div>

                    <div className={styles.description}>{event.description}</div>
                </div>
            ))}
        </div>
    );
};

export default EventDetails;
