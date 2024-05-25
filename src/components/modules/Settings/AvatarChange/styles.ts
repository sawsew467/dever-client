import { Card } from "antd";
import styled from "styled-components";

export const ContentWrapper = styled.div`

`;


export const AvatarEditorWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.smMax} {
    flex-direction: column;
    gap: 16px;
  }

  @media ${(props) => props.theme.breakpoints.lgMax} {
    flex-direction: column;
    align-items: start;
    gap: 16px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const CustomCard = styled(Card)`
border-radius: 12px !important;
  .ant-card-body {
    padding: 16px !important;
  }
`;