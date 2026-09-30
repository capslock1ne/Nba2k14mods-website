import React from "react";
import { useState } from "react";
import '../Scoreboards/data/scoreboard.css';
import ScoreboardData from "./data/scoreboard";
import ScoreBoardModal from "./Scoreboard-Modal";


  const ScoreBoard = () => {

               const [showModal, setShowModal] = useState(false);


                  return  (
                    
              <>
                
        <div className="scoreboard">

            <div className="scoreboard-container">

               <p >Updated Team Roster, ratings, and accuracy for overall current NBA teams</p>
                 <h2  className="scoreboard-subtitle">ROSTERS</h2>

                    <hr className="divider" />

                      <div className="scoreboard-grid">

                                  
                         {ScoreboardData.map((data , index) => {

                              return (
                                                   
                                  <>
                                 <div className="scoreboard-card" key={index}>

                                        <div className="scoreboard-info">
                                            <h2 className="scoreboard-title">{data.title}</h2>
                                            <img src={data.image} alt="" />
                                            <p className="date">Date: {data.date}</p>
                                            <p className="description"> {data.description}</p>
                                        </div>

                                        <button
                                            className="view-btn-scoreboard"
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
                                <ScoreBoardModal
                                 closeModal={() => setShowModal(false)}
                                
                                />

                          )}


                     </div>

                 </div>
              
              
              </>
          )



            
        }


export default ScoreBoard;