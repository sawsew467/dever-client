import { Avatar, Card, Image } from "antd";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
    padding-top: 16px;

  @media ${(props) => props.theme.breakpoints.lgMax} {
    padding-top: 16px !important;
  }
`;

export const CustomCard = styled(Card)`
  border-radius: 12px !important;
  .ant-card-body {
    padding: 16px !important;
  }
`;

export const MainContentWrapper = styled.div`
  margin-top: 10px;
  display: flex;
  gap: 10px;
  flex-direction: column;

  @media ${(props) => props.theme.breakpoints.lgMax} {
    margin-top: 0px;
  }
`;

export const TextRender = styled.div`
  p {
    font-size: 16px;
  }
`;

export const TextWrapper = styled.div`
    width: 100%;
    height: 80px;
    
    background: #fff;
    
    border-radius: 16px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    padding: 16px;

    white-space: nowrap;

    box-shadow: ${(props) => props.theme.shadow.normalShadow};
`;
