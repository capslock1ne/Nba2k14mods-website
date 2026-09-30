import React from "react";
import { tutorials } from "./data/tutorial.js";
import { useState } from "react";
import ViewModal from "../TutorialPage/modal.jsx";





   const TutorialCard = () => {

          const [showModal, setShowModal] = useState(false);

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
                                            <p>{item.date}</p>
                                        </div>

                                        <button
                                            className="view-btn"
                                            onClick={() => setShowModal(true)}
                                        >
                                            View More
                                        </button>

                                    </div>
                                ))}

                            </div>

                            {showModal && (
                                <ViewModal
                                    closeModal={() => setShowModal(false)}
                                />
                            )}


                             </div>

                         </div>
                  
		

          )


 
   }


export  default TutorialCard;