import { Fragment } from 'react';

import EventPage from '@/app/event/page';
import Gallery from '@/app/gallery/page';
import MainPage from '@/app/main/page';
import RSVPPage from '@/app/rsvp/page';

export default function Home() {
    const showGallery: boolean = process.env.NEXT_PUBLIC_SHOW_GALLERY === 'true';
    const showDetails: boolean = process.env.NEXT_PUBLIC_SHOW_DETAILS === 'true';

    return (
        <Fragment>
            {showDetails && (
                <Fragment>
                    <MainPage />
                    <EventPage />
                </Fragment>
            )}
            {showGallery ? <Gallery /> : <RSVPPage />}
        </Fragment>
    );
}
