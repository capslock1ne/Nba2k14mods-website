import React from "react";
import { tutorials } from "./data/tutorial.js";
import { useState } from "react";
import ViewModal from "../TutorialPage/modal.jsx";
import Credits from "/capture-vid/C-files/Nba2k14Mods/nba2k14mods/src/components/credits/credit.jsx";




   const TutorialCard = () => {

          const [showModal, setShowModal] = useState(null);

             return (

              <div className="tutorial">

                   <div className="tutorial-content">

                           
                                    <>
                                      <h2 className="header-title">Youtube</h2>
                                      <p className="tutorial-subtitle">Tutorial videos & Guides</p>
                                    </>
                                

                           <hr className="divider" />
                

                        <div className="tutorial-grid">
   
                                 {tutorials.map((item, index) => (
                                    <div className="tutorial-card" key={index}>

                                        <div className="tutorial-info">
                                            <h2 className="tutorial-title">{item.title}</h2>
                                            <img src={item.image} alt="" />
                                            <h5>{item.mod}</h5>
                                            <p className="tutorial-date">{item.date}</p>
                                        </div>


                                        <div className="view-btn-footer">

                                             <a
                                                href="YOUR_TUTORIAL_URL"
                                                className="watch-tutorial-btn"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Watch Tutorial
                                            </a>

                                         <button
                                            className="view-btn"
                                            onClick={() => setShowModal(item)}
                                             >
                                              View Details
                                          </button>

                                        </div>

                                  
                                       

                                    </div>
                                ))}

                            </div>
                            <Credits />

                            {showModal && (
                                <ViewModal
                                    tutorial={showModal}
                                    closeModal={() => setShowModal(null)}
                                />
                            )}


                             </div>

                         </div>
                  
		

          )


 
   }


export  default TutorialCard;