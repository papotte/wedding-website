'use client';
import { Fragment } from 'react';

import { ClockIcon } from '@radix-ui/react-icons';
import { useTranslations } from 'next-intl';

import Loader from '@components/Loader';
import { useEventData } from '@hooks/useEventData';

import styles from './timeline.module.scss';

type Event = {
    name: string;
    link?: string;
    description: string;
    start: Date;
    end?: Date;
};
const EventTimeline = () => {
    const { data } = useEventData();
    const t = useTranslations('Event');

    if (!data) return <Loader />;

    const { arrival, ceremony, photos, dinner, party, breakfast } = data.events;
    const events: Event[] = [
        {
            name: t('shuttle.title'),
            link: '#shuttle',
            start: data.shuttle.start,
            description: t('shuttle.description'),
        },
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
        {
            name: t('breakfast.title'),
            ...breakfast,
            description: t('breakfast.description'),
        },
        {
            name: t('shuttle2.title'),
            start: data.shuttle.end,
            description: t('shuttle2.description'),
        },
    ];

    return (
        <ul className={styles.timeline}>
            {events.map((event, index) => (
                <li key={index} className={styles.timelineBox}>
                    <div className={styles.timelineBadge}></div>
                    <div className={styles.timelinePanel}>
                        {event.link ? (
                            <a href={event.link}>
                                <h3 className={styles.timelineTitle}>{event.name}</h3>
                            </a>
                        ) : (
                            <h3 className={styles.timelineTitle}>{event.name}</h3>
                        )}
                        <div className={styles.date}>
                            <ClockIcon />
                            <span>{t('time', { date: event.start })}</span>
                            {event.end && (
                                <Fragment>
                                    <span>-</span>
                                    <span>{t('time', { date: event.end })}</span>
                                </Fragment>
                            )}
                        </div>
                        <div className={styles.timelineBody}>{event.description}</div>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default EventTimeline;
