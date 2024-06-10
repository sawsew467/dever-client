"use client";

import { useParams } from "next/navigation";
import { Avatar, Col, Flex, Grid, Row } from "antd";

import Typography from "@/components/core/common/Typography";
import Card from "../Card";

import { useTranslation } from "@/app/i18n/client";
import { useGetLeaderboardQuery } from "@/store/queries/leetcode";

import * as S from "./styles";

function LeetcodeModule() {
  const params = useParams();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const { t } = useTranslation(params.locale as string, "leetcode");

  const { result } = useGetLeaderboardQuery(undefined, {
    selectFromResult: (data) => {
      return {
        result: data?.data?.data,
      };
    },
  });

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
        {result?.map((item: any, index: number) => (
          <Col span={24} key={item?._id}>
            <S.RankCard>
              <Flex
                align="center"
                style={{ width: "100%" }}
                justify="space-between"
              >
                <Flex gap={screens.xs ? 20 : 40} align="center">
                  <Typography.Text>{index + 1}</Typography.Text>
                  <Flex align="center" gap={screens.xs ? 20 : 40}>
                    <Avatar size={40} src={item?.userId?.avatar} />
                    <Typography.Text>
                      {`${item?.userId?.firstname} ${item?.userId?.lastname}`}
                    </Typography.Text>
                  </Flex>
                </Flex>

                <Flex gap={screens.xs ? 20 : 40} align="center">
                  <Flex align="center" gap={screens.xs ? 20 : 40}>
                    <Typography.Text>{item?.leetcodeUsername!}</Typography.Text>
                    <Typography.Text>
                      {item?.acSubmissionList?.length * 10} Pts
                    </Typography.Text>
                  </Flex>
                </Flex>
              </Flex>
            </S.RankCard>
          </Col>
        ))}
      </Row>
    </S.PageWrapper>
  );
}

export default LeetcodeModule;
