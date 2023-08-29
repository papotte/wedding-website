import React, { Fragment, Suspense } from 'react';

import DetailsPage from '@app/details/page';
import EventPage from '@app/event/page';
import Gallery from '@app/gallery/page';
import MainPage from '@app/main/page';
import RSVPPage from '@app/rsvp/page';
import Header from '@components/Header';
import Loader from '@components/Loader';

export default function Home() {
    const showGallery: boolean = process.env.eventHasPassed === 'true';
    const showDetails: boolean = process.env.NEXT_PUBLIC_SHOW_DETAILS === 'true';

    return (
        <Fragment>
            <Header />

            {showDetails && (
                <Fragment>
                    <MainPage />
                    <EventPage />
                    {showGallery ? (
                        <Suspense fallback={<Loader />}>
                            <Gallery />
                        </Suspense>
                    ) : (
                        <Fragment>
                            <DetailsPage />
                            <RSVPPage />
                        </Fragment>
                    )}
                </Fragment>
            )}
        </Fragment>
    );
}
