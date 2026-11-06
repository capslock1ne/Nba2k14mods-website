
import React from "react";
import { FiDownload, FiEye } from "react-icons/fi";
import Advertisement from "../components/Google-Ads/google-ads";
import Categories from "../components/mod-categories";
import LatestUpload from "../components/latest-upload";
import Download2K14 from "../components/DownloadNba2k14/download";

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

            <a href="#categories" className="browse-btn">
              <FiEye className="btn-icon" />
              Browse Mod
            </a>

            <a href="/community" className="community-btn">
              <FiDownload className="btn-icon" />
              Join Community
            </a>

          </div>
        </div>
      </section>

      <Download2K14 />

      <Advertisement />

      <Categories />

      <LatestUpload />
    </>
  );
};

export default Home;
