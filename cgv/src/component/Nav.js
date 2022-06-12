import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
const NavContainer = styled.div`
  position: absolute;
  left: 0;
  top: 130px;
  width: 100%;
  padding: 5px 0;
  background-color: #fff;
`;
const NavContents = styled.div`
  position: relative;
  width: 980px;
  margin: 0 auto;
`;
const NavMenu = styled.div`
  display: inline-flex;
  > li {
    &:first-child {
      width: 100px;
    }
    width: 100px;
    padding: 20px 0;
  }
  h2 {
    position: absolute;
    top: 0px;
  }
  a {
    font-weight: 500;
    font-size: 16px;
    color: #222;
    line-height: 1.5em;
  }
`;
function Nav() {
  return (
    <NavContainer>
      <NavContents>
        <NavMenu>
          <li>
            <h2>
              <Link to="/movies">영화</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/theater">극장</Link>
            </h2>
          </li>
          <li>
            <h2>
              <Link to="/book">예매</Link>
            </h2>
          </li>
        </NavMenu>
      </NavContents>
    </NavContainer>
  );
}

export default Nav;
