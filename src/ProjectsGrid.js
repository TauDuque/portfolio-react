import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import {
  sheldonfinal,
  wire3,
  glasses2,
  cocktails,
  menu,
  cart,
  infinityscroll,
  player,
  bookeeper,
  countdown,
} from "./assets";

const responsive = {
  0: { items: 1 },
  568: { items: 1 },
  1024: { items: 2 },
};

const ProjectsGrid = () => {
  /*   const [activeIndex, setActiveIndex] = useState(0);
  console.log(activeIndex);
  const slideHandlerIncreaser = () => {
    setActiveIndex(activeIndex + 1);
    if (activeIndex >= 6) {
      setActiveIndex(0);
    }
  };

  const slideHandlerDecreaser = () => {
    setActiveIndex(activeIndex - 1);
    if (activeIndex <= 0) {
      setActiveIndex(6);
    }
  };

  const slidePrev = () => setActiveIndex(activeIndex - 1);
  const slideNext = () => setActiveIndex(activeIndex + 1);
  const syncActiveIndex = ({ item }) => setActiveIndex(item);

  const handleDragStart = (e) => e.preventDefault(); */

  const items = [
    <a
      target="_blank"
      rel="noreferrer"
      href="https://funwithflags-br.netlify.app/"
    >
      <img src={sheldonfinal} alt="project gif" />
    </a>,
    <a
      target="_blank"
      rel="noreferrer"
      href="https://smart-glasses.herokuapp.com/"
    >
      <img src={glasses2} alt="project gif" o />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={cocktails} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={player} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={wire3} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={menu} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={infinityscroll} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={bookeeper} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={countdown} alt="project gif" />
    </a>,
    <a target="_blank" rel="noreferrer" href="https://menu-drinks.netlify.app/">
      <img src={cart} alt="project gif" />
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
            className="cta-btn cta-btn--hero"
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
  height: 86vh;
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
