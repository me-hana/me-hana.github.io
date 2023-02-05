// import { useState, useEffect } from "react";
import { styled } from '@mui/material/styles';

import MainImage from './info/MainImage';
import { CONST } from './constant';

const phrases = {
  'h1-1': '이 부분은 나를 잘 나타낼 수 있는',
  'h1-2': '한 문장을 넣을 예정인데',
  div: '이 글은 길게 써볼 생각입니다. 근데 이제 타이핑 효과를 넣어서 ',
};

const StyledView = styled('div')(() => ({
  paddingTop: CONST.HEADERHEIGHT,
}));

const InfoWrapper = styled('div')(() => ({
  textAlign: 'center',
  h1: {
    fontWeight: '600',
    fontSize: '4vw',
    margin: '3rem',
  },
  '@keyframes typing': {
    from: {
      width: 0,
    },
    to: {
      width: '100%',
    },
  },
  '@keyframes blink': {
    from: {
      borderColor: 'transparent',
    },
    to: {
      borderColor: 'purple',
    },
  },
  '.typewriting-wrapper': {
    display: 'inline-block',
  },
  '.typewriting': {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    fontSize: '2.4vw',
    fontWeight: '100',
    borderRight: '2px solid purple',
    width: 0,
    animation: `typing 2s steps(${phrases.div.length}, end) forwards, blink .8s infinite`,
  },
}));

const ScrollTest = styled('div')(() => ({
  backgroundColor: '#EFEFEF',
}));

const MyView = () => {
  return (
    <StyledView>
      {/* <MainImage /> */}
      <InfoWrapper>
        <h1>
          {phrases['h1-1']}
          <br />
          {phrases['h1-2']}
        </h1>
        <div className="typewriting-wrapper">
          <div className="typewriting">{phrases.div}</div>
        </div>
      </InfoWrapper>
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
