import "./style/community.css";




const Community = () => {

    return (

        <main className="community-page">

            {/* =========================
                HERO
            ========================= */}

            <section className="community-hero">

                <span className="community-label">
                    COMMUNITY
                </span>

                <h1>
                    Connect with the
                    <span> 2K14MODS </span>
                    Community
                </h1>

                <p>
                    Meet NBA 2K14 players and modders,
                    share your creations, get help,
                    and keep the game alive.
                </p>

            </section>


            {/* =========================
                DISCORD CARD
            ========================= */}

            <section className="discord-card">

                <div className="discord-content">

                    <div className="discord-status">

                        <span className="status-dot"></span>

                        OFFICIAL COMMUNITY

                    </div>

                    <h2>
                        NBA 2K14 Modding Community
                    </h2>

                    <p>
                        Discuss mods, share your work,
                        request updates, and connect
                        with other NBA 2K14 enthusiasts.
                    </p>

                    <a
                        href="YOUR_DISCORD_LINK"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="discord-btn"
                    >
                        Join Discord
                        <span>→</span>
                    </a>

                </div>


                <div className="discord-mark">
                    2K14
                    <span>MODS</span>
                </div>

            </section>


            {/* =========================
                FEATURES
            ========================= */}

            <section className="community-features">

                <div className="section-title">

                    <span>
                        COMMUNITY FEATURES
                    </span>

                    <h2>
                        Built for Modders
                    </h2>

                </div>


                <div className="community-grid">

                    <article className="community-card">

                        <span className="card-number">
                            01
                        </span>

                        <div className="card-icon">
                            💬
                        </div>

                        <h3>
                            Discuss
                        </h3>

                        <p>
                            Talk about NBA 2K14,
                            gameplay, updates,
                            and the latest mods.
                        </p>

                    </article>


                    <article className="community-card">

                        <span className="card-number">
                            02
                        </span>

                        <div className="card-icon">
                            🛠
                        </div>

                        <h3>
                            Share Mods
                        </h3>

                        <p>
                            Showcase your rosters,
                            cyberfaces, courts,
                            jerseys, and creations.
                        </p>

                    </article>


                    <article className="community-card">

                        <span className="card-number">
                            03
                        </span>

                        <div className="card-icon">
                            🔧
                        </div>

                        <h3>
                            Get Help
                        </h3>

                        <p>
                            Having trouble installing
                            a mod? Ask the community
                            for help.
                        </p>

                    </article>


                    <article className="community-card">

                        <span className="card-number">
                            04
                        </span>

                        <div className="card-icon">
                            🏀
                        </div>

                        <h3>
                            Request
                        </h3>

                        <p>
                            Looking for a specific
                            player, roster, court,
                            or update?
                        </p>

                    </article>

                </div>

            </section>


            {/* =========================
                GUIDELINES
            ========================= */}

            <section className="guidelines">

                <div className="section-title">

                    <span>
                        COMMUNITY GUIDELINES
                    </span>

                    <h2>
                        Keep It Safe & Friendly
                    </h2>

                </div>


                <div className="guideline-list">

                    <div className="guideline-item">

                        <strong>
                            Respect
                        </strong>

                        <span>
                            Treat everyone with respect.
                        </span>

                    </div>


                    <div className="guideline-item">

                        <strong>
                            No Spam
                        </strong>

                        <span>
                            Keep messages and promotions relevant.
                        </span>

                    </div>


                    <div className="guideline-item">

                        <strong>
                            No Scams
                        </strong>

                        <span>
                            Don't share suspicious or malicious links.
                        </span>

                    </div>


                    <div className="guideline-item">

                        <strong>
                            Keep It Appropriate
                        </strong>

                        <span>
                            Keep the community welcoming for everyone.
                        </span>

                    </div>

                </div>

            </section>


            {/* =========================
                FINAL CTA
            ========================= */}

            <section className="community-footer">

                <span>
                    2K14MODS
                </span>

                <h2>
                    Keep NBA 2K14 Alive.
                </h2>

                <p>
                    Create. Share. Mod. Repeat.
                </p>

                <a
                    href="YOUR_DISCORD_LINK"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="discord-btn"
                >
                    Join the Community
                    <span>→</span>
                </a>

            </section>

        </main>

    );

};

export default Community;