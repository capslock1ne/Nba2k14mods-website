import React from "react";


import { useState } from "react";
import players from './data/cyberface';
import "./cyberface.css";
  

 function Cyberface () {



     const [search, setSearch] = useState("");

     const filteredPlayers = players.filter((player) => {
      
         const keyword = search.toLowerCase();

 
          return (

                 player.firstName.toLowerCase().includes(keyword) ||
                 player.lastName.toLowerCase().includes(keyword) ||
                 player.cyberfaceId.toString().includes(keyword)


                )
             

     });
      
       return (

               <>
                  <div className="cyberface">

                     <div className="cyberface-container">
                      
                       <h2>NBA PLAYERS CYBERFACE LOOKUP</h2>

                        <hr className="divider" />

                        <div className="search-players">

                       

                        <p> Search By Name, ID</p>

                        <input type="text" 
                        placeholder="Search for Players..." 
                        value={search} 
                        onChange={(e) => setSearch(e.target.value)}
                    
                        />

                 
                  <div className="database">
                     <table>
                         <thead>
                            <tr>
                                <th>Last Name</th>
                                <th>First Name</th>
                                <th>Cyberface ID</th>
                            </tr>
                         </thead>


                        

                         <tbody>
                         
                          {filteredPlayers.map((player) => {
                              
                               
                              return (

                                  <tr key={player.cyberfaceId}>

                                        <td>{player.lastName}</td>
                                        <td>{player.firstName}</td>
                                        <td>{player.cyberfaceId}</td>
                            
                                     </tr>


                              )
                               

                                    
                                    
                               
                                
                              
                          })}



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