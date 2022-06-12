import React from 'react';
import styled from 'styled-components';
const Container = styled.div`
  position: relative;
  width: 100%;
  z-index: 7;
`;
const Contents = styled.div`
  clear: both;
  padding-bottom: 50px;
  position: relative;
  width: 980px;
  margin: 0 auto;
`;
const WrapMoiveChart = styled.div``;
const TitleHeadingWrap = styled.div`
  position: relative;
  /* height: 60px; */
  padding-top: 30px;
  border-bottom: 3px solid #241d1e;
  > h3 {
    display: inline-block;
    position: relative;
    height: inherit;
    margin: 0;
    background-image: none;
    color: #222;
    font-weight: 500;
    font-size: 36px;
    text-align: left;
    vertical-align: middle;
  }
`;
const SectionSorting = styled.div`
  position: relative;
  margin-top: 20px;
  text-align: right;
  > select {
    padding: 3px 5px;
    line-height: 27px;
    height: 29px;
    border: 1px solid #b4b3aa;
  }
  > select option {
    height: 23px;
    line-height: 23px;
  }
`;
const Go = styled.button`
  border: 2px solid #7b7b7b;
  color: #7b7b7b;
  line-height: 23px;
  font-weight: 500px;
  font-size: 12px;
  text-align: center;
  vertical-align: middle;
  display: inline-block;
  position: relative;
  background-color: transparent;
  > * {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    padding: 0 5px 0;
    display: inline-block;
    position: relative;
  }
`;
const SectionMovieChart = styled.div`
  margin-top: 30px;
  position: relative;
  overflow: hidden;
  > ol {
    padding-top: 0;
    margin-left: -64px;
  }
  > ol > li {
    float: left;
    width: 197px;
    margin-left: 64px;
    padding-bottom: 30px;
  }
`;
const BoxImage = styled.div`
  position: relative;
  width: 197px;
  min-height: 272px;
  margin-bottom: 10px;
  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
  .score {
    margin-top: 7px;
    font-size: 11px;
  }
`;
const BoxContents = styled.div`
  height: 93px;
  > a {
    display: block;
  }
`;
function Movies() {
  return (
    <Container>
      <Contents>
        <WrapMoiveChart>
          <TitleHeadingWrap>
            <h3>무비차트</h3>
          </TitleHeadingWrap>
          <SectionSorting>
            <select>
              <option value="1">예매율순</option>
              <option value="2">평점순</option>
              <option value="3">관람객순</option>
            </select>
            <Go>
              <span>Go</span>
            </Go>
          </SectionSorting>

          <SectionMovieChart>
            {/*서버에서 받아온거 map*/}
            <ol>
              <li>
                <BoxImage>
                  <a></a>
                </BoxImage>
                <BoxContents>
                  <a></a>
                  <div className="score">
                    <strong className="percent">
                      예매율<span>{/*퍼센트*/}</span>
                    </strong>
                  </div>
                </BoxContents>
              </li>
            </ol>
          </SectionMovieChart>
        </WrapMoiveChart>
      </Contents>
    </Container>
  );
}

export default Movies;
