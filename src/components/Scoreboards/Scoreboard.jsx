
import React, { useState } from "react";
import "../Scoreboards/data/scoreboard.css";
import ScoreboardData from "./data/scoreboard";
import ScoreBoardModal from "./Scoreboard-Modal";
import Credits from "../credits/credit";


const ScoreBoard = () => {

    const [selectedScoreboard, setSelectedScoreboard] = useState(null);

    const handleDownload = (downloadUrl) => {
        if (!downloadUrl) return;

        window.open(
            downloadUrl,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <section className="scoreboard">

            <div className="scoreboard-container">

                {/* HEADER */}

                <div className="scoreboard-header">

                    <p className="scoreboard-intro">
                      Give your NBA 2K14 experience a fresh look with updated scoreboards, realistic in-game graphics, and custom broadcast designs.
                     </p>

                    <h2 className="scoreboard-subtitle">
                        SCOREBOARDS
                    </h2>

                    <hr className="divider" />

                </div>

                {/* SCOREBOARD GRID */}

                <div className="scoreboard-grid">

                    {ScoreboardData.map((data, index) => (

                        <article
                            className="scoreboard-card"
                            key={data.id ?? data.title ?? index}
                        >

                            <div className="scoreboard-info">

                                {/* TITLE */}

                                <h2 className="scoreboard-title">
                                    {data.title}
                                </h2>

                                {/* IMAGE */}

                                <div className="scoreboard-card-image">

                                    <img
                                        src={data.image}
                                        alt={data.title || "Scoreboard preview"}
                                        loading="lazy"
                                    />

                                </div>

                                {/* DATE */}

                                <p className="date">
                                    Date: {data.date}
                                </p>

                                {/* DESCRIPTION */}

                                <p className="description">
                                    {data.description}
                                </p>

                            </div>

                            {/* CARD FOOTER */}

                            <div className="scoreboard-card-footer">

                                <button
                                    type="button"
                                    className="scoreboard-download-btn"
                                    onClick={() => {
                                        data.downloadUrl?.forEach((file) => {
                                            window.open(
                                                file.url,
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        });
                                    }}
                                    disabled={!data.downloadUrl?.length}
                                >
                                    Download
                                </button>

                                <button
                                    type="button"
                                    className="view-btn-scoreboard"
                                    onClick={() => setSelectedScoreboard(data)}
                                >
                                    View Details
                                </button>

                            </div>

                        </article>

                    ))}

                </div>

            </div>

            <Credits />

            {/* SCOREBOARD MODAL */}

            {selectedScoreboard && (

                <ScoreBoardModal
                    scoreboard={selectedScoreboard}
                    closeModal={() => setSelectedScoreboard(null)}
                />

            )}

        </section>
    );
};

export default ScoreBoard;
