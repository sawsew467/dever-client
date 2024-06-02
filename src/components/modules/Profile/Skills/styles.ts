import { Avatar, Card, Image, Tag } from "antd";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
  padding-top: 16px;
  @media ${(props) => props.theme.breakpoints.lgMax} {
    padding-top: 0px;
  }
`;

export const CustomCard = styled(Card)`
  border-radius: 12px !important;
  .ant-card-body {
    padding: 16px !important;
  }
`;

export const MainContentWrapper = styled.div`
  display: flex;
  gap: 10px;
  flex-direction: column;
`;


export const TagsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;

export const TagsList = styled.div`

`;

export const TagCustom = styled(Tag)`
    width: fit-content;

    font-size: 16px !important;
    
    padding:  4px 10px !important;
    margin-top: 8px !important;
    border-radius: 12px !important;
     
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 10px !important;
`; 