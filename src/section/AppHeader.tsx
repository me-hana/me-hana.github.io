// import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import { CONST } from "../constant";

const StyledHeader = styled("div")(() => ({
  width: "100%",
  height: CONST.HEADERHEIGHT,
  position: "fixed",
  top: 0,
  left: 0,
  backgroundColor: "thistle",
}));

const AppHeader = () => {
  return <StyledHeader>Header 영역</StyledHeader>;
};

export default AppHeader;
