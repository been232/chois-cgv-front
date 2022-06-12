import React from 'react';
import styled from 'styled-components';
import Header from '../component/Header';
import MovieChart from '../component/MovieChart';
const CgvWrap = styled.div`
  position: relative;
  width: 100%;
  min-width: 1040px;
`;
function Home() {
  return (
    <CgvWrap>
      <MovieChart></MovieChart>
    </CgvWrap>
  );
}

export default Home;
