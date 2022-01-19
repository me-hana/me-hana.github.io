// import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import { CONST } from "../constant";

const MainImage = () => {
  return (
    <div className="main-img">
      <img
        src="./test-img.jpg"
        alt="test-img"
        style={{
          width: "100%",
          height: `calc(100vh - ${CONST.HEADERHEIGHT}px)`,
        }}
      />
    </div>
  );
};

export default MainImage;
