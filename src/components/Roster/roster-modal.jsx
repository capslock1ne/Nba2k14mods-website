
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "./roster-style/roster-modal.css";

const RosterModal = ({ roster, closeModal }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const slides = roster?.slides || [];

    useEffect(() => {
        setCurrentSlide(0);
        setFullscreenImage(null);
    }, [roster]);

    // Prevent background scrolling while modal is open
    useEffect(() => {
        if (!roster) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [roster]);

    // Keyboard controls
    useEffect(() => {
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
                    setCurrentSlide((prev) =>
                        prev === slides.length - 1 ? 0 : prev + 1
                    );
                }

                if (event.key === "ArrowLeft") {
                    setCurrentSlide((prev) =>
                        prev === 0 ? slides.length - 1 : prev - 1
                    );
                }
            }
        };

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [fullscreenImage, slides.length, closeModal]);

    if (!roster) return null;

    const nextSlide = () => {
        if (slides.length <= 1) return;

        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    const previousSlide = () => {
        if (slides.length <= 1) return;

        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return createPortal(
        <>
            <div className="roster-modal">

                <div
                    className="modal-backdrop"
                    onClick={closeModal}
                />

                <div
                    className="modal-container"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="roster-modal-title"
                >

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
                            <div className="slider-roster">

                                <div
                                    className="roster-image-clickable"
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
                                        className="modal-image-roster"
                                        src={slides[currentSlide]}
                                        alt={`${roster.title} image ${currentSlide + 1}`}
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

                            {/* IMAGE INDICATORS */}

                            {slides.length > 1 && (
                                <div className="slide-indicators">
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
                                            aria-current={
                                                currentSlide === index
                                                    ? "true"
                                                    : undefined
                                            }
                                        />
                                    ))}
                                </div>
                            )}
                        </>
                    )}

                    {/* ROSTER INFORMATION */}

                    <div className="modal-info">

                        <h2
                            className="modal-title"
                            id="roster-modal-title"
                        >
                            {roster.title}
                        </h2>

                        <hr className="modal-divider-roster" />

                        <h4 className="modal-description">
                            Description
                        </h4>

                        <p>
                            {roster.descriptionModal}
                        </p>

                        <h4 className="installation">
                            Installation Guide:
                        </h4>

                        <ul className="roster-installation-list">
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

                    

                    </div>

                    {/* CREDITS */}

                    {(roster.credits || roster.creditsTwo) && (
                        <div className="button-credits">

                            <p>Credits to:</p>

                            {roster.credits && (
                                <span>{roster.credits}</span>
                            )}

                            {roster.creditsTwo && (
                                <span>{roster.creditsTwo}</span>
                            )}

                        </div>
                    )}

                </div>

            </div>

            {/* FULLSCREEN IMAGE */}

            {fullscreenImage && (
                <div
                    className="fullscreen-roster"
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
                        alt={`${roster.title} fullscreen`}
                        className="fullscreen-roster-image"
                        onClick={(event) => event.stopPropagation()}
                    />

                </div>
            )}

        </>,
        document.body
    );
};

export default RosterModal;
