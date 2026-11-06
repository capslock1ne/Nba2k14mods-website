
import React, { useState } from "react";
import "./court.css";
import courtData from "./data/court";
import Courtmodal from "./court-modal";

const Court = () => {
    const [selectedCourt, setSelectedCourt] = useState(null);

    return (
        <main className="court">
            <div className="court-container">

                <header className="court-header">
                    <p className="court-eyebrow">
                        Updated All Team Courts
                    </p>

                    <h2 className="court-subtitle">
                        COURTS
                    </h2>

                    <hr className="divider" />
                </header>

                <div className="court-grid">
                    {courtData.map((data) => (
                        <article className="court-card" key={data.id}>

                            <div className="court-info">

                                <h2 className="court-title">
                                    {data.titleTwo}
                                </h2>

                                <div className="court-image-wrapper">
                                    <img
                                        src={data.image}
                                        alt={data.title || data.titleTwo}
                                        loading="lazy"
                                    />
                                </div>

                                <p className="date">
                                    Date: {data.date}
                                </p>

                                <p className="description-court">
                                    {data.description}
                                </p>

                            </div>

                            
                                <div className="court-card-footer">

                                    <button
                                        type="button"
                                        className="court-download-btn"
                                        onClick={() => window.open(data.downloadUrl, "_blank", "noopener,noreferrer")}
                                        disabled={!data.downloadUrl}
                                    >
                                        Download
                                    </button>

                                    <button
                                        type="button"
                                        className="view-btn-court"
                                        onClick={() => setSelectedCourt(data)}
                                    >
                                        View Details
                                    </button>

                                </div>

                        </article>
                    ))}
                </div>

                {selectedCourt && (
                    <Courtmodal
                        court={selectedCourt}
                        closeModal={() => setSelectedCourt(null)}
                    />
                )}

            </div>
        </main>
    );
};

export default Court;
