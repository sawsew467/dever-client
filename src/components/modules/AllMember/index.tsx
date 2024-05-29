"use client";

import React, { useState } from "react";
import MemberCard from "./MemberCard";
import * as S from "./styles";

import {
  Button,
  Col,
  Flex,
  Grid,
  List,
  Row,
  Select,
  SelectProps,
  Skeleton,
  Spin,
  Typography
} from "antd";

import _ from "lodash";
import { useRouter } from "next-nprogress-bar";
import Image from "next/image";
import { useParams, useSearchParams } from "next/navigation";


import { useTranslation } from "@/app/i18n/client";
import { UserEnum, UserInfo } from "@/helpers/types/userTypes";
import {
  useGetAllDepartmentsQuery,
  useGetAllMajorQuery,
  useGetAllPositionQuery,
  useGetAllUsersQuery,
} from "@/store/queries/allMember";
import { createQueryString } from "@/utils/queryString";
import FilterIconWhite from "@public/icons/layout/allMembers/filter-white.svg";
import FilterIcon from "@public/icons/layout/allMembers/filter.svg";
import SearchIcon from "@public/icons/layout/allMembers/search.svg";

interface InterfaceEnumsData {
  result: SelectProps["options"];
}

function AllMemberModule() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const page = Number(searchParams.get("page")) || 1;
  const search = searchParams.get("search") || "";

  const positionId = searchParams.get("positionId") || "";
  const majorId = searchParams.get("majorId") || "";
  const departments = searchParams.get("departments") || "";
  const kGeneration = searchParams.get("kGeneration") || "";

  const { t } = useTranslation(params?.locale as string, "allMember");

  const { result, total, isFetching, refetch } = useGetAllUsersQuery(
    {
      page: page,
      page_size: 10,
      search: search,
      filter: JSON.stringify({ positionId, departments, majorId, kGeneration }),
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
  const departmentData: InterfaceEnumsData = useGetAllDepartmentsQuery(
    undefined,
    {
      selectFromResult: ({ data, isFetching }) => {
        const newDepartmentData = data?.data?.map((department: UserEnum) => ({
          label: department.name,
          value: department._id,
          title: department.constant,
          ...department,
        }));
        return {
          result: newDepartmentData ?? [],
          isFetching,
        };
      },
    }
  );

  const positionData: InterfaceEnumsData = useGetAllPositionQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      const newPositionData = data?.data?.map((position: UserEnum) => ({
        label: position.name,
        value: position._id,
        title: position.constant,
        ...position,
      }));
      return {
        result: newPositionData ?? [],
        total: data?.result ?? 0,
        isFetching,
      };
    },
  });

  const majorData: InterfaceEnumsData = useGetAllMajorQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      const newMajorData = data?.data?.map((major: UserEnum) => ({
        label: major.name,
        value: major._id,
        title: major.constant,
        ...major,
      }));
      return {
        result: newMajorData ?? [],
        isFetching,
      };
    },
  });

  const handleSearch = _.debounce((e: React.ChangeEvent<HTMLInputElement>) => {
    router.push(createQueryString("search", `${e?.target?.value}`));
  }, 300);

  const handleFilterPosition = _.debounce((e: string) => {
    router.push(createQueryString("positionId", `${e ?? ""}`));
  }, 300);

  const handleFilterMajor = _.debounce((e: string) => {
    router.push(createQueryString("majorId", `${e ?? ""}`));
  }, 300);
  const handleFilterK = _.debounce((e: string) => {
    router.push(createQueryString("kGeneration", `${e ?? ""}`));
  }, 300);

  const handleFilterDepartment = _.debounce((e) => {
    router.push(createQueryString("departments", `${e ?? ""}`));
  }, 300);

  return (
    <S.PageWrapper>
      <S.Head>
        <S.HeadTitle>
          <Typography.Title level={3} style={{ fontWeight: 700 }}>
            {t("title")}
          </Typography.Title>
          <S.ItemWrapper>
            <S.InputCustom
              placeholder="Enter member name..."
              size="large"
              onChange={handleSearch}
              defaultValue={search}
              prefix={
                <Image
                  src={SearchIcon}
                  alt="icon"
                  width={22}
                  height={22}
                  style={{ marginRight: "8px" }}
                />
              }
            />
            {screens.xs && (
              <Flex>
                <Button
                  size="large"
                  type={isShowMenu ? "primary" : "default"}
                  onClick={() => setIsShowMenu(!isShowMenu)}
                >
                  <Image
                    src={isShowMenu ? FilterIconWhite : FilterIcon}
                    alt="icon"
                    width={22}
                    height={22}
                  />
                </Button>
              </Flex>
            )}
            
          </S.ItemWrapper>
        </S.HeadTitle>
        {!screens.xs || isShowMenu ?  (
          <S.HeadFilter>
            <S.RowCustom gutter={16}>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>{t("position")}</Typography.Title>
                <Select
                  placeholder={t("enterPosition")}
                  allowClear
                  style={{ width: "100%" }}
                  onChange={handleFilterPosition}
                  defaultValue={positionId || undefined}
                >
                  {positionData?.result?.map((item, index) => (
                    <Select.Option key={index} value={item.value}>
                      {t(item.title!)}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>{t("department")}</Typography.Title>
                <Select
                  placeholder={t("enterDepartment")}
                  allowClear
                  style={{ width: "100%" }}
                  onChange={handleFilterDepartment}
                  defaultValue={
                    departments?.length ? departments?.split(",") : null
                  }
                  mode="multiple"
                >
                  {departmentData?.result?.map((item, index) => (
                    <Select.Option key={index} value={item.value}>
                      {t(item.title!)}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>{t("major")}</Typography.Title>
                <Select
                  placeholder={t("enterMajor")}
                  allowClear
                  style={{ width: "100%" }}
                  onChange={handleFilterMajor}
                  defaultValue={majorId || undefined}
                >
                  {majorData?.result?.map((item, index) => (
                    <Select.Option key={index} value={item.value}>
                      {t(item.title!)}
                    </Select.Option>
                  ))}
                </Select>
              </Col>
              <Col xs={24} md={6}>
                <Typography.Title level={5}>{t("generation")}</Typography.Title>
                <Select
                  placeholder={t("enterGeneration")}
                  allowClear
                  style={{ width: "100%" }}
                  onChange={handleFilterK}
                  defaultValue={kGeneration || undefined}
                  options={[
                    {
                      label: " K20",
                      value: 20,
                    },
                    {
                      label: " K19",
                      value: 19,
                    },
                    {
                      label: " K18",
                      value: 18,
                    },
                    {
                      label: " K17",
                      value: 17,
                    },
                    {
                      label: " K16",
                      value: 16,
                    },
                    {
                      label: " K15",
                      value: 15,
                    },
                    {
                      label: " K14",
                      value: 14,
                    },
                    {
                      label: " K13",
                      value: 13,
                    },
                  ]}
                />
              </Col>
            </S.RowCustom>
          </S.HeadFilter>
        ) : null}
      </S.Head>
      <S.CustomContent>
        <S.ComponentsWrapper>
          {isFetching ? (
            <>
              <Row gutter={16}>
                {
                  Array.from({length: 20}).map((_, index) => (
                    <Col xs={12} sm={8} md={6} lg={6} xl={4} key={index}>
                      <Flex vertical gap={10} style={{marginBottom: 16}}>
                        <Skeleton.Image active style={{width: "100%", height: "220px"}} />
                        <Skeleton.Input active style={{width:"100%"}}/>
                      </Flex>
                    </Col>
                  ))
                }
              </Row>
            </>
          ) : (
            <Row gutter={16}>
              {result.map((item: UserInfo, index: number) => {
                return (
                  <Col xs={12} sm={8} md={6} lg={6} xl={4} key={index}>
                    <MemberCard dataSource={item}></MemberCard>
                  </Col>
                );
              })}
              {result.length == 0 && (
                <div style={{ width: "100%" }}>
                  <List></List>
                </div>
              )}
            </Row>
          )}
        </S.ComponentsWrapper>
      </S.CustomContent>
    </S.PageWrapper>
  );
}

export default AllMemberModule;
