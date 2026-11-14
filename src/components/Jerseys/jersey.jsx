import React from "react";
import { useState } from "react";
import './jersey.css';
import JerseyData from "./data/jerseys";
import JerseyModal from "./jersey-modal"
import Credits from "../credits/credit";

         const Jersey = () => {

               const [selectedJersey, setSelectedJersey] = useState(false);


                  return  (
                    
              <>
                
        <div className="jersey">

            <div className="jersey-container">

               <p>
                    Explore updated NBA 2K14 jerseys, including City Edition,
                    Classic Edition, Statement Edition, and custom jersey designs.
                </p>

                <h2 className="jersey-subtitle">JERSEYS</h2>

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
                                        onClick={() => {
                                        data.downloadUrl?.forEach((file) => {
                                            window.open(
                                                file.url,
                                                "_blank",
                                                "noopener,noreferrer"
                                            );
                                        });
                                    }}
                                    disabled={!data.downloadUrl?.length}
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
                     <Credits />

                 </div>
              
              
              
              </>
          )



            
        }


export default Jersey;