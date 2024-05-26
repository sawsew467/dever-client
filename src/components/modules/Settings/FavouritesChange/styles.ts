import { Card, Form, Tag } from "antd";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
  padding-top: 16px;
`;

export const CustomCard = styled(Card)`
  border-radius: 12px !important;
  .ant-card-body {
    padding: 16px !important;
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const FormItemNotMB = styled(Form.Item)`
  margin-bottom: 0 !important;
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
    
    padding: 8px !important;
    margin-top: 8px !important;
    border-radius: 12px !important;
     
    display: flex !important;
    justify-content: center !important;
    align-items: center !important;
    gap: 10px !important;
`; 