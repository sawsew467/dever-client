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

  @keyframes fill {
    0% {
      box-shadow: 0 0 0 2px inset;
    }
    100% {
      box-shadow: 0 0 0 10px inset;
    }
  }
`;
