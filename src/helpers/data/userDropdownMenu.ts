import React from "react";
import { MenuProps } from "antd";
import {
  SettingOutlined,
  UserOutlined,
  LogoutOutlined,
} from "@ant-design/icons";

export const userDropdownMenu: MenuProps["items"] = [
  {
    key: "profile",
    icon: React.createElement(UserOutlined),
    label: "profile",
  },
  {
    key: "settings",
    icon: React.createElement(SettingOutlined),
    label: "settings",
  },
  {
    type: "divider",
  },
  {
    key: "logout",
    icon: React.createElement(LogoutOutlined),
    label: "logout",
  },
];
