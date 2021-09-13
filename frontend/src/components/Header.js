import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoPersonCircleOutline } from "react-icons/io5";
import mainLogo from '../assets/icons/mainLogo.svg';

function Header() {

  return (
    <>
      <HeaderBlock>
        <nav>
          <div className="top">
            <div className="navbar__left-side">
              <div className="navbar__logo">
                <Link to ="/">
                  <img className="navbar__logo_img" src={mainLogo} alt="로고" />
                </Link>
              </div>
              <div className="navbar__menu">
                <div className="album_wrapper">
                  <Link className="album" to="/album">Album</Link>
                </div>
                <div className="photo_wrapper">
                  <Link
                    className="photo"
                    to={{ pathname: "/photo", state: { id: 0 } }}>
                      Photo
                  </Link>
                </div>
              </div>
            </div>
            <div className="navbar__right-side">
              <div className="my">
                <Link to="/my">
                  <HeaderProfile><IoPersonCircleOutline /></HeaderProfile>
                </Link>
              </div>
            </div>
          </div>
        </nav>
      </HeaderBlock>
    </>
  )
}

const HeaderBlock = styled.div`
  a {
    text-decoration: none;
    color: #2e4052;
  }
  nav {
    margin: 0;
    padding: 0.13rem 10.6em;
    box-shadow: 0 1px 15px rgba(0, 0, 0, 0.1);
    align-items: center;
  }

  .top {
    display: flex;
    justify-content: space-between;
    line-height: 100%;
  }

  .navbar__left-side {
    display: flex;
    padding: 10px 0;
    align-items: center;
    justify-content: space-between;
    width: 22em;
  }
  
  .navbar__logo {
  }
  .navbar__logo_img {
    width: 40px;
  }
  .navbar__menu {
    display: flex;
    justify-content: space-between;
    width: 9em;
  }
  .album_wrapper {
  }
  .photo_wrapper {
  }
  .photo {
  }
  .album {
  }
  
  input {
    box-sizing: border-box;
    width: 400px;
    height: 45px;
    padding: 20px 0 20px 20px;
    background: #f1f3f5;
    outline: none;
    border: none;
    border-radius: 2em;
  }
  input::placeholder {
    font-size: 0.95em;
  }
  
  .navbar__right-side {
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 0;
    margin: 20px 0;
  }
  .notice {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
  }
  .message {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
  }

  .my {
    margin-top: 1px;
    padding: 10px 10px 7px 11px;
    cursor: pointer;
  }

  .bottom {
    display: flex;
    margin-top: 10px;
    margin-right: 500px;
    justify-content: space-between;
    width: 30rem;

    font-weight: 500;
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
