import React, { useState, useEffect } from "react";
import Contact from "./Contact";
import "react-alice-carousel/lib/alice-carousel.css";
import { TiArrowUpThick } from "react-icons/ti";
import { useGlobalContext } from "../context";
import { getUniqueValues } from "../utils/helper";
import { Wrapper } from "./ProjectsStyle";

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

export default Projects;
