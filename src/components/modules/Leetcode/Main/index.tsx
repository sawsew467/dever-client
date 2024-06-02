"use client";

import { useParams } from "next/navigation";

import Typography from "@/components/core/common/Typography";

import { useTranslation } from "@/app/i18n/client";
import { useGetLeaderboardQuery } from "@/store/queries/leetcode";

import * as S from "./styles";
import { Col, Row } from "antd";
import Card from "../Card";

function LeetcodeModule() {
  const params = useParams();

  const { t } = useTranslation(params.locale as string, "leetcode");

  const { result } = useGetLeaderboardQuery(undefined, {
    selectFromResult: (data) => {
      return {
        result: data?.data?.data,
      };
    },
  });

  console.log(result);

  return (
    <S.PageWrapper>
      <S.Head>
        <S.HeadTitle>
          <Typography.Title level={3} style={{ fontWeight: 700 }}>
            {t("heading")}
          </Typography.Title>
        </S.HeadTitle>
      </S.Head>
      <S.TopWrapper>
        <Card top={2} data={result?.[1]} />
        <Card isTop1 top={1} data={result?.[0]} />
        <Card top={3} data={result?.[2]} />
      </S.TopWrapper>
      <Row gutter={[16, 16]}>
        {result?.map((item: any) => (
          <Col span={24} key={item?._id}>
            <S.RankCard>fwef</S.RankCard>
          </Col>
        ))}
      </Row>
    </S.PageWrapper>
  );
}

export default LeetcodeModule;
