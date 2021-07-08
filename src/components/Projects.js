import React, { useState } from "react";
import styled from "styled-components";
import { data, dataJs } from "../projectsData";
import Contact from "./Contact";
import { TiArrowUpThick } from "react-icons/ti";

const Projects = () => {
  const [showArrow, setShowArrow] = useState("hideComp");
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop < 20 ||
      document.documentElement.scrollTop < 20
    ) {
      setShowArrow("hideComp");
    }
    if (
      document.body.scrollTop > 700 ||
      document.documentElement.scrollTop > 700
    ) {
      setShowArrow("arrowTop");
    }
    if (
      document.body.scrollTop > 5630 ||
      document.documentElement.scrollTop > 5630
    ) {
      setShowArrow("arrowBottom");
    }
  }

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <>
      <Wrapper>
        <div className="container">
          <div className="project-wrapper">
            <h2 className="section-title">Projetos</h2>
            <h5 className="section-title">React</h5>
            {data.map((project, index) => {
              return (
                <div key={index} className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="projects-text">
                      <h3 className="projects-title">{project.title}</h3>
                      <div>
                        <p className="mb-4">{project.description}</p>
                        <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                        <p className="mb-4">{project.stack}</p>
                      </div>
                      <a
                        target="_blank"
                        className="cta-btn cta-btn--hero"
                        href={project.url}
                        rel="noreferrer"
                      >
                        Live demo
                      </a>
                      <a
                        target="_blank"
                        className="cta-btn text-color-main"
                        href={project.gitRepo}
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="projects-image">
                      <a href={project.url} rel="noreferrer" target="_blank">
                        <div data-tilt className="thumbnail rounded">
                          <img src={project.gif} alt="project" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <h5 className="section-title">Vanilla JavaScript</h5>
            {dataJs.map((project, index) => {
              return (
                <div key={index} className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="projects-text">
                      <h3 className="projects-title">{project.title}</h3>
                      <div>
                        <p className="mb-4">{project.description}</p>
                        <p style={{ fontWeight: "bold" }}>Tech Stack</p>
                        <p className="mb-4">{project.stack}</p>
                      </div>
                      <a
                        target="_blank"
                        className="cta-btn cta-btn--hero"
                        href={project.url}
                        rel="noreferrer"
                      >
                        Live demo
                      </a>
                      <a
                        target="_blank"
                        className="cta-btn text-color-main"
                        href={project.gitRepo}
                        rel="noreferrer"
                      >
                        GitHub
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-8 col-sm-12">
                    <div className="projects-image ">
                      <a href={project.url} rel="noreferrer" target="_blank">
                        <div data-tilt className="thumbnail rounded  ">
                          <img src={project.gif} alt="project" />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <button className={showArrow} onClick={() => topFunction()}>
              <TiArrowUpThick />
            </button>
            <span className="mt-2">
              <a
                target="_blank"
                rel="noreferrer"
                className="effect box-fill-skew"
                href="https://github.com/TauDuque"
              >
                Veja meu GitHub!
              </a>
            </span>
          </div>
        </div>
      </Wrapper>
      <Contact />
    </>
  );
};

const Wrapper = styled.section`
  background-color: var(--white-color);
  color: var(--dark-blue-text);
  margin-top: -15rem;
  padding-top: 15rem;

  .project-wrapper {
    margin-bottom: 15rem;
  }
  .row {
    margin-bottom: 8rem;
  }
  .project-wrapper h2,
  h3 {
    color: var(--primary-color);
  }

  .projects-text {
    text-align: left;
  }
  .arrowTop {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background: transparent;
    color: var(--primary-color);
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 50px;
  }
  .arrowBottom {
    display: block;
    position: fixed;
    bottom: 20px;
    right: 30px;
    z-index: 99;
    border: none;
    outline: none;
    background: transparent;
    color: var(--white-color);
    cursor: pointer;
    padding: 15px;
    border-radius: 10px;
    font-size: 50px;
  }

  .hideComp {
    display: none;
  }
  .projects-title {
    font-weight: bold;
    margin-bottom: 1.8rem;
    font-size: var(--mid-font-size);
  }

  .projects p > a {
    color: var(--secondary-color);
  }

  .projects-image {
    width: 90%;
    margin: 0 auto;
  }

  .projects-image img {
    height: 425px;
    width: 100%;
  }

  .thumbnail {
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s ease-out;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.5s box-shadow,
      0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
`;

export default Projects;
