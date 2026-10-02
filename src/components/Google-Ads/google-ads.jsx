import React, { useEffect } from "react";
import "./google-ads-style/google-ads.css";

const Advertisement = () => {

  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
    } catch (error) {
      console.error("AdSense error:", error);
    }
  }, []);

  return (
    <div className="advertisement">

      <ins
        className="adsbygoogle"
        style={{ display: "block" }}
        data-ad-client="ca-pub-9731083160538701"
        data-ad-slot="3692416070"
        data-ad-format="auto"
        data-full-width-responsive="true"
      />

    </div>
  );
};

export default Advertisement;