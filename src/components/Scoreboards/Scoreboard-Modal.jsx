
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./data/ScoreboardModal.css";

const ScoreBoardModal = ({ scoreboard, closeModal }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const slides = scoreboard?.slides || [];

    // Reset slider when a different scoreboard is selected
    useEffect(() => {
        setCurrentSlide(0);
        setFullscreenImage(null);
    }, [scoreboard]);

    // Prevent background scrolling
    useEffect(() => {
        if (!scoreboard) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [scoreboard]);

    // Keyboard controls
    useEffect(() => {
        if (!scoreboard) return;

        const handleKeyDown = (event) => {
            if (event.key === "Escape") {
                if (fullscreenImage) {
                    setFullscreenImage(null);
                } else {
                    closeModal();
                }
            }

            if (!fullscreenImage && slides.length > 1) {
                if (event.key === "ArrowRight") {
                    setCurrentSlide((prev) => (prev + 1) % slides.length);
                }

                if (event.key === "ArrowLeft") {
                    setCurrentSlide(
                        (prev) => (prev - 1 + slides.length) % slides.length
                    );
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [scoreboard, fullscreenImage, closeModal, slides.length]);

    if (!scoreboard) return null;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    return createPortal(
        <div className="scoreboard-modal">

            {/* BACKDROP */}
            <div
                className="modal-backdrop"
                onClick={closeModal}
            />

            {/* MODAL CONTENT */}
            <div
                className="modal-container-scoreboard"
                role="dialog"
                aria-modal="true"
                aria-labelledby="scoreboard-modal-title"
            >

                {/* CLOSE BUTTON */}
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
                    <div className="scoreboard-gallery">

                        <div className="slider">

                            <div
                                className="scoreboard-image-clickable"
                                onClick={() =>
                                    setFullscreenImage(slides[currentSlide])
                                }
                                role="button"
                                tabIndex={0}
                                aria-label="View image fullscreen"
                                onKeyDown={(event) => {
                                    if (
                                        event.key === "Enter" ||
                                        event.key === " "
                                    ) {
                                        event.preventDefault();
                                        setFullscreenImage(slides[currentSlide]);
                                    }
                                }}
                            >
                                <img
                                    className="modal-image-scoreboard"
                                    src={slides[currentSlide]}
                                    alt={`${scoreboard.title} scoreboard ${currentSlide + 1}`}
                                />
                            </div>

                            {slides.length > 1 && (
                                <>
                                    <button
                                        type="button"
                                        className="slide-btn prev"
                                        onClick={previousSlide}
                                        aria-label="Previous image"
                                    >
                                        ❮
                                    </button>

                                    <button
                                        type="button"
                                        className="slide-btn next"
                                        onClick={nextSlide}
                                        aria-label="Next image"
                                    >
                                        ❯
                                    </button>
                                </>
                            )}

                        </div>

                        {/* SLIDER INDICATORS */}
                        {slides.length > 1 && (
                            <div className="slide-indicators-court">
                                {slides.map((slide, index) => (
                                    <button
                                        type="button"
                                        key={`${slide}-${index}`}
                                        className={
                                            currentSlide === index
                                                ? "indicator active"
                                                : "indicator"
                                        }
                                        onClick={() => setCurrentSlide(index)}
                                        aria-label={`Go to image ${index + 1}`}
                                        aria-current={
                                            currentSlide === index
                                                ? "true"
                                                : undefined
                                        }
                                    />
                                ))}
                            </div>
                        )}

                    </div>
                )}

                {/* SCOREBOARD DETAILS */}
                <div className="scoreboard-modal-info">

                    <h2
                        className="scoreboard-modal-title"
                        id="scoreboard-modal-title"
                    >
                        {scoreboard.title}
                    </h2>

                    <hr className="scoreboard-modal-divider" />

                    <h4 className="modal-description">
                        Description
                    </h4>

                    <p className="scoreboard-modal-description">
                        {scoreboard.descriptionModal}
                    </p>

                    <h4 className="installation">
                        Installation Guide:
                    </h4>

                    <ul className="scoreboard-installation-list">
                        <li>Join Discord community to get the files.</li>
                        <li>Back up your original game files before installing.</li>
                        <li>Extract the download into your NBA 2K14 mod folder.</li>
                        <li>Overwrite files when prompted and launch the game.</li>
                    </ul>

                </div>

                

                {/* CREDITS */}
                {(scoreboard.credits || scoreboard.creditsTwo) && (
                    <div className="scoreboard-button-credits">

                        <p>Credits to:</p>

                        {scoreboard.credits && (
                            <button type="button">
                                {scoreboard.credits}
                            </button>
                        )}

                        {scoreboard.creditsTwo && (
                            <button type="button">
                                {scoreboard.creditsTwo}
                            </button>
                        )}

                    </div>
                )}

            </div>

            {/* FULLSCREEN IMAGE PORTAL */}
            {fullscreenImage && createPortal(
                <div
                    className="fullscreen-scoreboard"
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
                        alt="Full-size scoreboard"
                        className="fullscreen-scoreboard-image"
                        onClick={(event) => event.stopPropagation()}
                    />
                </div>,
                document.body
            )}

        </div>,
        document.body
    );
};

export default ScoreBoardModal;
