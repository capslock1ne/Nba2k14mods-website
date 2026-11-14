import React from 'react';
import './assets/credits.css';



const Credits = () => {

       return (

           <section className="credits-section" id="credits">
                <div className="credits-container">

                    <h2 className="credits-title">MASSIVE CREDITS</h2>

                    <p className="credits-description">
                        Behind every great mod is a talented creator. This section recognizes
                        the dedicated NBA 2K14 modding community whose creativity, passion,
                        and contributions help keep the game alive.
                    </p>

                    <div className="credits-contributors">
                    <span className="credit-tag">Kamatis 2K</span>
                    <span className="credit-tag">Mackubex</span>
                    <span className="credit-tag">UNI2K</span>
                    <span className="credit-tag">OMEL2K</span>
                    <span className="credit-tag">Community Contributors</span>
                    </div>

                </div>
         </section>


         
       );


}

export default Credits;