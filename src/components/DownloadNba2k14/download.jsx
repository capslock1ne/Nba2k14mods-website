import React from "react";
import '../DownloadNba2k14/assets/download.css';
import arrowLeft from "../DownloadNba2k14/assets/arrowLeft.png";
import arrowRight from "../DownloadNba2k14/assets/arrowRight.png";



const download = () => {

         return (

               <div className="download-nba-2k14">

                 {/* RIGHT ARROW */}
                        <div className="side-arrow right-arrow">
                             <img src={arrowRight} alt="arrow-right" />
                        </div>

                 

                   <div className="container">

                     <h2> BEFORE INSTALLING THIS MOD</h2>

                       <p>Make sure you already have <span> 2K14 </span>  
                        before installing the mod</p>

                       <p>Mods modify your existing NBA 2K14 game files.
                       Always back up your original files before installation.</p>
                        <button>Get Nba 2K14 Here</button>
                   </div>

                   {/* LEFT ARROW */}
                   
                    <div className="side-arrow left-arrow">
                        <img src={arrowLeft} alt="arrow-left" />
                        
                    </div>

                   

               </div>



         )


     
}


export default download;