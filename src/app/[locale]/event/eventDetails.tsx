'use client';
import { CalendarIcon, ClockIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './page.module.scss';

const EventDetails = () => {
    const { data } = useEventData();
    const t = useTranslations('Event');

    if (!data) return <Loader />;

    const { ceremony, party } = data.events;
    const events = [
        {
            name: t('ceremony'),
            ...ceremony,
            description:
                'Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.',
        },
        {
            name: t('party'),
            ...party,
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
                            <span>{t('time', { date: event.start })}</span>
                            <span>{t('time', { date: event.end })}</span>
                        </div>
                        <div className={styles.date}>
                            <CalendarIcon />

                            <span>{t('weekday', { date: event.start })}</span>
                            <span>{t('month', { date: event.start })}</span>
                        </div>
                    </div>

                    <div className={styles.description}>{event.description}</div>
                </div>
            ))}
        </div>
    );
};

export default EventDetails;
