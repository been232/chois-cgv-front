import { Button } from 'antd';
import React, { useState } from 'react';
import styled from 'styled-components';

const MovieChartWrap = styled.div`
  position: relative;
  top: 90px;
  clear: none;
  float: none;
  background-color: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1),
    rgba(232, 232, 232, 0.37)
  );
`;
const Contents = styled.div`
  width: 980px;
  height: 100%;
  margin: 0 auto;
`;
const MoviewChartButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;

  h3 {
    height: auto;
    margin: 0;
    line-height: 1em;
    background-image: none;
    > a {
      font-weight: 700;
      color: #222;
      font-size: 26px;
      line-height: 1.423em;
    }
  }
`;
const MovieChartContainer = styled.div`
  overflow: visible;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  list-style-type: style none;
  padding: 0;
  z-index: 1;
`;
const SwipperWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;
`;
const SwipperSlide = styled.div`
  width: 170.4px;
  margin-right: 32px;

  flex-shrink: 0;
  height: 100%;
  position: relative;
  transition-property: transform;
`;
const ButtonBox = styled.div`
  position: absolute;
  top: 5.6rem;
  left: 1.2rem;
  color: #1890ff;
`;
function Swipper() {
  const [hide, setHide] = useState(true);
  return (
    <SwipperSlide
      onMouseEnter={() => {
        setHide(false);
      }}
      onMouseLeave={() => {
        setHide(true);
      }}
    >
      <ButtonBox style={{ display: `${hide ? 'none' : 'block'}` }}>
        <Button style={{ marginBottom: '10px' }}>상세보기</Button>
        <Button danger>예매하기</Button>
      </ButtonBox>
    </SwipperSlide>
  );
}
function MovieChart() {
  return (
    <MovieChartWrap>
      <Contents>
        <MoviewChartButton>
          <div style={{ display: 'inline-flex' }}>
            <h3>
              <a href="#none">무비차트</a>
            </h3>
          </div>
          <MovieChartContainer>
            <SwipperWrapper>
              <Swipper></Swipper>
            </SwipperWrapper>
          </MovieChartContainer>
        </MoviewChartButton>
      </Contents>
    </MovieChartWrap>
  );
}

export default MovieChart;
