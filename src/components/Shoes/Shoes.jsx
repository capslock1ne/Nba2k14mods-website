import React from "react";
import { useState } from "react";
import '../Shoes/data/Shoes.css';
import ShoesData from "../Shoes/data/shoes";
import ShoesModal from "../Shoes/Shoes-modal";



const Shoes = () => {

              const [selectedShoes, setSelectedShoes] = useState(null);


                  return  (
                    
              <>
                
        <div className="Shoes">

            <div className="shoes-container">

               <p>Upgrade your players' look with custom sneakers and exclusive basketball shoe collections.</p>
                 <h2  className="shoes-subtitle">Shoes</h2>

                    <hr className="divider" />

                      <div className="shoes-grid">

                                  
                         {ShoesData.map((data , index) => {

                              return (
                                                   
                                  <>
                                 <div className="shoes-card" key={index}>

                                        <div className="shoes-info">
                                            <h2 className="shoes-title">{data.title}</h2>
                                            <img src={data.image} alt="" />
                                            <p className="date">Date: {data.date}</p>
                                            <p className="description-shoes"> {data.description}</p>
                                        </div>

                                        <button
                                            className="view-btn-shoes"
                                            onClick={() => setSelectedShoes(data)}
                                        >
                                            View Details
                                        </button>

                                    </div>
                                                  
                                </>

                           )

                       })}
           
                           </div>

                          {selectedShoes && (
                                <ShoesModal
                                 shoes={selectedShoes}
                                 closeModal={() => setSelectedShoes(null)}
                                 
                                />

                          )}


                     </div>

                 </div>
              
              
              </>
          )



            
        }


export default Shoes;