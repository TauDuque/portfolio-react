import React from "react";
import styled from "styled-components";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  return (
    <Wrapper>
      <div className="container">
        <h2 className="contact-title">Contato</h2>
        <div className="btn-wrapper">
          <a target="_blank" href="https://github.com/TauDuque">
            <div className="icon github">
              <div style={{ padding: "5px 8px", fontSize: "14px" }}>
                <FaGithub />
              </div>
            </div>
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/tau-ribeiro/">
            <div className="icon linkedin">
              <div style={{ padding: "5px 8px", fontSize: "14px" }}>
                <FaLinkedin />
              </div>
            </div>
          </a>
        </div>
        <div className="contact-wrapper">
          <p className="contact-text">duque.tauribeiro@gmail.com</p>
          <a
            target="_blank"
            className="cta-btn cta-btn--resume"
            href="mailto:duque.tauribeiro@gmail.com"
          >
            Enviar e-mail
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  background-image: linear-gradient(
    135deg,
    var(--primary-color) 0%,
    var(--secondary-color) 100%
  );
  -webkit-clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(0 15vh, 100% 0, 100% 100%, 0 100%);
  padding: 15rem 0 10rem 0;
  margin-top: -15rem;
  margin-bottom: -1px;
  color: var(--white-color);
  height: 65vh;
  .contact-wrapper {
    margin-top: 3.2rem;
    padding: 0 2rem;
    backface-visibility: hidden;
  }
  .contact-title {
    margin: 0px;
    margin-bottom: 2.5rem;
    font-size: var(--big-font-size);
    font-weight: bold;
    text-transform: uppercase;
  }
  .contact-text {
    margin-bottom: 2.5rem;
  }

  .contact-text a {
    font-size: 2.4rem;
  }
`;

export default Contact;
