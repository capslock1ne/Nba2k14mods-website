import React from "react";
import './footer-style/footer.css';
import { Link } from "react-router-dom";
import twoKlogo from '../assets/images/2k14-logo.png';

const Footer = () => {

   return (
         
              <footer className="footer">

                    <div className="footer-container">

                        {/* Brand */}
                        <div className="footer-brand">

                        <div className="footer-logo">
                            <img src={twoKlogo} alt="logo" />

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

                        <Link to="/">Rosters</Link>
                        <Link to="/">Cyberfaces</Link>
                        <Link to="/">Courts</Link>
                        <Link to="/">Jerseys</Link>
                        <Link to="/">Scoreboards</Link>

                        </div>

                        {/* HELP */}

                        <div className="footer-column">

                        <h3>HELP</h3>

                        <Link to="/">How to Install Mods</Link>
                        <Link to="/">Looyh Hook Guide</Link>
                        <Link to="/">Cyberface Install</Link>
                        <Link to="/">Scoreboard Install</Link>

                        </div>

                        {/* SITE */}

                        <div className="footer-column">

                        <h3>SITE</h3>

                        <Link to="/about">About Us</Link>
                        <Link to="/">Contact</Link>
                        <Link to="/">Submit a Mod</Link>
                        <Link to="/">Privacy Policy</Link>
                        <Link to="/">Advertise</Link>

                        </div>

                    </div>

                    <div className="footer-bottom">

                        <p>
                        © 2025 2K14Mods Community. Not affiliated with
                        2K Sports or Take-Two Interactive.
                        </p>

                        <p>
                        All mods on this site belong to their respective creators.
                        We do not claim ownership of any uploaded content.
                        </p>

                    </div>

                    </footer>
                    



   )




}


export default Footer;