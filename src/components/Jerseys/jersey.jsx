import React from "react";
import { useState } from "react";
import './jersey.css';
import JerseyData from "./data/jerseys";
import JerseyModal from "./jersey-modal"


         const Jersey = () => {

               const [selectedJersey, setSelectedJersey] = useState(false);


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

                        <div className="jersey-card-footer">

                                    <button
                                        type="button"
                                        className="jersey-download-btn"
                                        onClick={() => window.open(data.downloadUrl, "_blank", "noopener,noreferrer")}
                                        disabled={!data.downloadUrl}
                                    >
                                        Download
                                    </button>

                                    <button
                                        type="button"
                                        className="view-btn-jersey"
                                        onClick={() => setSelectedJersey(data)}
                                    >
                                        View Details
                                    </button>

                                </div>
                                    </div>
                                                  
                                </>

                           )

                       })}
           
                           </div>

                          {selectedJersey && (
                                <JerseyModal
                                 closeModal={() => setSelectedJersey(null)}
                                 jersey={selectedJersey}
                                />

                          )}


                     </div>

                 </div>
              
              
              </>
          )



            
        }


export default Jersey;