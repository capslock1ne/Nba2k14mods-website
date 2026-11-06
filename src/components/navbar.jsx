
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./navbar.css";
import twoKlogo from "../assets/images/2k14-logo.png";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const closeMenu = () => {
        setMenuOpen(false);
        setDropdownOpen(false);
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
        setDropdownOpen(false);
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                closeMenu();
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    useEffect(() => {
        document.body.style.overflow = menuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [menuOpen]);

    return (
        <nav className="navbar">
            <div className="nav-container">

                {/* LOGO */}
                <Link to="/" className="logo" onClick={closeMenu}>
                    <img src={twoKlogo} alt="NBA 2K14 Mods logo" />

                    <h2>
                        2K14<span>MODS</span>
                    </h2>
                </Link>

                {/* HAMBURGER BUTTON */}
                <button
                    type="button"
                    className="hamburger"
                    onClick={toggleMenu}
                    aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
                    aria-expanded={menuOpen}
                    aria-controls="nav-menu"
                >
                    {menuOpen ? <FiX /> : <FiMenu />}
                </button>

                {/* NAVIGATION LINKS */}
                <ul
                    id="nav-menu"
                    className={`nav-menu ${menuOpen ? "active" : ""}`}
                >
                    <li>
                        <Link to="/" onClick={closeMenu}>
                            HOME
                        </Link>
                    </li>

                    {/* DROPDOWN */}
                    <li className={`dropdown ${dropdownOpen ? "dropdown-active" : ""}`}>
                        <button
                            type="button"
                            className="dropdown-toggle"
                            onClick={() => setDropdownOpen((prev) => !prev)}
                            aria-expanded={dropdownOpen}
                        >
                            NBA 2K14
                            <FiChevronDown className="dropdown-icon" />
                        </button>

                        <ul className="dropdown-menu">
                            <li>
                                <Link to="/downloads" onClick={closeMenu}>
                                    Downloads
                                </Link>
                            </li>

                            <li>
                                <Link to="/cyberface" onClick={closeMenu}>
                                    Cyberface
                                </Link>
                            </li>

                            <li>
                                <Link to="/roster" onClick={closeMenu}>
                                    Roster
                                </Link>
                            </li>
                        </ul>
                    </li>

                    <li>
                        <Link to="/tutorials" onClick={closeMenu}>
                            TUTORIALS & GUIDES
                        </Link>
                    </li>

                    <li>
                        <Link to="/community" onClick={closeMenu}>
                            COMMUNITY
                        </Link>
                    </li>

                    <li>
                        <Link to="/about" onClick={closeMenu}>
                            ABOUT
                        </Link>
                    </li>
                </ul>

            </div>
        </nav>
    );
};

export default Navbar;
