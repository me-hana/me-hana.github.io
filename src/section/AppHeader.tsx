// import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import { CONST } from "../constant";

const StyledHeader = styled("div")(() => ({
  width: "100%",
  height: CONST.HEADERHEIGHT,
  position: "fixed",
  top: 0,
  left: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backdropFilter: "blur(5px)",
  backgroundColor: "rgba(210, 180, 210, 0.4)",
  ".title": {
    paddingLeft: "20px",
    fontFamily: "DungGeunMo",
    fontSize: "2rem",
    color: "white",
    textShadow: "2px 2px 3px #AAA",
  },
  ".menu": {
    paddingRight: "20px",
  },
}));

const AppHeader = () => {
  return (
    <StyledHeader>
      <div className="title">useHana();</div>
      <div className="menu">목록 들어갈 자리</div>
    </StyledHeader>
  );
};

export default AppHeader;
