import React from "react";
import rosterData from './data/roster';
import { useEffect, useState } from "react";
import './roster-style/roster-modal.css';
import { createPortal } from "react-dom";

   const modalRoster = ({ roster, closeModal}) => {


          const [currentSlide, setCurrentSlide] = useState(0);
          const [fullscreenImage, setFullscreenImage] = useState(null);

  
           useEffect(() => {
                   setCurrentSlide(0);
                   setFullscreenImage(null);
               }, [roster]);
           
               
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
          
              if (!roster) {
                  return null;
              }
          
                const slides = roster.slides || [];


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

              
                    
         <div className="roster-modal">

            <div
                className="modal-backdrop"
                onClick={closeModal}
            />


                  {/* ONLY THE SELECTED COURT */}
                             <div className="modal-container">
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
                                             {/* Main image */}
                                             <div
                                                 className="roster-image-clickable"
                                                 onClick={() =>
                                                     setFullscreenImage(slides[currentSlide])
                                                 }
                                             >
                                                 <img
                                                     className="modal-image-roster"
                                                     src={slides[currentSlide]}
                                                     alt={`${roster.title} court ${currentSlide + 1}`}
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
                                                 />
                                             ))}
                                         </div>
                                     </>
                                 )}
                 
                                 {/* COURT INFORMATION */}
                                 <div className="modal-info">
                                     <h2 className="modal-title">
                                         {roster.title}
                                     </h2>
                 
                                     <hr className="modal-divider" />
                 
                                     <h4 className="modal-description">
                                         Description
                                     </h4>
                 
                                     <p >
                                         {roster.description}
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
                 
                                     <a
                                         href={roster.youtube}
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
                                 <div className="button-credits">
                                     <p>Credits to:</p>
                 
                                     {roster.credits && (
                                         <button type="button">
                                             {roster.credits}
                                         </button>
                                     )}
                 
                                     {roster.creditsTwo && (
                                         <button type="button">
                                             {roster.creditsTwo}
                                         </button>
                                     )}
                                 </div>
                             </div>
                 
                             {/* FULLSCREEN IMAGE */}
                             {fullscreenImage &&
                                 createPortal(
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
                                     </div>,
                                     document.body
                                 )}
                         </div>,
                         document.body
                     );

 
           
                }


   export default modalRoster;