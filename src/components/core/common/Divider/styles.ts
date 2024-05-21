import styled from "styled-components";
import { Divider } from "antd";
import { DividerCommonProps } from ".";

export const DividerCommon = styled(Divider)<DividerCommonProps>`
  margin: ${(props) => props?.$margin || 0}px 0 !important;
`;
