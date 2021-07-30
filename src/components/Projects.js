import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Contact from "./Contact";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { TiArrowUpThick } from "react-icons/ti";
import { useGlobalContext } from "../context";
import { getUniqueValues } from "../utils/helper";

const Projects = () => {
  const [showArrow, setShowArrow] = useState("hideComp");
  const { projects, filterProjects, filtered_projects } = useGlobalContext();
  const [projectCat, setProjectCat] = useState("Todos");

  window.onscroll = function () {
    scrollFunction();
  };

  useEffect(() => {
    filterProjects(projectCat);
  }, [projectCat]);

  const cats = getUniqueValues(projects, "category");

  function scrollFunction() {
    var docHeight =
      document.height !== undefined
        ? document.height
        : document.body.offsetHeight;
    var finalH = docHeight - 1000;
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
      document.body.scrollTop > finalH ||
      document.documentElement.scrollTop > finalH
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
            <ul>
              {cats.map((cat, index) => {
                return (
                  <li
                    key={index}
                    className={
                      cat === projectCat
                        ? "project-select active"
                        : "project-select"
                    }
                    onClick={() => setProjectCat(cat)}
                  >
                    {cat}
                  </li>
                );
              })}
            </ul>

            {filtered_projects.map((project, index) => {
              return (
                <div key={index} className="row">
                  <div className="col-lg-4 col-sm-12">
                    <div className="projects-text" data-aos="zoom-in-right">
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
                          <img
                            src={project.gif}
                            alt="project"
                            className="grow"
                          />
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
            <button className={showArrow} onClick={() => topFunction()}>
              <TiArrowUpThick className="grow-bigger" />
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
  ul {
    display: flex;
    gap: 50px;
    font-size: 25px;
    justify-content: flex-end;
    list-style: none;
    margin-bottom: 30px;
  }
  .project-select {
    cursor: pointer;
  }
  .project-select:hover {
    color: var(--secondary-color);
    transform: scale(1.3);
  }
  .active {
    color: var(--primary-color);
    font-weight: bold;
  }
  h2 {
    margin-bottom: 10px;
  }
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

  .projects-image img:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.65), 0 3px 6px rgba(0, 0, 0, 0.23);
  }

  .thumbnail {
    border: none;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.65), 0 3px 6px rgba(0, 0, 0, 0.23);
    transition: all 0.2s ease-out;
    transition: 0.5s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.5s box-shadow,
      0.5s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
  }
`;

export default Projects;
