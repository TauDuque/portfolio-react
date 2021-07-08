import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Wrapper>
      <ul className="navbar">
        <Link to="/">
          <li>Página Inicial</li>
        </Link>
        <Link to="/about">
          <li>Sobre</li>
        </Link>
        <Link to="projects">
          <li>Projetos</li>
        </Link>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .navbar {
    display: flex;
    height: 40px;
    justify-content: flex-end;
    align-items: flex-end;
    gap: 35px;
    margin-right: 20px;
  }

  .navbar a,
  li {
    text-decoration: none;
    list-style-type: none;
    color: var(--secondary-color);
    font-size: var(--default-font-size);
    font-weight: 700;
  }
`;

export default Navbar;
