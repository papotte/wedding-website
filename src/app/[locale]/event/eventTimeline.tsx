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

    const { arrival, ceremony, photos, dinner, party } = data.events;
    const events = [
        {
            name: t('arrival.title'),
            ...arrival,
            description: t('arrival.description'),
        },
        {
            name: t('ceremony.title'),
            ...ceremony,
            description: t('ceremony.description'),
        },
        {
            name: t('photos.title'),
            ...photos,
            description: t('photos.description'),
        },
        {
            name: t('dinner.title'),
            ...dinner,
            description: t('dinner.description'),
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
                    <div className={styles.timelineBadge}></div>
                    <div className={styles.timelinePanel}>
                        <h3 className={styles.timelineTitle}>{event.name}</h3>
                        <div className={styles.date}>
                            <ClockIcon />
                            <span>{t('time', { date: event.start })}</span>
                            <span>-</span>
                            <span>{t('time', { date: event.end })}</span>
                        </div>
                        <div className={styles.timelineBody}>{event.description}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EventTimeline;
