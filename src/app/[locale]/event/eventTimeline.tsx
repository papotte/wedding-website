'use client';
import { ClockIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './timeline.module.scss';

const EventTimeline = () => {
    const { data } = useEventData();
    const t = useTranslations('Event');

    if (!data) return <Loader />;

    const { ceremony, party } = data.events;
    const events = [
        {
            name: t('ceremony.title'),
            ...ceremony,
            description: t('ceremony.description'),
        },
        {
            name: t('party.title'),
            ...party,
            description: t('party.description'),
        },
    ];

    return (
        <ul className={styles.timeline}>
            {events.map((event, index) => (
                <li key={index} className={styles.timelineBox}>
                    <div
                        className={styles.timelineBadge}
                        style={{ backgroundImage: 'url(/images/couple-1.jpg)' }}></div>
                    <div className={styles.timelinePanel}>
                        <h3 className={styles.timelineTitle}>{event.name}</h3>
                        <div className={styles.date}>
                            <ClockIcon />
                            <span>{t('time', { date: event.start })}</span>
                            <span>-</span>
                            <span>{t('time', { date: event.end })}</span>
                        </div>
                        <div className={styles.timelineBody}>
                            <p>{event.description}</p>
                        </div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EventTimeline;
