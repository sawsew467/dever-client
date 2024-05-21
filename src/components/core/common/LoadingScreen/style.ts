import styled from "styled-components";

export const wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;

  z-index: 9999;
  top: 0;
  left: 0;

  width: 100vw;
  height: 100vh;

  background-color: #fff;

  color: white;
  font-size: 30px;

  .loader {
    width: 32px;
    height: 32px;
    position: relative;
    border-radius: 50%;
    color: ${(props) => props?.theme?.colors?.primary};
    animation: fill 1s ease-in infinite alternate;
  }
  .loader::before,
  .loader::after {
    content: "";
    position: absolute;
    height: 100%;
    width: 100%;
    border-radius: 50%;
    left: 48px;
    top: 0;
    animation: fill 0.9s ease-in infinite alternate;
  }

  .loader::after {
    left: auto;
    right: 48px;
    animation-duration: 1.1s;
  }

  @keyframes fill {
    0% {
      box-shadow: 0 0 0 2px inset;
    }
    100% {
      box-shadow: 0 0 0 10px inset;
    }
  }
`;
