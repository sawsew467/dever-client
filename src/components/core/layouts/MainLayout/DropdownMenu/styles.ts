import { Menu, Popover } from "antd";
import styled from "styled-components";

export const MenuCustom = styled(Menu)`
  border-inline-end: none !important;

  .ant-menu-item {
    padding: 0 8px !important;
  }
`;

export const PopoverCustom = styled(Popover)`
  cursor: pointer;
`;
