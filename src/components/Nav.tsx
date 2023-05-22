import React from 'react';

const Nav = () => {
    return (
        <nav className="fh5co-nav" role="navigation">
            <div className="container">
                <div className="row">
                    <div className="col-xs-2">
                    </div>
                    <div className="col-xs-10 text-right menu-1">
                        <ul>
                            <li className="active">
                                <a href="index.html">Home</a>
                            </li>
                            <li>
                                <a href="about.html">Story</a>
                            </li>
                            <li className="has-dropdown">
                                <a href="services.html">Services</a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="#">Web Design</a>
                                    </li>
                                    <li>
                                        <a href="#">eCommerce</a>
                                    </li>
                                    <li>
                                        <a href="#">Branding</a>
                                    </li>
                                    <li>
                                        <a href="#">API</a>
                                    </li>
                                </ul>
                            </li>
                            <li className="has-dropdown">
                                <a href="gallery.html">Gallery</a>
                                <ul className="dropdown">
                                    <li>
                                        <a href="#">HTML5</a>
                                    </li>
                                    <li>
                                        <a href="#">CSS3</a>
                                    </li>
                                    <li>
                                        <a href="#">Sass</a>
                                    </li>
                                    <li>
                                        <a href="#">jQuery</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="contact.html">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Nav;
