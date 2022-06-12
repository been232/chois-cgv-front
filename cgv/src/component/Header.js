import React from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import Nav from './Nav';
const HeaderContainer = styled.div`
  position: relative;
  z-index: 99;
`;
const HeaderContents = styled.div`
  margin-bottom: 50px;
  background-color: #fff;
  border-bottom: 1px solid #eee;
`;
const Contents = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 6px 25px 5px;
  background-color: #fff;
  width: 980px;
  margin: 0 auto;
  .logo {
    display: inline-flex;
    align-items: flex-end;
    height: 53px;
    a {
      display: block;
      float: left;
      height: 100%;
    }
    img {
      display: block;
      width: auto;
      height: 100%;
      object-fit: contain;
    }
    span {
      font-weight: 300;
      font-size: 16px;
      color: #222;
      letter-spacing: 0.313em;
      line-height: 1.5em;
    }
  }
`;
const MemberInfo = styled.ul`
  display: flex;
  align-items: center;
  li {
    margin-left: 44px;
    margin-top: 2px;
  }
  a {
    display: block;
    position: relative;
    padding-bottom: 19px;
  }
  img {
    width: 36px;
    height: 36px;
  }
  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    font-size: 13px;
    color: #666;
    line-height: 1.462em;
    white-space: nowrap;
    transform: translate(-50%, 0);
  }
`;
function Header() {
  return (
    <HeaderContainer>
      <HeaderContents>
        <Contents>
          <h1 className="logo">
            <Link to="/">
              <img src="https://img.cgv.co.kr/R2014/images/common/logo/logoRed.png"></img>
            </Link>
            <span>CULTUREFLEX</span>
          </h1>
          <MemberInfo>
            <li>
              <Link to="/login">
                <FontAwesomeIcon icon={faLock} color="#000" size="2x" />
                <span>로그인</span>
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FontAwesomeIcon icon={faUserPlus} color="#000" size="2x" />
                <span>회원가입</span>
              </Link>
            </li>
          </MemberInfo>
        </Contents>
      </HeaderContents>
      <Nav></Nav>
    </HeaderContainer>
  );
}
export default Header;
