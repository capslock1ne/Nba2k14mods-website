import React from "react";
import { useState } from "react";
import './court.css';
import courtData from './data/court';
import Courtmodal from './court-modal';

const Court = () => {


    const [showModal, setShowModal] = useState(false);


     return (

        <>

           <div className="court">
              
                 <div className="court-container">
                       <p>Updated All team courts</p>
                       <h2  className="court-subtitle">COURTS</h2>

                       <hr className="divider" />

                        <div className="court-grid">


                            {courtData.map((data , index) => {

                              return (
                                                   
                                  <>
                                 <div className="court-card" key={index}>

                                        <div className="court-info">
                                            <h2 className="court-title">{data.titleTwo}</h2>
                                            <img src={data.image} alt="" />
                                            <p className="date">Date: {data.date}</p>
                                            <p className="description-court">{data.description}</p>
                                            
                                        </div>

                                        <button
                                            className="view-btn-court"
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

                         <Courtmodal
                           closeModal={() => setShowModal(false)}
                         
                         />
                    )}
                 </div>


                    
           </div>
        
        
        
        </>
     )




}



export default Court;