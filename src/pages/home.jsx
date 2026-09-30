import React from "react";
import { FiDownload } from "react-icons/fi";
import { FiEye } from "react-icons/fi";
import Advertisement from "../components/google-ads";
import Categories from "../components/mod-categories";
import LatestUpload from "../components/latest-upload";

const Home = () => {
  return (

            <>
              <section className="home">
                <div className="home-container">

                  <h1>
                    NBA 2K14 <span className="gradient-text">MODDING</span> COMMUNITY
                  </h1>

                  <p>
                    The Home of NBA 2K14 Mods, Rosters, Courts, Cyberfaces,
                    and Guides. Browse thousands of free mods crafted by the community.
                  </p>

                  <div className="center-buttons">
                    <button className="download-btn"><FiEye className="btn-icon" /> Browse Mod</button>
                    <button className="browse-btn"> <FiDownload  className="btn-icon"/> Join Commnuity </button>
                  </div>

                </div>
            </section>
              
                  <Advertisement />

                  <Categories />

                  <LatestUpload />
                  </>
                
                
  
 
       


  );
};

export default Home;