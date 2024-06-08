import React from "react";
import { MenuProps } from "antd";
import {
  UserOutlined,
  BookOutlined,
  RadarChartOutlined,
  HistoryOutlined,
  HeartOutlined,
  PayCircleOutlined,
} from "@ant-design/icons";

export const sidebarMenu: MenuProps["items"] = [
  {
    key: "members",
    icon: React.createElement(UserOutlined),
    label: "allMember",
  },
  {
    key: "leetcode",
    icon: React.createElement(BookOutlined),
    label: "leetcode",
  },
  {
    key: "activities",
    icon: React.createElement(RadarChartOutlined),
    label: "activities",
  },
  {
    key: "foundation",
    icon: React.createElement(PayCircleOutlined),
    label: "foundation",
  },
  {
    key: "love",
    icon: React.createElement(HeartOutlined),
    label: "love",
  },
  {
    key: "history",
    icon: React.createElement(HistoryOutlined),
    label: "history",
  },
];
