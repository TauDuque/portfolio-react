import styled from "styled-components";

export const Wrapper = styled.section`
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
