import React from "react";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <h1 className="hero-title ">
          Olá, meu nome é <span className="text-color-main">Tauan Ribeiro</span>
          <br />
          Sou um Desenvolvedor Front-end.
        </h1>
        <p className="hero-cta ">
          <a className="cta-btn cta-btn--hero" href="#about">
            Mais informações
          </a>
        </p>
        <p className="hero-cta ">
          <a className="cta-btn cta-btn--hero" href="#projects">
            Projetos
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hero;
