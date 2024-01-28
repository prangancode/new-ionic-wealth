import React from "react";
import TopBarProgress from "react-topbar-progress-indicator";

const ProgressBar = () => {
  TopBarProgress.config({
    barThickness: 5,
  });

  return <TopBarProgress />;
};

export default ProgressBar;
