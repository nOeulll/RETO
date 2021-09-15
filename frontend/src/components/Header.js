import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import mainLogo from '../assets/icons/mainLogo.svg';

function Header() {

  return (
    <>
      <HeaderBlock>
          <div className="wrapper">

              <div className="navbar__logo">
                <Link to ="/">
                  <img className="navbar__logo_img" src={mainLogo} alt="로고" />
                </Link>
              </div>
              <ul className="navbar__menu">
                <li className="album_wrapper">
                  <Link className="album" to="/album">Album</Link>
                </li>
                <li className="photo_wrapper">
                  <Link
                    className="photo"
                    to={{ pathname: "/photo", state: { id: 0 } }}>
                      Photo
                  </Link>
                </li>
              </ul>
              <div className="my">
                <Link to="/my">
                  <HeaderProfile><IoPersonCircleOutline /></HeaderProfile>
                </Link>
              </div>

          </div>
      </HeaderBlock>
    </>
  )
}

const HeaderBlock = styled.div`
  a {
    text-decoration: none;
    color: #2e4052;
  }
  
  .wrapper {
    width: 100%;
    min-height: 100px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);

  }

  .navbar__logo {
  }
  .navbar__logo_img {
    width: 40px;
  }
  .navbar__menu {
    display: flex;
    list-style: none;
    justify-content: space-between;
    width: 10em;
  }
  .album_wrapper {
  }
  .photo_wrapper {
  }

  .my {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
    cursor: pointer;
  }

  .navbar__logo_img {
    width: 7rem;
  }

`;

const HeaderProfile = styled.div`
  font-size: 2em;
  color: #FF7676;
`;

export default Header;
