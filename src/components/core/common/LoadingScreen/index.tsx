"use client";

import { Flex, Spin } from "antd";

import Typography from "../Typography";

import themeColors from "@/style/themes/default/colors";

import * as S from "./style";
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";

function LoadingScreen() {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "layout");

  return (
    <S.wrapper>
      <Flex vertical gap={20} align="center">
        <span className="loader" />
        <Spin size="large"></Spin>
        <Typography.Title level={3} $color={themeColors?.primary}>
          {t("account-verifying")}
        </Typography.Title>
      </Flex>
    </S.wrapper>
  );
}

export default LoadingScreen;
