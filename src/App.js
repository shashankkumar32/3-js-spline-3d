import Spline from "@splinetool/react-spline";
import styled from "styled-components";

import Logo from "./images/logo.svg";
import IconTwitter from "./images/icon-twitter.svg";
import IconYouTube from "./images/icon-youtube.svg";
import IconLaptop from "./images/icon-laptop.svg";
import B1 from "./background1";
import B2 from "./background2";
import B3 from "./background3";
import { Link, BrowserRouter, Routes, Route, Router } from "react-router-dom";

export default function App() {
  return (
    <Wrapper>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<B2 />} />
          <Route exact path="/b2" element={<B3 />} />
          <Route exact path="/b3" element={<B1 />} />
        </Routes>
      </BrowserRouter>

      <Content>
        <Menu>
          <li>
            <a href="/">Model-1</a>
          </li>
          <li>
            <a href="/b2">Model-2</a>
          </li>
          <li>
            <a href="/b3">Model3</a>
          </li>
        </Menu>
        <h1> </h1>
        <p></p>
        <button>
          <img src={IconLaptop} alt="" /> Use-Desktop-view
        </button>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  font-family: "Spline Sans", sans-serif;
  color: white;
  font-size: 16px;
  margin: 0 auto;
  position: relative;
  height: 100%;
  overflow-x: hidden;

  .spline {
    position: absolute;
    margin: 0;
    top: 0;
    right: 0;
    width: 1200px;
    height: 1000px;

    /* @media (max-width: 1024px) {
      transform: scale(0.8) translateX(200px);
      transform-origin: top;
    }
    @media (max-width: 800px) {
      transform: scale(0.7) translateX(600px);
    } */
    /* @media (max-width: 600px) {
      transform: scale(0.5) translateX(-100px);
      right: auto;
      left: 50%;
      margin-left: -600px;
    }
    @media (max-width: 375px) {
      transform: scale(0.45) translateX(-50px);
    } */
  }
`;

const Content = styled.div`
  position: absolute;
  top: 30px;
  width: 100%;
  padding-bottom: 100px;
  pointer-events: none;

  display: flex;
  flex-direction: column;
  gap: 80px;

  @media (max-width: 1024px) {
    gap: 40px;
  }

  h1 {
    font-weight: bold;
    font-family: "Spline Sans Mono", monospace;
    font-size: 70px;
    margin: 0;
    max-width: 500px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);

    @media (max-width: 1024px) {
      font-size: 60px;
      max-width: 400px;
    }
    @media (max-width: 800px) {
      font-size: 40px;
      max-width: 300px;
    }
    @media (max-width: 600px) {
      padding-top: 250px;
    }
  }

  p {
    font-weight: normal;
    line-height: 150%;
    max-width: 380px;
    pointer-events: auto;
    text-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  }

  button {
    background: rgba(0, 0, 0, 0.2);
    border: 0px;
    font-size: 16px;
    padding: 12px 30px;
    border-radius: 14px;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.1);
    max-width: 280px;
    backdrop-filter: blur(20px);
    font-weight: 600;
    box-shadow: 0 20px 20px rgba(0, 0, 0, 0.2);
    transition: 1s;
    cursor: pointer;
    pointer-events: auto;

    display: flex;
    gap: 12px;
    justify-content: center;
    align-items: center;

    :hover {
      border: 1px solid rgba(255, 255, 255, 0.8);
      transform: translateY(-3px);
    }
  }

  h1,
  p,
  button {
    margin: 0 30px 0 100px;

    @media (max-width: 1024px) {
      margin: 0 30px;
    }
  }
`;

const Menu = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin: 0 30px 0 100px;
  padding: 0;
  pointer-events: auto;

  @media (max-width: 1024px) {
    margin: 0 30px;
  }

  li {
    list-style: none;
    margin: 0;

    a {
      text-decoration: none;
      color: white;
      padding: 8px 20px;
      border-radius: 14px;
      border: 1px solid rgba(255, 255, 255, 0);
      transition: 1s;

      :hover {
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }

  button {
    margin: 0;
    width: auto;
    background: rgba(31, 66, 250, 0.2);
    border: 1px solid rgba(255, 255, 255, 0.4);
  }

  @media (max-width: 800px) {
    justify-content: space-between;
    li:nth-child(2),
    li:nth-child(3),
    li:nth-child(4),
    li:nth-child(5) {
      display: none;
    }
  }
`;

const Social = styled.div`
  position: absolute;
  top: 150px;
  left: 30px;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  @media (max-width: 1024px) {
    display: none;
  }

  div {
    width: 1px;
    height: 500px;
    background: linear-gradient(
      180deg,
      #08b6f9 0%,
      #6c56ef 33.57%,
      #1306dd 65.86%,
      #aa0eb2 100%
    );
  }
`;
