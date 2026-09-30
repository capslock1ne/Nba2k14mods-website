import React from "react";
import { useState } from "react";
import './jersey.css';
import JerseyData from "./data/jerseys";
import JerseyModal from "./jersey-modal"


         const Jersey = () => {

               const [showModal, setShowModal] = useState(false);


                  return  (
                    
              <>
                
        <div className="jersey">

            <div className="jersey-container">

               <p >Updated Team Roster, ratings, and accuracy for overall current NBA teams</p>
                 <h2  className="jersey-subtitle">ROSTERS</h2>

                    <hr className="divider" />

                      <div className="jersey-grid">

                                  
                         {JerseyData.map((data , index) => {

                              return (
                                                   
                                  <>
                                 <div className="jersey-card" key={index}>

                                        <div className="jersey-info">
                                            <h2 className="jersey-title">{data.title}</h2>
                                            <img src={data.image} alt="" />
                                            <p className="date">Date: {data.date}</p>
                                            <p className="description"> {data.description}</p>
                                        </div>

                                        <button
                                            className="view-btn-jersey"
                                            onClick={() => setShowModal(true)}
                                        >
                                            View Details
                                        </button>

                                    </div>
                                                  
                                </>

                           )

                       })}
           
                           </div>

                          {showModal && (
                                <JerseyModal
                                 closeModal={() => setShowModal(false)}
                                
                                />

                          )}


                     </div>

                 </div>
              
              
              </>
          )



            
        }


export default Jersey;