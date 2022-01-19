// import { useState, useEffect } from "react";
import { styled } from "@mui/material/styles";

import MainImage from "./info/MainImage";
import { CONST } from "./constant";

const StyledView = styled("div")(() => ({
  paddingTop: CONST.HEADERHEIGHT,
}));

const ScrollTest = styled("div")(() => ({
  backgroundColor: "#EFEFEF",
}));

const MyView = () => {
  return (
    <StyledView>
      <MainImage />
      <ScrollTest>
        <div>스크롤 테스트를 위한 공간~</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
        <div>scroll test</div>
      </ScrollTest>
    </StyledView>
  );
};

export default MyView;
