import React, { useEffect, useState } from "react";
import courtData from "./data/court";
import { createPortal } from "react-dom";
import "../Court-file/court-modal.css";

const modalCourt = ({ closeModal }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const nextSlide = (slides) => {
        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = (slides) => {
        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    
    useEffect(() => {

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                setFullscreenImage(null);
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };

    }, []);


    return createPortal(

        <div className="court-modal">

            {/* Background */}
            <div
                className="modal-backdrop"
                onClick={closeModal}
            ></div>


            {courtData.map((data, index) => (

                <div
                    className="modal-container-court"
                    key={index}
                >

                    <button
                        className="close-btn"
                        onClick={closeModal}
                    >
                        ✕
                    </button>


                    <div className="slider">

                                {/* MAIN IMAGE */}
                                <div
                                    className="court-image-clickable"
                                    onClick={() => {
                                        setFullscreenImage(data.slides[currentSlide]);
                                    }}
                                >
                                    <img
                                        className="modal-image-court"
                                        src={data.slides[currentSlide]}
                                        alt={data.title}
                                    />
                                </div>


                                {/* PREVIOUS BUTTON */}
                                <button
                                    type="button"
                                    className="slide-btn prev"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        previousSlide(data.slides);
                                    }}
                                >
                                    ❮
                                </button>


                                {/* NEXT BUTTON */}
                                <button
                                    type="button"
                                    className="slide-btn next"
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextSlide(data.slides);
                                    }}
                                >
                                    ❯
                                </button>

                            </div>
                      

                     


                    {/* IMAGE INDICATORS */}
                    <div className="slide-indicators-court">

                        {data.slides.map((_, index) => (

                            <button
                                key={index}
                                className={
                                    currentSlide === index
                                        ? "indicator active"
                                        : "indicator"
                                }
                                onClick={() =>
                                    setCurrentSlide(index)
                                }
                            />

                        ))}

                    </div>


                    {/* COURT INFORMATION */}
                    <div className="court-modal-info">

                        <h2 className="court-modal-title">
                            {data.title}
                        </h2>

                        <hr className="court-modal-divider" />

                        <h4 className="description">
                            Description
                        </h4>

                        <p className="court-modal-description">
                            {data.description}
                        </p>


                        <h4 className="installation">
                            Installation Guide:
                        </h4>

                        <ul className="court-installation-list">

                            <li>
                                Join Discord community to get the files
                            </li>

                            <li>
                                Back up your original game files before installing
                            </li>

                            <li>
                                Extract the download into your NBA 2K14 mod folder.
                            </li>

                            <li>
                                Overwrite files when prompted and launch the game.
                            </li>

                        </ul>


                        <a
                            href={data.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="court-watch-btn">
                                Get files
                            </button>
                        </a>

                    </div>


                    {/* CREDITS */}
                    <div className="court-button-credits">

                        <p>Credits to:</p>

                        <button>
                            {data.credits}
                        </button>

                        <button>
                            {data.creditsTwo}
                        </button>

                    </div>

                </div>

            ))}


            

                    {fullscreenImage &&
                        createPortal(
                            <div
                                className="fullscreen-court"
                                onClick={() => setFullscreenImage(null)}
                            >

                                <button
                                    className="fullscreen-close"
                                    onClick={() => setFullscreenImage(null)}
                                >
                                    ✕
                                </button>

                                <img
                                    src={fullscreenImage}
                                    alt="Full size court"
                                    className="fullscreen-court-image"
                                    onClick={(event) => event.stopPropagation()}
                                />

                            </div>,
                            document.body
                        )
                    }
                            </div>,

               document.body

    );
};

export default modalCourt;