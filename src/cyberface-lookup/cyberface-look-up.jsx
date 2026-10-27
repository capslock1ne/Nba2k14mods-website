import React, { useMemo } from "react";


import { useState } from "react";
import players from './data/cyberface';
import "./cyberface.css";
  

 function Cyberface () {

      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

     const [search, setSearch] = useState("");
     const [selectedLetter, setSelectedLetter] = useState("ALL");


   

                  const filteredPlayers = useMemo(() => {
                  const keyword = search.trim().toLowerCase();

                  return players.filter((player) => {
                     const firstName = String(player.firstName ?? "").toLowerCase();
                     const lastName = String(player.lastName ?? "").toLowerCase();
                     const id = String(player.cyberfaceId ?? "");

                 
                     const matchesLetter =
                     selectedLetter === "ALL" ||
                     lastName.startsWith(selectedLetter.toLowerCase());

                     const matchesSearch =
                     !keyword ||
                     firstName.includes(keyword) ||
                     lastName.includes(keyword) ||
                     id.includes(keyword) ||
                     `${firstName} ${lastName}`.includes(keyword);

                     return matchesLetter && matchesSearch;
                  });
               }, [search, selectedLetter]);

     

       return (

               <>
                  <div className="cyberface">

                     <div className="cyberface-container">
                      
                       <h2>NBA PLAYERS CYBERFACE LOOKUP</h2>

                        <hr className="divider" />

                        <div className="search-players">

                       

                        <p> Search By Name, ID, Letter</p>

                        <input type="text" 
                        placeholder="Search for Players..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    
                        />

                        <div className="alphabet-filter">
                              <button
                                 type="button"
                                 className={selectedLetter === "ALL" ? "active" : ""}
                                 onClick={() => setSelectedLetter(alphabet)}
                              >
                                 ALL
                              </button>

                              {alphabet.map((letter) => {
                                    
                                  return (

                                     <button type="button" key={letter} className={selectedLetter === letter ? "active" : ""}
                                       onClick={() => setSelectedLetter(letter)}
                                                                   
                                     >
                                       {letter}

                                       </button>

                                  )

                                    



                              })}

                               </div>

                 
                         
                           <div className="cyberface-table-container">
                              <table className="cyberface-table">
                                 <thead>
                                    <tr>
                                    <th>Last Name</th>
                                    <th>First Name</th>
                                    <th>Cyberface ID</th>
                                    </tr>
                                 </thead>

                                 <tbody>
                                    {filteredPlayers.map((player, index) => (
                                    <tr key={`${player.firstName}-${player.lastName}-${player.cyberfaceId}-${index}`}>
                                       <td>{player.lastName}</td>
                                       <td>{player.firstName}</td>
                                       <td>{player.cyberfaceId}</td>
                                    </tr>
                                    ))}
                                 </tbody>
                              </table>
                              </div>
                       </div>
                        {filteredPlayers.length === 0 && (
                              <div className="no-results">
                                 No players found.
                              </div>
                           )}
                  </div>
               
              
                     

                  </div>
                   </>
       )


     

 }

 export default Cyberface;