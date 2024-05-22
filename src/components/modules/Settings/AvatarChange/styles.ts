import styled from "styled-components";

export const LGalleryCol = styled.div`
  -ms-flex: 35%;
  flex: 35%;
  max-width: 35%;
  padding-right: 0px;
  height: fit-content;
`;

export const RGalleryCol = styled.div`
  -ms-flex: 65%;
  flex: 65%;
  max-width: 65%;
  padding-left: 16px;
  height: fit-content;
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