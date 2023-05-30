import { Fragment } from 'react';
import MainPage from '@/app/main/page';
import EventPage from '@/app/event/page';
import StoryPage from '@/app/story/page';

export default function Home() {
    return (
        <Fragment>
            <MainPage />
            <EventPage />
            <StoryPage />
            <div
                id="fh5co-started"
                className="fh5co-bg"
                style={{ backgroundImage: 'url(images/img_bg_4.jpg)' }}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row animate-box">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
                            <h2>Are You Attending?</h2>
                            <p>
                                Please Fill-up the form to notify you that you&apos;re attending.
                                Thanks.
                            </p>
                        </div>
                    </div>
                    <div className="row animate-box">
                        <div className="col-md-10 col-md-offset-1">
                            <form className="form-inline">
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="name" className="sr-only">
                                            Name
                                        </label>
                                        <input
                                            type="name"
                                            className="form-control"
                                            id="name"
                                            placeholder="Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <div className="form-group">
                                        <label htmlFor="email" className="sr-only">
                                            Email
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-4 col-sm-4">
                                    <button type="submit" className="btn btn-default btn-block">
                                        I am Attending
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
