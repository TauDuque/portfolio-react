import React from "react";
import profile from "../assets/tau2.jpeg";
import styled from "styled-components";

const About = () => {
  return (
    <Wrapper className="about">
      <div className="container">
        <h2 className="section-title">Sobre</h2>
        <div className="row about-wrapper">
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper-img">
              <img
                className="img-fluid rounded shadow-lg"
                height="auto"
                width="300px"
                src={profile}
                alt="me"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-12">
            <div className="about-wrapper__info">
              <p className="about-wrapper__info-text">
                Sou formado em Letras pela Universidade de São Paulo e nos
                últimos anos minhas experiências profissionais são todas
                relacionas a minha formação. Entre freelas e estágios, trabalhei
                por cerca de dois anos numa empresa de tradução como revisor,
                logo em seguida comecei a trabalhar com revisão de textos e mais
                tarde fui professor de português e idiomas estrangeiros por
                quase três anos.
              </p>
              <p className="about-wrapper__info-text">
                Sempre tive muito interesse por tecnologia linguagens de
                programação relacionadas a Desenvolvimento Web e há um ano
                decidi seguir esse rumo e comecei a me aprofundar nos estudos
                das principais linguagens de Front-End. Depois de me
                familiarizar e aprofundar meus conhecimentos em HTML, CSS e
                Javascript, passei a me dedicar ao estudo de ReactJs, tanto pela
                grande atração que senti por essa tecnologia e todas as
                possibilidades que ela oferece, quanto pelo fato do React ser
                responsável pelo funcionamento de vários dos sites presentes no
                nosso dia a dia.
              </p>
              <span className="d-flex mt-3" style={{ float: "right" }}>
                <a
                  rel="noreferrer"
                  target="_blank"
                  className="cta-btn cta-btn--resume"
                  href="https://github.com/TauDuque"
                >
                  Veja meus projetos no GitHub
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-color: var(--primary-color);
  background-image: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  color: var(--white-color);
  height: 118vh;
  border-top: 0px;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
  padding-bottom: 10%;

  .about-wrapper {
    padding-bottom: 5rem;
  }

  .about-img img {
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
  }

  about-info {
    display: flex;
    height: 100%;
    justify-content: center;
    flex-direction: column;
  }

  about-text {
    text-align: left;
  }
`;

export default About;
