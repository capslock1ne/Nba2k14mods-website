
import {
    FiUsers,
    FiEye,
    FiGlobe,
    FiShield,
    FiAward,
    FiZap,
    FiBookOpen,
    FiArrowRight,
    FiGrid,
} from "react-icons/fi";

import { Link } from "react-router-dom";

import './categories-style/categories.css';

const categories = [
    {
        icon: <FiUsers />,
        title: "Rosters",
        mods: "1,240 mods",
        link: "/Roster",
    },
    {
        icon: <FiEye />,
        title: "Cyberfaces",
        mods: "8,750 mods",
        link: "/CyberFace",
    },
    {
        icon: <FiGlobe />,
        title: "Courts",
        mods: "430 mods",
        link: "/Court",
    },
    {
        icon: <FiShield />,
        title: "Jerseys",
        mods: "920 mods",
        link: "/Jersey",
    },
    {
        icon: <FiAward />,
        title: "Scoreboards",
        mods: "180 mods",
        link: "/ScoreBoard",
    },
    {
        icon: <FiZap />,
        title: "Shoes",
        mods: "95 mods",
        link: "/Shoes",
    },
    {
        icon: <FiBookOpen />,
        title: "Tutorials",
        mods: "215 mods",
        link: "/Tutorials",
    },
    {
        icon: <FiGrid />,
        title: "Other",
        mods: "340 mods",
        link: "/Other",
    },
];

const Categories = () => {

    return (
        <section className="categories" id="categories">

            <div className="categories-content">

                {/* SECTION HEADER */}
                <div className="categories-header">

                    <p className="section-subtitle">
                        BROWSE BY TYPE
                    </p>

                    <h2 className="section-title">
                        MOD CATEGORIES
                    </h2>

                </div>

                {/* CATEGORY GRID */}
                <div className="categories-grid">

                    {categories.map((item) => (

                        <Link
                            to={item.link}
                            className="category-card"
                            key={item.title}
                        >

                            <div className="category-card-top">

                                <div className="category-icon">
                                    {item.icon}
                                </div>

                                <div className="category-icon-arrow">
                                    <FiArrowRight />
                                </div>

                            </div>

                            <div className="category-card-info">

                                <h3>{item.title}</h3>

                                <span>{item.mods}</span>

                            </div>

                        </Link>

                    ))}

                </div>

            </div>

        </section>
    );
};

export default Categories;
