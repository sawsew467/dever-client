import styled from "styled-components";

export const Main = styled.div<{ $isTop1?: boolean }>`
  max-width: 33%;

  margin-top: ${(props) => (props.$isTop1 ? "0" : "40px")};

  position: relative;

  > img {
    position: absolute;
    z-index: 1;
    left: 50%;
    top: -6%;
    transform: translateX(-50%);
  }
`;

export const CardWraper = styled.div``;

export const Circle = styled.div``;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding-top: 28px;
`;

export const ImageWrapper = styled.div`
  position: relative;

  span {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 40%);

    background-color: ${(props) => props.theme.colors.primary};
    color: white;

    width: 64px;
    height: 64px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 24px;
    font-weight: 700;

    padding: 8px 16px;

    border-radius: 50%;

    @media ${(props) => props.theme.breakpoints.smMax} {
      font-size: 16px;
      width: 34px;
      height: 34px;
      bottom: 3%;
    }
    @media ${(props) => props.theme.breakpoints.mdMax} {
      font-size: 16px;
      width: 44px;
      height: 44px;
      bottom: 2%;
    }
  }

  img {
    object-fit: cover;

    max-width: 100%;
    height: 400px;

    border-radius: 20px;

    border: 4px solid ${(props) => props.theme.colors.primary};

    @media ${(props) => props.theme.breakpoints.lgMax} {
      height: 320px;
    }

    @media ${(props) => props.theme.breakpoints.mdMax} {
      height: 240px;
    }
  
    @media ${(props) => props.theme.breakpoints.smMax} {
      height: 180px;
      border: 2px solid ${(props) => props.theme.colors.primary};
    }
  }
`;
