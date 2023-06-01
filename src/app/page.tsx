import React, { Fragment, Suspense } from 'react';

import EventPage from '@/app/event/page';
import Gallery from '@/app/gallery/page';
import MainPage from '@/app/main/page';
import RSVPPage from '@/app/rsvp/page';
import Loader from '@components/Loader';

export default function Home() {
    const showGallery: boolean = process.env.eventHasPassed === 'true';
    const showDetails: boolean = process.env.NEXT_PUBLIC_SHOW_DETAILS === 'true';

    return (
        <Fragment>
            {showDetails && (
                <Fragment>
                    <MainPage />
                    <EventPage />
                </Fragment>
            )}
            {showGallery ? (
                <Suspense fallback={<Loader />}>
                    <Gallery />
                </Suspense>
            ) : (
                <RSVPPage />
            )}
        </Fragment>
    );
}
