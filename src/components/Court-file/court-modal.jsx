
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import "../Court-file/court-modal.css";

const Courtmodal = ({ court, closeModal }) => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const slides = court?.slides || [];

    useEffect(() => {
        setCurrentSlide(0);
        setFullscreenImage(null);
    }, [court]);

    // Prevent background scrolling
    useEffect(() => {
        if (!court) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };
    }, [court]);

    // Keyboard controls
    useEffect(() => {
        if (!court) return;

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
    }, [fullscreenImage, closeModal, court, slides.length]);

    if (!court) return null;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const previousSlide = () => {
        setCurrentSlide(
            (prev) => (prev - 1 + slides.length) % slides.length
        );
    };

    return createPortal(
        <div className="court-modal">

            {/* BACKDROP */}
            <div
                className="modal-backdrop"
                onClick={closeModal}
            />

            {/* MODAL */}
            <div
                className="modal-container-court"
                role="dialog"
                aria-modal="true"
                aria-labelledby="court-modal-title"
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
                    <div className="court-gallery">

                        <div className="slider">

                            <div
                                className="court-image-clickable"
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
                                    className="modal-image-court"
                                    src={slides[currentSlide]}
                                    alt={`${court.title} court ${currentSlide + 1}`}
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

                        {/* INDICATORS */}
                        {slides.length > 1 && (
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
                        )}

                    </div>
                )}

                {/* COURT INFORMATION */}
                <div className="court-modal-info">

                    <h2
                        className="court-modal-title"
                        id="court-modal-title"
                    >
                        {court.title}
                    </h2>

                    <hr className="court-modal-divider" />

                    <h4 className="description">
                        Description
                    </h4>

                    <p className="court-modal-description">
                        {court.descriptionModal}
                    </p>

                    <h4 className="installation">
                        Installation Guide:
                    </h4>

                    <ul className="court-installation-list">
                        <li>Join Discord community to get the files.</li>
                        <li>Back up your original game files before installing.</li>
                        <li>Extract the download into your NBA 2K14 mod folder.</li>
                        <li>Overwrite files when prompted and launch the game.</li>
                    </ul>

                    {court.youtube && (
                        <a
                            href={court.youtube}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="court-watch-btn"
                        >
                            Get files
                        </a>
                    )}

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
            {fullscreenImage && (
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
                )
            )}

        </div>,
        document.body
    );
};

export default Courtmodal;
