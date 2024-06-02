"use client";

import { Typography } from "antd";
import { useParams } from "next/navigation";

import { useTranslation } from "@/app/i18n/client";

import * as S from "./styles";

function DashboardModule() {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "dashboard");

  return (
    <S.PageWrapper>
      <S.Head>
        <Typography.Title level={2}>{t("title")}</Typography.Title>
      </S.Head>
    </S.PageWrapper>
  );
}

export default DashboardModule;
