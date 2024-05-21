import styled from "styled-components";
import { Button } from "antd";
import { ButtonCommonProps } from ".";

export const ButtonCommon = styled(Button)<ButtonCommonProps>`
  padding: 8px 16px !important;

  height: auto !important;
  width: ${(props) => props?.$width};
`;
