import { Card } from "antd";
import styled from "styled-components";

export const ContentWrapperDiv = styled.div`
  @media ${(props) => props.theme.breakpoints.lgMax} {
    padding-top: 16px;
  }
`;

export const HtmlRenderWrapper = styled.div`
  img {
    max-width: 100%;
    object-fit: cover;
  }
`;

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
export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const CustomCard = styled(Card)`
  border-radius: 12px !important;
  .ant-card-body {
    padding: 16px !important;
  }
`;
