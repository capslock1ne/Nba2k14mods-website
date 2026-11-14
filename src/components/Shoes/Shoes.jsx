
import React, { useState } from "react";
import "../Shoes/data/Shoes.css";
import ShoesData from "../Shoes/data/shoes";
import ShoesModal from "../Shoes/Shoes-modal";
import Credits from "../credits/credit";



const Shoes = () => {
    const [selectedShoes, setSelectedShoes] = useState(null);

    return (
        <div className="Shoes">
            <div className="shoes-container">

                <p className="shoes-intro">
                    Upgrade your players shoe look with custom sneakers and exclusive basketball shoe collections.
                </p>

                <h2 className="shoes-subtitle">Shoes</h2>

                <hr className="divider" />

                <div className="shoes-grid">
                    {ShoesData.map((data, index) => (
                        <div className="shoes-card" key={data.id || index}>

                            <div className="shoes-info">
                                <h2 className="shoes-title">
                                    {data.title}
                                </h2>

                                <img
                                    src={data.image}
                                    alt={data.title}
                                    loading="lazy"
                                />

                                <p className="date">
                                    Date: {data.date}
                                </p>

                                <p className="description-shoes">
                                    {data.description}
                                </p>
                            </div>

                            <div className="shoes-card-footer">

                                <button
                                    type="button"
                                    className="shoes-download-btn"
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
                                    className="view-btn-shoes"
                                    onClick={() => setSelectedShoes(data)}
                                >
                                    View Details
                                </button>

                            </div>

                        </div>
                    ))}
                </div>

                <Credits />

                {selectedShoes && (
                    <ShoesModal
                        shoes={selectedShoes}
                        closeModal={() => setSelectedShoes(null)}
                    />
                )}

            </div>
        </div>
    );
};

export default Shoes;
