import React from "react";

import { useState } from "react";
import rosterData from './data/roster';
import './roster-style/roster.css';
import RosterModal from './roster-modal';


const Roster = () => {

 
       const [showModal, setShowModal] = useState(false);
       
          return  (

              <>
                
        <div className="roster">

            <div className="roster-container">

               <p >Updated Team Roster, ratings, and accuracy for overall current NBA teams</p>
                 <h2  className="roster-subtitle">ROSTERS</h2>

                    <hr className="divider" />

                      <div className="roster-grid">

                                  
                         {rosterData.map((data , index) => {

                              return (
                                                   
                                  <>
                                 <div className="roster-card" key={index}>

                                        <div className="roster-info">
                                            <h2 className="roster-title">{data.title}</h2>
                                            <img src={data.image} alt="" />
                                            <p className="date">Date: {data.date}</p>
                                            <p className="description"> {data.description}</p>
                                        </div>

                                        <button
                                            className="view-btn-roster"
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
                                <RosterModal
                                 closeModal={() => setShowModal(false)}
                                
                                />

                          )}


                     </div>

                 </div>
              
              
              </>
          )



}


export default Roster;