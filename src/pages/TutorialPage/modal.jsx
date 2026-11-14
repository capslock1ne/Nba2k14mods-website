import React from "react";

import { useState, useEffect } from "react";

import {tutorials} from '../TutorialPage/data/tutorial';	
import '../TutorialPage/modal-style/modal.css';
import { createPortal } from "react-dom";


   const ViewModal = ({tutorial, closeModal}) => {


			const [currentSlide, setCurrentSlide] = useState(0);
			const [fullscreenImage, setFullscreenImage] = useState(null);

                const slides = tutorial?.slides || [];

                    // Reset slider when a different scoreboard is selected
                    useEffect(() => {
                        setCurrentSlide(0);
                        setFullscreenImage(null);
                    }, [tutorial]);

                    // Prevent background scrolling
                    useEffect(() => {
                        if (!tutorial) return;

                        const previousOverflow = document.body.style.overflow;
                        document.body.style.overflow = "hidden";

                        return () => {
                            document.body.style.overflow = previousOverflow;
                        };
                    }, [tutorial]);

                    // Keyboard controls
                    useEffect(() => {
                        if (!tutorial) return;

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
                    }, [tutorial, fullscreenImage, closeModal, slides.length]);

                    if (!tutorial) return null;

                    const nextSlide = () => {
                        setCurrentSlide((prev) => (prev + 1) % slides.length);
                    };

                    const previousSlide = () => {
                        setCurrentSlide(
                            (prev) => (prev - 1 + slides.length) % slides.length
                        );
                    };

     return createPortal(
             <div className="tutorial-modal">
     
                 {/* BACKDROP */}
                 <div
                     className="modal-backdrop"
                     onClick={closeModal}
                 />
     
                 {/* MODAL CONTENT */}
                 <div
                     className="modal-container-tutorial"
                     role="dialog"
                     aria-modal="true"
                     aria-labelledby="tutorial-modal-title"
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
                         <div className="tutorial-gallery">
     
                             <div className="slider">
     
                                 <div
                                     className="tutorial-image-clickable"
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
                                         className="modal-image-tutorial"
                                         src={slides[currentSlide]}
                                         alt={`${tutorial.title} tutorial ${currentSlide + 1}`}
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
                                 <div className="slide-indicators-tutorial">
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
                     <div className="tutorial-modal-info">
     
                         <h2
                             className="tutorial-modal-title"
                             id="scoreboard-modal-title"
                         >
                             {tutorial.title}
                         </h2>
     
                         <hr className="tutorial-modal-divider" />
     
                         <h4 className="modal-description">
                             Description
                         </h4>
     
                         <p className="tutorial-modal-description">
                             {tutorial.description}
                         </p>
     
                         <h4 className="installation">
                             Installation Guide:
                         </h4>
     
                         <ul className="tutorial-installation-list">
                            
                             <li>Back up your original game files before installing.</li>
                             <li>Extract the download into your NBA 2K14 mod folder.</li>
                             <li>Overwrite files when prompted and launch the game.</li>
                         </ul>
     
                     </div>


                     <div className="watch-btn-modal">
                         <a
                        href="https://www.youtube.com/watch?v=WmUxdoqK4vM&t=1s"
                        className="watch-tutorial-btn-modal"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Watch Tutorial
                     </a>

                     </div>

                    
     
                     
     
                   
     
                 </div>
     
                 {/* FULLSCREEN IMAGE PORTAL */}
                 {fullscreenImage && createPortal(
                     <div
                         className="fullscreen-tutorial"
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
                             alt="Full-size tutorial"
                             className="fullscreen-tutorial-image"
                             onClick={(event) => event.stopPropagation()}
                         />
                     </div>,
                     document.body
                 )}
     
             </div>,
             document.body
         );


			 
	
									
   }


  export default ViewModal;