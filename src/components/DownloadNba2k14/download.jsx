
import React from "react";
import "../DownloadNba2k14/assets/download.css";

import arrowLeft from "../DownloadNba2k14/assets/arrowLeft.png";
import arrowRight from "../DownloadNba2k14/assets/arrowRight.png";
import downloadIcon from "./assets/downloadIcon.png";

const Download = () => {
    return (
        <section className="download-nba-2k14">

            {/* RIGHT ARROW */}
            <div className="side-arrow right-arrow" aria-hidden="true">
                <img src={arrowRight} alt="" />
            </div>

            {/* MAIN CONTAINER */}
            <div className="container">

                <img
                    src={downloadIcon}
                    alt="Download icon"
                    className="download-Icon"
                />

                <div className="content">

                    <p className="get-started">Get started</p>

                    <h2>DOWNLOAD NBA 2K14</h2>

                    <p className="description">
                        Don’t have NBA 2K14 installed yet? Download the
                        base game first before installing any 2K mods or
                        other community mods. A clean NBA 2K14 installation
                        is recommended for the best modding experience.
                    </p>
 
                        <div className="download-btn">
                          <a className="download-nba-btn" type="button" href="https://www.mediafire.com/file/6h1dzp4dvtlnrpq/NBA2K14.rar/file"    target="_blank">
                                    Get NBA 2K14 Here 
                          </a>

                        </div>
                    

                </div>

            </div>

            {/* LEFT ARROW */}
            <div className="side-arrow left-arrow" aria-hidden="true">
                <img src={arrowLeft} alt="" />
            </div>

        </section>
    );
};

export default Download;
