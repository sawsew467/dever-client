import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 16px;

`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CustomContent = styled(Content)`
  background: white;
  border-radius: 16px;

  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const Gallery = styled.div`
  width: 100%;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  padding: 0 0px;
  overflow: auto;
  overflow-x: hidden;

  @media ${(props) => props.theme.breakpoints.smMax} {
    gap: 16px;
  }
`;

export const LGalleryCol = styled.div`
  -ms-flex: 40%;
  flex: 40%;
  max-width: 40%;
  padding: 0 0px;

  @media ${(props) => props.theme.breakpoints.smMax} {
    -ms-flex: 100%;
  flex: 100%;
  max-width: 100%;
  }
`;

export const RGalleryCol = styled.div`
  -ms-flex: 60%;
  flex: 60%;
  max-width: 60%;
  padding-left: 16px;
  @media ${(props) => props.theme.breakpoints.smMax} {
    -ms-flex: 100%;
  flex: 100%;
  max-width: 100%;
  padding: 0px;
  }
`;

export const AvatarEditorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
