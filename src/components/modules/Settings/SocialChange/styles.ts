import { Button, Card, Form, Select } from "antd";
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

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const SocialListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const PlusButtonCustom = styled(Button)`
  width: 45px !important;
  height: 45px !important;
  border-radius: 50px !important;
  padding: 0px !important;
`;

export const FormItemNotMB = styled(Form.Item)`
  margin-bottom: 0 !important;
`;

export const SelectCustom = styled(Select)`
  .ant-select-selection-placeholder {
    font-size: 14px !important;
  }
  .ant-select-selection-item {
    font-size: 14px !important;
  }
`;
