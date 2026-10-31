
import React, { useState } from "react";
import "./court.css";
import courtData from "./data/court";
import Courtmodal from "./court-modal";

const Court = () => {
    const [selectedCourt, setSelectedCourt] = useState(null);

    return (
        <div className="court">
            <div className="court-container">
                <p>Updated All team courts</p>

                <h2 className="court-subtitle">COURTS</h2>

                <hr className="divider" />

                <div className="court-grid">
                    {courtData.map((data) => (
                        <div className="court-card" key={data.id}>
                            <div className="court-info">
                                <h2 className="court-title">
                                    {data.titleTwo}
                                </h2>

                                <img
                                    src={data.image}
                                    alt={data.title}
                                />

                                <p className="date">
                                    Date: {data.date}
                                </p>

                                <p className="description-court">
                                    {data.description}
                                </p>
                            </div>

                            <button
                                type="button"
                                className="view-btn-court"
                                onClick={() => setSelectedCourt(data)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>

                {selectedCourt && (
                    <Courtmodal
                        court={selectedCourt}
                        closeModal={() => setSelectedCourt(null)}
                    />
                )}
            </div>
        </div>
    );
};

export default Court;
