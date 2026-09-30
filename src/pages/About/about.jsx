import { useState } from "react";
import "./style/about.css";

const About = () => {

    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (

        <main className="about-page">

           

            <section className="about-hero">

                <span className="about-label">
                    ABOUT US
                </span>

                <h1>
                    Built for the <span>NBA 2K14</span> Community
                </h1>

              

            </section>


           

            <section className="about-content">

                <div className="about-card">

                    <div>

                        <h2>
                            What is 2K14MODS?
                        </h2>

                        <p>
                            2K14MODS is a place for NBA 2K14 players
                            and modders to discover, share, and learn
                            about game modifications.
                            From updated rosters and realistic
                            cyberfaces to courts, jerseys, and
                            tutorials, our goal is to make finding
                            NBA 2K14 mods simple and accessible.
                        </p>

                    </div>

                </div>

            </section>


            {/* FEATURES */}

            <section className="about-features">

                <div className="section-heading">

                   

                    <h2>
                        What's Available?
                    </h2>

                </div>


                {/* ACCORDION */}

                <div className="feature-accordion">


                    {/* ROSTERS */}

                    <div className="feature-item">

                        <button
                            className="feature-header"
                            onClick={() => toggleAccordion(0)}
                        >

                            <h3>
                                Rosters
                            </h3>

                            <span className="accordion-icon">
                                {openIndex === 0 ? "⌃" : "⌄"}
                            </span>

                        </button>


                        <div
                            className={`feature-content ${
                                openIndex === 0 ? "active" : ""
                            }`}
                        >

                            <p>
                                Updated teams, players, and custom
                                roster files.
                            </p>

                        </div>

                    </div>


                    {/* CYBERFACES */}

                    <div className="feature-item">

                        <button
                            className="feature-header"
                            onClick={() => toggleAccordion(1)}
                        >

                            <h3>
                                Cyberfaces
                            </h3>

                            <span className="accordion-icon">
                                {openIndex === 1 ? "⌃" : "⌄"}
                            </span>

                        </button>


                        <div
                            className={`feature-content ${
                                openIndex === 1 ? "active" : ""
                            }`}
                        >

                            <p>
                                Player faces and visual updates
                                for NBA 2K14.
                            </p>

                        </div>

                    </div>


                    {/* COURTS */}

                    <div className="feature-item">

                        <button
                            className="feature-header"
                            onClick={() => toggleAccordion(2)}
                        >

                            <h3>
                                Courts
                            </h3>

                            <span className="accordion-icon">
                                {openIndex === 2 ? "⌃" : "⌄"}
                            </span>

                        </button>


                        <div
                            className={`feature-content ${
                                openIndex === 2 ? "active" : ""
                            }`}
                        >

                            <p>
                                Realistic NBA arenas and custom
                                court designs.
                            </p>

                        </div>

                    </div>


                    {/* JERSEYS */}

                    <div className="feature-item">

                        <button
                            className="feature-header"
                            onClick={() => toggleAccordion(3)}
                        >

                            <h3>
                                Jerseys
                            </h3>

                            <span className="accordion-icon">
                                {openIndex === 3 ? "⌃" : "⌄"}
                            </span>

                        </button>


                        <div
                            className={`feature-content ${
                                openIndex === 3 ? "active" : ""
                            }`}
                        >

                            <p>
                                Updated uniforms and custom
                                jersey designs.
                            </p>

                        </div>

                    </div>


                    {/* TUTORIALS */}

                    <div className="feature-item">

                        <button
                            className="feature-header"
                            onClick={() => toggleAccordion(4)}
                        >

                            <h3>
                                Tutorials
                            </h3>

                            <span className="accordion-icon">
                                {openIndex === 4 ? "⌃" : "⌄"}
                            </span>

                        </button>


                        <div
                            className={`feature-content ${
                                openIndex === 4 ? "active" : ""
                            }`}
                        >

                            <p>
                                Guides to help you install and use
                                NBA 2K14 mods.
                            </p>

                        </div>

                    </div>


                    {/* COMMUNITY */}

                    <div className="feature-item">

                        <button
                            className="feature-header"
                            onClick={() => toggleAccordion(5)}
                        >

                            <h3>
                                Community
                            </h3>

                            <span className="accordion-icon">
                                {openIndex === 5 ? "⌃" : "⌄"}
                            </span>

                        </button>


                        <div
                            className={`feature-content ${
                                openIndex === 5 ? "active" : ""
                            }`}
                        >

                            <p>
                                Connect with other NBA 2K14 players
                                and modders.
                            </p>

                        </div>

                    </div>


                </div>

            </section>


            {/* MISSION */}

            <section className="mission-section">

                <div>

                    <span className="about-label">
                        OUR GOAL
                    </span>

                    <h2>
                        Keeping NBA 2K14 Alive
                    </h2>

                </div>

                <p className="about-label-descript">
                    NBA 2K14 may be an older game, but its modding
                    community continues to create new experiences.
                    2K14MODS aims to make those creations easier
                    to discover and enjoy.
                </p>

            </section>


            {/* CTA */}

            <section className="about-cta">

                <h2>
                    Be Part of the Community
                </h2>

                <p>
                    Discover mods, share your work, and connect
                    with other NBA 2K14 enthusiasts.
                </p>

                 <button className="discord-button"> Join Discord<a href="#">
                    
                </a>
                </button>

            </section>

        </main>

    );

};

export default About;