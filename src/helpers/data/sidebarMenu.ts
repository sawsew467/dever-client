import React from "react";
import { MenuProps } from "antd";
import {
  TeamOutlined,
  UserOutlined,
  BookOutlined,
  IdcardOutlined,
  LinkOutlined,
} from "@ant-design/icons";

export const sidebarMenu: MenuProps["items"] = [
  {
    key: "all-member",
    icon: React.createElement(UserOutlined),
    label: "allMember",
  },
  {
    key: "leetcode",
    icon: React.createElement(BookOutlined),
    label: "leetcode",
  },
];
