import React from "react";
import rosterData from './data/roster';
import { useState } from "react";
import './roster-style/roster-modal.css';
import { createPortal } from "react-dom";

   const modalRoster = ({closeModal}) => {


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



           return (

              <> 
                    
         <div className="roster-modal">


                 {rosterData.map((data, index) => (
                      <div className="modal-container" key={index}>

                        <button className="close-btn"  onClick={closeModal} > ✕ </button>

                        <div className="slider-roster">

                                {/* MAIN IMAGE */}
                                <div
                                    className="roster-image-clickable"
                                    onClick={() => {
                                        setFullscreenImage(data.slides[currentSlide]);
                                    }}
                                >
                                    <img
                                        className="modal-image-roster"
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

                    {/* SLIDE INDICATORS */}
                    <div className="slide-indicators">

                        {data.slides.map((_, index) => (

                            <button
                                key={index}
                                className={
                                    currentSlide === index
                                        ? "indicator active"
                                        : "indicator"
                                }
                                onClick={() => setCurrentSlide(index)}
                            />

                        ))}

                    </div>

                             

                             <div className="modal-info">
                               <h2 className="modal-title">{data.title}</h2>

                               <hr className="modal-divider" />

                               <h4>Description</h4>
                                 <p className="modal-description">{data.description}</p>

                                    <h4>Installation Guide:</h4> 
                                    <ul className="installation-list">
                                        <li>Join Discord community to get the files</li>
                                        <li>Back up your original game files before installing</li>
                                        <li>Extract the download into your NBA 2K14 mod folder.</li>
                                        <li>Overwrite files when prompted and launch the game.</li>

                                    </ul>
                                    

                                    
                                        <a href={data.youtube} target="_blank" rel="noopener noreferrer"  >
                                         <button className="watch-btn">  Get files  </button>
                                        </a>

                                        
               
                                   </div>

                                        <div className="button-credits"> 
                                            <p>Credits to:</p>
                                             <button> {data.credits}</button>
                                             <button> {data.creditsTwo}</button>

                                        </div>

                                         
                                            

                                        

                                </div>
                                 
                                    ))}    

                                      {fullscreenImage &&
                                                createPortal(
                                                    <div
                                                        className="fullscreen-roster"
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
                                                            className="fullscreen-roster-image"
                                                            onClick={(event) => event.stopPropagation()}
                                                        />
                        
                                                    </div>,
                                                document.body
                                                )
                                            }

                            </div>
                        
                        
                        </>



                        )




                }


   export default modalRoster;