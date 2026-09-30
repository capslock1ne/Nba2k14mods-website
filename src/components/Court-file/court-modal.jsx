import React from "react";
import courtData from './data/court';
import { createPortal } from "react-dom";
import { useState } from "react";
import '../Court-file/court-modal.css';


   const modalCourt = ({closeModal}) => {


          const [currentSlide, setCurrentSlide] = useState(0);

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



           return  createPortal(

              <div className="court-modal">

                 <div className="modal-backdrop" onClick={closeModal}></div>


                 {courtData.map((data, index) => (
                      <div className="modal-container-court" key={index}>

                        <button className="close-btn"  onClick={closeModal} > ✕ </button>

                        <div className="slider">

                        <button
                            className="slide-btn prev"
                            onClick={() => previousSlide(data.slides)}
                        >
                            ❮
                        </button>

                        
                            <img
                                className="modal-image-court"
                                src={data.slides[currentSlide]}
                                alt={data.title}
                            />

                         
                      

                        <button
                            className="slide-btn next"
                            onClick={() => nextSlide(data.slides)}
                        >
                            ❯
                        </button>

                    </div>

                    
                    <div className="slide-indicators-court">

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

                             

                             <div className="court-modal-info">
                               <h2 className="court-modal-title">{data.title}</h2>

                               <hr className="court-modal-divider" />
                               <h4 className="description">Description</h4>
                                 <p className="court-modal-description">{data.description}</p>
                                   
                                   
                                   
                                    
                                    <h4 className="installation">Installation Guide:</h4> 
                                    <ul className="court-installation-list">
                                        <li>Join Discord community to get the files</li>
                                        <li>Back up your original game files before installing</li>
                                        <li>Extract the download into your NBA 2K14 mod folder.</li>
                                        <li>Overwrite files when prompted and launch the game.</li>

                                    </ul>
                                    
                                    
                                        <a href={data.youtube} target="_blank" rel="noopener noreferrer"  >
                                         <button className="court-watch-btn">  Get files  </button>
                                        </a>

                                        
                                   </div>

                                        <div className="court-button-credits"> 
                                            <p>Credits to:</p>
                                             <button> {data.credits}</button>
                                             <button> {data.creditsTwo}</button>

                                        </div>

                                        

                                </div>
                                    ))}    

                            </div>,
                               document.body

                              
                        
                        
                      



                        )




                }


   export default modalCourt;