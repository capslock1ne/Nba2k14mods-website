
import React, { useState } from "react";
import rosterData from "./data/roster";
import "./roster-style/roster.css";
import RosterModal from "./roster-modal";
import Credits from "../credits/credit";



const Roster = () => {
    const [selectedRoster, setSelectedRoster] = useState(null);

    return (
        <section className="roster">
            <div className="roster-container">

                <p className="roster-intro">
                    Updated team rosters, ratings, and accuracy
                    for current NBA teams.
                </p>

                <h2 className="roster-subtitle">ROSTERS</h2>

                <hr className="divider" />

                <div className="roster-grid">
                    {rosterData.map((data, index) => (
                        <div className="roster-card" key={data.id ?? index}>

                            <div className="roster-info">
                                <h2 className="roster-title">
                                    {data.title}
                                </h2>

                                <img
                                    src={data.image}
                                    alt={`${data.title} roster`}
                                    loading="lazy"
                                />

                                <p className="date">
                                    Date: {data.date}
                                </p>

                                <p className="description">
                                    {data.description}
                                </p>
                            </div>

                            <div className="roster-card-footer">

                                 <button
                                    className="roster-download-btn"
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
                                    className="view-btn-roster"
                                    onClick={() => setSelectedRoster(data)}
                                >
                                    View Details
                                </button>
                            </div>

                        </div>
                    ))}
                </div>

                {selectedRoster && (
                    <RosterModal
                        roster={selectedRoster}
                        closeModal={() => setSelectedRoster(null)}
                    />
                )}

            </div>
             
             <Credits />
             
        </section>
    );
};

export default Roster;
