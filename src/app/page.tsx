import { Fragment } from 'react';
import MainPage from '@/app/main/page';
import EventPage from '@/app/event/page';

export default function Home() {
    return (
        <Fragment>
            <MainPage />
            <EventPage />


            <div id="fh5co-couple-story">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
                            <span>We Love Each Other</span>
                            <h2>Our Story</h2>
                            <p>
                                Far far away, behind the word mountains, far from the countries
                                Vokalia and Consonantia, there live the blind texts.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 col-md-offset-0">
                            <ul className="timeline animate-box">
                                <li className="animate-box">
                                    <div
                                        className="timeline-badge"
                                        style={{ backgroundImage: 'url(images/couple-1.jpg)' }}
                                    />
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">First We Meet</h3>
                                            <span className="date">December 25, 2015</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Far far away, behind the word mountains, far from
                                                the countries Vokalia and Consonantia, there live
                                                the blind texts. Separated they live in
                                                Bookmarksgrove right at the coast of the Semantics,
                                                a large language ocean.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="timeline-inverted animate-box">
                                    <div
                                        className="timeline-badge"
                                        style={{ backgroundImage: 'url(images/couple-2.jpg)' }}
                                    />
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">First Date</h3>
                                            <span className="date">December 28, 2015</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Far far away, behind the word mountains, far from
                                                the countries Vokalia and Consonantia, there live
                                                the blind texts. Separated they live in
                                                Bookmarksgrove right at the coast of the Semantics,
                                                a large language ocean.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                                <li className="animate-box">
                                    <div
                                        className="timeline-badge"
                                        style={{ backgroundImage: 'url(images/couple-3.jpg)' }}
                                    />
                                    <div className="timeline-panel">
                                        <div className="timeline-heading">
                                            <h3 className="timeline-title">In A Relationship</h3>
                                            <span className="date">January 1, 2016</span>
                                        </div>
                                        <div className="timeline-body">
                                            <p>
                                                Far far away, behind the word mountains, far from
                                                the countries Vokalia and Consonantia, there live
                                                the blind texts. Separated they live in
                                                Bookmarksgrove right at the coast of the Semantics,
                                                a large language ocean.
                                            </p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

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
