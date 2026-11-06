
import React from "react";
import './footer-style/footer.css';

import { Link } from "react-router-dom";
import twoKlogo from '../assets/images/2k14-logo.png';

const footerLinks = {
    mods: [
        { title: "Rosters", link: "/Roster" },
        { title: "Cyberfaces", link: "/CyberFace" },
        { title: "Courts", link: "/Court" },
        { title: "Jerseys", link: "/Jersey" },
        { title: "Scoreboards", link: "/ScoreBoard" },
    ],

    help: [
        { title: "How to Install Mods", link: "/Tutorials" },
        { title: "Looyh Hook Guide", link: "/Tutorials" },
        { title: "Cyberface Install", link: "/Tutorials" },
        { title: "Scoreboard Install", link: "/Tutorials" },
    ],

    site: [
        { title: "About Us", link: "/about" },
        { title: "Contact", link: "/contact" },
        { title: "Submit a Mod", link: "/submit-mod" },
        { title: "Privacy Policy", link: "/privacy-policy" },
        { title: "Advertise", link: "/advertise" },
    ],
};

const Footer = () => {

    return (

        <footer className="footer">

            <div className="footer-container">

                {/* BRAND */}

                <div className="footer-brand">

                    <div className="footer-logo">

                        <img src={twoKlogo} alt="2K14 Mods Logo" />

                        <h2>
                            2K14<span>MODS</span>
                        </h2>

                    </div>

                    <p>
                        The premier destination for NBA 2K14
                        mods, rosters, and tools.
                    </p>

                </div>

                {/* MODS */}

                <div className="footer-column">

                    <h3>MODS</h3>

                    {footerLinks.mods.map((item) => (

                        <Link to={item.link} key={item.title}>
                            {item.title}
                        </Link>

                    ))}

                </div>

                {/* HELP */}

                <div className="footer-column">

                    <h3>HELP</h3>

                    {footerLinks.help.map((item) => (

                        <Link to={item.link} key={item.title}>
                            {item.title}
                        </Link>

                    ))}

                </div>

                {/* SITE */}

                <div className="footer-column">

                    <h3>SITE</h3>

                    {footerLinks.site.map((item) => (

                        <Link to={item.link} key={item.title}>
                            {item.title}
                        </Link>

                    ))}

                </div>

            </div>

            {/* FOOTER BOTTOM */}

            <div className="footer-bottom">

                <p>
                    © 2026 2K14Mods Community. Not affiliated with
                    2K Sports or Take-Two Interactive.
                </p>

                <p>
                    All mods on this site belong to their respective
                    creators. We do not claim ownership of any
                    uploaded content.
                </p>

            </div>

        </footer>

    );

};

export default Footer;
