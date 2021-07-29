import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const ProjectsGrid = () => {
  const items = [
    <a
      target="_blank"
      rel="noreferrer"
      href="https://funwithflags-br.netlify.app/"
    >
      <img
        src="https://s6.gifyu.com/images/sheldonfinal.gif"
        alt="project gif"
      />
    </a>,
    <a
      target="_blank"
      rel="noreferrer"
      href="https://smart-glasses.herokuapp.com/"
    >
      <img
        src="https://s6.gifyu.com/images/glassesfinal.gif"
        alt="project gif"
        o
      />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src="https://s6.gifyu.com/images/cocktails.gif" alt="project gif" />
    </a>,
    <a
      target="_blank"
      rel="noreferrer"
      href="https://the-wire-br.netlify.app//"
    >
      <img src="https://s6.gifyu.com/images/wire3.gif" alt="project gif" />
    </a>,
    <a
      target="_blank"
      rel="noreferrer"
      href="https://the-parking-lot.netlify.app/"
    >
      <img src="https://s6.gifyu.com/images/pk-lot.gif" alt="project gif" />
    </a>,
    <a
      target="_blank"
      rel="noreferrer"
      href="https://the-infinity-scroll.netlify.app/"
    >
      <img
        src="https://s6.gifyu.com/images/scrollae492565aa71623d.gif"
        alt="project gif"
      />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://movies-omdb.netlify.app/">
      <img src="https://s6.gifyu.com/images/movies-db.gif" alt="project gif" />
    </a>,
  ];

  return (
    <Wrapper>
      <AliceCarousel
        items={items}
        disableDotsControls
        animationDuration={1550}
        autoPlayInterval={1800}
        autoPlay
        infinite
        disableButtonsControls
        responsive={responsive}
      />
      <span className="d-flex mt-3" style={{ justifyContent: "center" }}>
        <Link to="projects">
          <button
            className="effect box-fill-skew"
            href="https://github.com/TauDuque"
          >
            Veja meus projetos!
          </button>
        </Link>
      </span>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  height: 92vh;
  margin-top: 35px;
  .main-grid {
    width: 100vw;
    height: 85vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .row-img {
    display: flex;
  }
  ul {
    margin-bottom: 8px;
  }
  .column {
    flex: 33.33%;
    padding: 5px;
    margin: 10px 20px 15px 15px;
  }
  img {
    height: 355px;
    width: 95%;
    margin-top: 15px;
    vertical-align: middle;
    box-shadow: 7px 2px 10px rgba(0, 0, 0, 0.22);
  }
  button {
    margin-top: 2rem;
    cursor: pointer;
  }
`;

export default ProjectsGrid;
