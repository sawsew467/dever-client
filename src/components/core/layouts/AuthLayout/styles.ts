import styled from "styled-components";

export const Wrapper = styled.main`
  width: 100vw;
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(prop) => prop?.theme?.colors?.backgroundPrimary};
  background-image: radial-gradient(
      ${(prop) => prop?.theme?.colors?.primary} 0.4px,
      transparent 0.4px
    ),
    radial-gradient(
      ${(prop) => prop?.theme?.colors?.primary} 0.4px,
      ${(prop) => prop?.theme?.colors?.backgroundPrimary} 0.4px
    );
  background-size: 16px 16px;
  background-position: 0 0, 8px 8px;
`;

export const BoxContainer = styled.div`
  max-width: 540px;
  width: 100%;

  margin: 16px;
  padding: 20px 40px;

  background-color: #fff;

  border-radius: 16px;
`;
