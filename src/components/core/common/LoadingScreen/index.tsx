"use client";

import { Flex } from "antd";

import Typography from "../Typography";

import themeColors from "@/style/themes/default/colors";

import * as S from "./style";

function LoadingScreen() {
  return (
    <S.wrapper>
      <Flex vertical gap={20} align="center">
        <span className="loader" />
        <Typography.Title level={3} $color={themeColors?.primary}>
          Đang xác thực tài khoản
        </Typography.Title>
      </Flex>
    </S.wrapper>
  );
}

export default LoadingScreen;
