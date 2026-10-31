
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../Court-file/court-modal.css";

const Courtmodal = ({ court, closeModal }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    
    useEffect(() => {
        setCurrentSlide(0);
        setFullscreenImage(null);
    }, [court]);

   
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                if (fullscreenImage) {
                    setFullscreenImage(null);
                } else {
                    closeModal();
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [fullscreenImage, closeModal]);

    if (!court) {
        return null;
    }

      const slides = court.slides || [];

      
    const nextSlide = () => {
        if (slides.length === 0) return;

        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        if (slides.length === 0) return;

        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return createPortal(
        <div className="court-modal">
            {/* Background */}
            <div
                className="modal-backdrop"
                onClick={closeModal}
            />

            {/* ONLY THE SELECTED COURT */}
            <div className="modal-container-court">
                <button
                    type="button"
                    className="close-btn"
                    onClick={closeModal}
                    aria-label="Close modal"
                >
                    ✕
                </button>

                {/* IMAGE SLIDER */}
                {slides.length > 0 && (
                    <>
                        <div className="slider">
                            {/* Main image */}
                            <div
                                className="court-image-clickable"
                                onClick={() =>
                                    setFullscreenImage(slides[currentSlide])
                                }
                            >
                                <img
                                    className="modal-image-court"
                                    src={slides[currentSlide]}
                                    alt={`${court.title} court ${currentSlide + 1}`}
                                />
                            </div>

                            {/* Previous button */}
                            {slides.length > 1 && (
                                <button
                                    type="button"
                                    className="slide-btn prev"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        previousSlide();
                                    }}
                                    aria-label="Previous image"
                                >
                                    ❮
                                </button>
                            )}

                            {/* Next button */}
                            {slides.length > 1 && (
                                <button
                                    type="button"
                                    className="slide-btn next"
                                    onClick={(event) => {
                                        event.stopPropagation();
                                        nextSlide();
                                    }}
                                    aria-label="Next image"
                                >
                                    ❯
                                </button>
                            )}
                        </div>

                        {/* IMAGE INDICATORS */}
                        <div className="slide-indicators-court">
                            {slides.map((_, index) => (
                                <button
                                    type="button"
                                    key={index}
                                    className={
                                        currentSlide === index
                                            ? "indicator active"
                                            : "indicator"
                                    }
                                    onClick={() => setCurrentSlide(index)}
                                    aria-label={`Go to image ${index + 1}`}
                                />
                            ))}
                        </div>
                    </>
                )}

                {/* COURT INFORMATION */}
                <div className="court-modal-info">
                    <h2 className="court-modal-title">
                        {court.title}
                    </h2>

                    <hr className="court-modal-divider" />

                    <h4 className="description">
                        Description
                    </h4>

                    <p className="court-modal-description">
                        {court.description}
                    </p>

                    <h4 className="installation">
                        Installation Guide:
                    </h4>

                    <ul className="court-installation-list">
                        <li>
                            Join Discord community to get the files.
                        </li>

                        <li>
                            Back up your original game files before installing.
                        </li>

                        <li>
                            Extract the download into your NBA 2K14 mod folder.
                        </li>

                        <li>
                            Overwrite files when prompted and launch the game.
                        </li>
                    </ul>

                    <a
                        href={court.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button
                            type="button"
                            className="court-watch-btn"
                        >
                            Get files
                        </button>
                    </a>
                </div>

                {/* CREDITS */}
                <div className="court-button-credits">
                    <p>Credits to:</p>

                    {court.credits && (
                        <button type="button">
                            {court.credits}
                        </button>
                    )}

                    {court.creditsTwo && (
                        <button type="button">
                            {court.creditsTwo}
                        </button>
                    )}
                </div>
            </div>

            {/* FULLSCREEN IMAGE */}
            {fullscreenImage &&
                createPortal(
                    <div
                        className="fullscreen-court"
                        onClick={() => setFullscreenImage(null)}
                    >
                        <button
                            type="button"
                            className="fullscreen-close"
                            onClick={() => setFullscreenImage(null)}
                            aria-label="Close fullscreen image"
                        >
                            ✕
                        </button>

                        <img
                            src={fullscreenImage}
                            alt={`${court.title} fullscreen`}
                            className="fullscreen-court-image"
                            onClick={(event) => event.stopPropagation()}
                        />
                    </div>,
                    document.body
                )}
        </div>,
        document.body
    );
};

export default Courtmodal;
