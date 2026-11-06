
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import '../Jerseys/jersey-modal.css';

const ModalJersey = ({ jersey, closeModal }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);

    const slides = jersey?.slides || [];

    // Reset modal states when a different jersey is selected
    useEffect(() => {
        setCurrentSlide(0);
        setFullscreenImage(null);
    }, [jersey]);

    // Prevent background scrolling while modal is open
    useEffect(() => {
        if (!jersey) return;

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = previousOverflow;
        };

    }, [jersey]);

    // Keyboard controls
    useEffect(() => {

        if (!jersey) return;

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

    }, [fullscreenImage, slides.length, closeModal, jersey]);

    if (!jersey) return null;

    // Next slide
    const nextSlide = () => {
        if (slides.length <= 1) return;

        setCurrentSlide((prev) =>
            prev === slides.length - 1 ? 0 : prev + 1
        );
    };

    // Previous slide
    const previousSlide = () => {
        if (slides.length <= 1) return;

        setCurrentSlide((prev) =>
            prev === 0 ? slides.length - 1 : prev - 1
        );
    };

    return createPortal(
        <>

            <div
                className="jersey-modal"
                onClick={closeModal}
            >

                 <div
                    className="modal-backdrop"
                    onClick={closeModal}
                />

                <div
                    className="modal-container-jersey"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="jersey-modal-title"
                    onClick={(e) => e.stopPropagation()}
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
                        <>

                            <div className="slider-jersey">

                                <div
                                    className="jersey-image-clickable"
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
                                        className="modal-image-jersey"
                                        src={slides[currentSlide]}
                                        alt={`${jersey.title} image ${currentSlide + 1}`}
                                    />

                                </div>


                                {/* SLIDER BUTTONS */}

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


                    {/* JERSEY INFORMATION */}

                    <div className="modal-info">

                        <h2
                            className="modal-title"
                            id="jersey-modal-title"
                        >
                            {jersey.title}
                        </h2>

                        <hr className="modal-divider" />

                        <h4>
                            Description
                        </h4>

                        <p className="modal-description">
                            {jersey.descriptionModal}
                        </p>

                        <h4>
                            Installation Guide:
                        </h4>

                        <ul className="installation-list">

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

                    {(jersey.credits || jersey.creditsTwo) && (

                        <div className="button-credits">

                            <p>Credits to:</p>

                            {jersey.credits && (
                                <span>{jersey.credits}</span>
                            )}

                            {jersey.creditsTwo && (
                                <span>{jersey.creditsTwo}</span>
                            )}

                        </div>

                    )}

                </div>

            </div>


            {/* FULLSCREEN IMAGE */}

            {fullscreenImage && (

                <div
                    className="fullscreen-jersey"
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
                        alt={`${jersey.title} fullscreen`}
                        className="fullscreen-jersey-image"
                        onClick={(event) => event.stopPropagation()}
                    />

                </div>

            )}

        </>,
        document.body
    );
};

export default ModalJersey;
