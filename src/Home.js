import React from "react";
import profile from "./assets/tau2.jpeg";
import styled from "styled-components";
import { FaLinkedin, FaGoogle, FaGithub } from "react-icons/fa";

const Home = () => {
  return (
    <Wrapper>
      <section className="home">
        <div className="container">
          <div className="row home-wrapper">
            <div className="col-md-3 col-sm-12" style={{ marginRight: "30px" }}>
              <div className="wrapper-img">
                <img
                  className="img-fluid "
                  height="auto"
                  width="300px"
                  src={profile}
                  alt="me"
                />
              </div>
              <div className="personal-content">
                <h2>Tauan Ribeiro</h2>
                <h4>São Paulo/SP</h4>
                <div className="main">
                  <div className="btn-wrapper">
                    <a href="mailto:duque.tauribeiro@gmail.com">
                      <div className="icon google">
                        <div className="tooltip">Google</div>
                        <FaGoogle />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://github.com/TauDuque"
                    >
                      <div className="icon github">
                        <div className="tooltip">Github</div>
                        <FaGithub />
                      </div>
                    </a>
                    <a
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.linkedin.com/in/tau-ribeiro/"
                    >
                      <div className="icon linkedin">
                        <div className="tooltip">LinkedIn</div>
                        <FaLinkedin />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-8 col-sm-12 ">
              <div className="row">
                <div className="col-md-12 col-sm-12 home-wrapper home-content">
                  <h4
                    style={{
                      fontSize: "var(--mid-font-size)",
                      marginBottom: "20px",
                      fontWeight: 600,
                    }}
                  >
                    Resumo
                  </h4>
                  <p className="home-wrapper">
                    Sou Tauan Ribeiro, Desenvolvedor Front-End Junior. Utilizo a
                    linguagem JavaScript e tenho muita familiaridade com
                    ReactJs. Atualmente estou aprimorando a utilização de
                    bibliotecas como Bootstrap, Material-UI, Styled-Components e
                    também dando meus primeiros passos em aplicações Serverless.
                    Além disso, estou participando do Bootcamp do Banco
                    Santander, com foco em Java, Spring Boot e Angular.
                  </p>
                </div>
                <div className="row">
                  <div className="col-md-6 col-sm-12">
                    <h4
                      style={{
                        fontSize: "var(--mid-font-size)",
                        marginBottom: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Skills
                    </h4>
                    <div className="skills-column">
                      <h4>JavaScript| ReactJs | HTML5 | CSS3</h4>
                      <h4> Bootstrap | Material-ui | jQuery </h4>
                      <h4>Axios | React Router | Styled-Components</h4>
                      <h4>NodeJs | DynamoDB | Context API</h4>
                      <h4>Express | AWS Cognito | AWS Lambda </h4>
                      <h4>Git | GitHub | PostGreSQL </h4>
                      <h4> Wordpress | Serverless Functions</h4>
                    </div>
                  </div>
                  <div className="col-md-6 col-sm-12 ">
                    <h4
                      style={{
                        fontSize: "var(--mid-font-size)",
                        marginBottom: "20px",
                        fontWeight: 600,
                      }}
                    >
                      Aprendizagem
                    </h4>
                    <ul>
                      <li>
                        <h4>The Complete Web Developer 2020</h4>
                        <span>Zero to Mastery / Udemy</span>
                      </li>
                      <li>
                        <h4>React Tutorial and Projects Course</h4>
                        <span>Coding Addict / Udemy</span>
                      </li>
                      <li>
                        <h4>Fundamentos de JavaScript Funcional</h4>
                        <span>Cod3r</span>
                      </li>
                      <li>
                        <h4>Introdução a Prática de Computação em Nuvem AWS</h4>
                        <span>Digital Inovation One</span>
                      </li>
                      <li>
                        <h4>20 JavaScripts Projects</h4>
                        <span>Zero to Mastery / Udemy</span>
                      </li>
                      <li>
                        <h4>Full Stack Bootcamp Banco Santander</h4>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 0;
  .home {
    background-color: var(--primary-color);
    background-image: linear-gradient(
      135deg,
      var(--primary-color) 0%,
      var(--secondary-color) 100%
    );
    color: var(--white-color);
    height: 105vh;
    border-top: 0px;
    -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    padding-bottom: 10%;
    padding-top: 20px;
  }
  .home-content {
    margin-top: 2rem;
  }
  500 .home-wrapper {
    padding-bottom: 2rem;
  }
  ul {
    line-height: 18px;
  }
  ul li {
    margin-top: 5px;
  }
  ul span {
    font-weight: 700;
  }
  .skills-column h4 {
    line-height: 30px;
    font-weight: 500;
  }
  h2 {
    font-weight: 700;
    font-size: var(--mid-font-size);
  }
  h4 {
    font-size: var(--default-font-size);
    font-weight: 500;
  }
  p {
    font-size: var(--default-font-size);
    font-weight: 500;
    margin-bottom: 3rem;
  }
  span {
    margin-top: 10px;
    font-size: var(--thin-font-size);
    font-weight: 500;
  }
  img {
    border-radius: 50%;
    height: 190px;
    width: 175px;
    margin-top: 45px;
    object-fit: cover;
    object-position: top;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.28);
  }
  .personal-content {
    margin-top: 15px;
  }
  a {
    text-decoration: none;
    color: var(--white-color);
  }
  .main {
    margin-top: 3.5rem;
  }
`;
export default Home;
