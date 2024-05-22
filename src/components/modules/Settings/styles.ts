import { Content } from "antd/es/layout/layout";
import styled from "styled-components";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding-bottom: 16px;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
`;

export const CustomContent = styled(Content)`
  background: white;
  border-radius: 16px;
  padding: 20px;

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
`;

export const LGalleryCol = styled.div`
  -ms-flex: 30%;
  flex: 30%;
  max-width: 30%;
  padding: 0 0px;
`;

export const RGalleryCol = styled.div`
  -ms-flex: 70%;
  flex: 70%;
  max-width: 70%;
  padding: 0 16px;
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
