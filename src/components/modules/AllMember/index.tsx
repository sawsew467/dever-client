"use client";

import React from "react";
import * as S from "./styles";
import MemberCard from "./MemberCard";

import { Col, Grid, Row, Spin, Typography } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Search from "antd/es/input/Search";
import _ from "lodash";

import { useTranslation } from "@/app/i18n/client";
import { UserInfo } from "@/helpers/types/userTypes";
import { useGetAllUsersQuery } from "@/store/queries/allMember";
import { createQueryString } from "@/utils/queryString";
import { FilterOutlined } from "@ant-design/icons";

function AllMemberModule() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const { t } = useTranslation(params?.locale as string, "allMember");

  const { result, total, isFetching, refetch } = useGetAllUsersQuery(
    {
      page: page,
      page_size: 10,
      search: search,
    },
    {
      selectFromResult: ({ data, isFetching }) => {
        const newDataUsers = data?.data?.users?.map((user: any) => ({
          name: `${user?.firstname} ${user?.lastname}`,
          ...user,
        }));
        return {
          result: data?.data?.users ?? [],
          total: data?.result ?? 0,
          isFetching,
        };
      },
    }
  );

  const handleSearch = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(createQueryString("search", `${e?.target?.value}`));
  }, 300);

  const handleFillGridEntryScreen = () => {
    if (screens.xl) return 3;
    if (screens.lg) return 6;
    if (screens.md) return 6;
    if (screens.sm) return 8;
    if (screens.xs) return 12;
  };

  return (
    <S.PageWrapper>
      <S.Head>
        <Typography.Title level={3} style={{ fontWeight: 700 }}>
          {t("title")}
        </Typography.Title>
        <S.ItemWrapper>
          <Search
            placeholder="Enter member name..."
            size="large"
            onChange={handleSearch}
            defaultValue={search}
          />
          <S.FilterWrapper>
            <FilterOutlined
              style={{
                fontSize: "20px",
              }}
            />
          </S.FilterWrapper>
        </S.ItemWrapper>
      </S.Head>
      <S.CustomContent>
        <S.ComponentsWrapper>
          {isFetching ? (
            <>
              <S.SpinWrapper>
                <Spin size="large"></Spin>
              </S.SpinWrapper>
            </>
          ) : (
            <Row gutter={16}>
              {result.map((item: UserInfo, index: number) => {
                return (
                  <Col
                    className="gutter-row"
                    span={handleFillGridEntryScreen()}
                    key={index}
                  >
                    <MemberCard dataSource={item}></MemberCard>
                  </Col>
                );
              })}
            </Row>
          )}
        </S.ComponentsWrapper>
      </S.CustomContent>
    </S.PageWrapper>
  );
}

export default AllMemberModule;
