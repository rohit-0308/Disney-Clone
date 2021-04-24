import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { auth, provider } from "../firebase";
import { useHistory } from "react-router-dom";
import {
  selectUserName,
  selectUserEmail,
  selectUserPhoto,
  setUserLoginDetails,
} from "../features/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  const handleAuth = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };

  return (
    <Nav>
      <Logo>
        <img src="/assets/images/logo.svg" alt="Disney+" />
      </Logo>
      {!userName ? (
        <LoginButton onClick={handleAuth}>Login</LoginButton>
      ) : (
        <>
          <NavMenu>
            <a href="/home">
              <img src="/assets/images/home-icon.svg" alt="home" />
              <span>HOME</span>
            </a>
            <a href="/search">
              <img src="/assets/images/search-icon.svg" alt="search" />
              <span>SEARCH</span>
            </a>
            <a href="/watchlist">
              <img src="/assets/images/watchlist-icon.svg" alt="watchlist" />
              <span>WATCHLIST</span>
            </a>
            <a href="/originals">
              <img src="/assets/images/original-icon.svg" alt="original" />
              <span>ORIGINALS</span>
            </a>
            <a href="/movies">
              <img src="/assets/images/movie-icon.svg" alt="movie" />
              <span>MOVIES</span>
            </a>
            <a href="/series">
              <img src="/assets/images/series-icon.svg" alt="series" />
              <span>SERIES</span>
            </a>
          </NavMenu>
          <UserImg src={userPhoto} alt={userName}></UserImg>
        </>
      )}
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 4px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0px;
  padding: 0px;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    text-decoration: none;

    img {
      height: 20px;
      min-width: 20px;
      width: 20;
      padding-right: 5px;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.5px;
      line-height: 1.08;
      padding: 2px 0px;
      white-space: nowrap;
      position: relative;

      &:before {
        background-color: rgb(249, 249, 249);
        border-radius: 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
        visibility: hidden;
        width: auto;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
      }
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

const LoginButton = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: #f9f9f9;
    color: #090b13;
    border-color: transparent;
  }
`;

const UserImg = styled.img`
  height: 75%;
  /* width: 100%; */
  border-radius: 50%;
`;

export default Header;
