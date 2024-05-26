import { Card, Form } from "antd";
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