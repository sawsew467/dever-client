import { Card, DatePicker, Form, Select } from "antd";
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
export const DatePickerCustom = styled(DatePicker)`
    width: 100%;
    .ant-picker-input>input{
        font-size: 14px !important;
        line-height: 1.7 !important;
    }
`
export const SelectCustom = styled(Select)`
     .ant-select-selection-placeholder {
        font-size: 14px !important;
     }
     .ant-select-selection-item {
        font-size: 14px !important;
     }
`