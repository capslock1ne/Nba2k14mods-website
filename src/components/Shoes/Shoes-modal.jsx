import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import ShoesData from "./data/shoes";
import "../Shoes/data/Shoes-modal.css";

const modalShoes = ({ shoes, closeModal }) => {

    const [currentSlide, setCurrentSlide] = useState(0);
    const [fullscreenImage, setFullscreenImage] = useState(null);
    
    useEffect(() => {
           setCurrentSlide(0);
           setFullscreenImage(null);
       }, [shoes]);
   
      
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
   
       if (!shoes) {
           return null;
       }
   
         const slides = shoes.slides || [];
   
         
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
           <div className="shoes-modal">
               {/* Background */}
               <div
                   className="modal-backdrop"
                   onClick={closeModal}
               />
   
               {/* ONLY THE SELECTED SHOES */}
               <div className="modal-container-shoes">
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
                                       className="modal-image-shoes"
                                       src={slides[currentSlide]}
                                       alt={`${shoes.title} shoes ${currentSlide + 1}`}
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
                   <div className="modal-info">
                       <h2 className="modal-title">
                           {shoes.title}
                       </h2>
   
                       <hr className="court-modal-divider" />
   
                       <h4 className="description">
                           Description
                       </h4>
   
                       <p className="court-modal-description">
                           {shoes.descriptionModal}
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

                       <h4 className="important-notes">
                           Important Notes
                       </h4>

                       <ul className="important-list">
                          <li>
                            Always keep a backup of your original game files.
                          </li>
                           
                            <li>
                            Make sure the shoe package is compatible with your NBA 2K14 installation.
                          </li>

                           <li>
                            Some shoe modifications may replace existing shoe models or textures.
                          </li>

                           <li>
                             Installing multiple shoe packs may cause conflicts if they use the same shoe slots.
                          </li>

                           <li>
                              Follow the instructions provided with the download if additional steps are required.
                           </li>


                       </ul>
   
                       <a
                           href={shoes.youtube}
                           target="_blank"
                           rel="noopener noreferrer"
                       >
                           <button
                               type="button"
                               className="shoes-download-btn"
                           >
                               Get files
                           </button>
                       </a>
                   </div>
   
                   {/* CREDITS */}
                   <div className="shoes-button-credits">
                       <p>Credits to:</p>
   
                       {shoes.credits && (
                           <button type="button">
                               {shoes.credits}
                           </button>
                       )}
   
                       {shoes.creditsTwo && (
                           <button type="button">
                               {shoes.creditsTwo}
                           </button>
                       )}
                   </div>
               </div>
   
               {/* FULLSCREEN IMAGE */}
               {fullscreenImage &&
                   createPortal(
                       <div
                           className="fullscreen-shoes"
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
                               alt={`${shoes.title} fullscreen`}
                               className="fullscreen-shoes-image"
                               onClick={(event) => event.stopPropagation()}
                           />
                       </div>,
                       document.body
                   )}
           </div>,
           document.body
       );
};

export default modalShoes;