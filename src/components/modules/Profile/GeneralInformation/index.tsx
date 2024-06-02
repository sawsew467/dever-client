import React from "react";
import moment from "moment";
import { Flex, Grid, Skeleton } from "antd";
import { useParams } from "next/navigation";

import * as S from "./styles";


import { useTranslation } from "@/app/i18n/client";
import { UserInfo } from "@/helpers/types/userTypes";
import Typography from "@/components/core/common/Typography";

interface IProps {
  userData: UserInfo;
  isUserDataFetching: boolean;
}

function GeneralInformation({ userData, isUserDataFetching }: IProps) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "profile");

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserDataFetching ? (
          <Skeleton.Input active={isUserDataFetching} size="default" />
        ) : (
          <Typography.Title level={3} $fontWeight={700}>
            {t("general")}
          </Typography.Title>
        )}
        <S.MainContentWrapper>
          <Flex vertical gap={10}>
            {isUserDataFetching ? (
              <Skeleton.Input active={isUserDataFetching} size="default" />
            ) : (
              <Typography.Title level={4} $fontWeight={700}>
               {t("aboutMe")}
              </Typography.Title>
            )}
            {isUserDataFetching ? (
              <Skeleton.Input
                active={isUserDataFetching}
                size="default"
                style={{ width: "100%" }}
              />
            ) : (
              <S.TextWrapper>
                {userData?.description? (
                  <S.TextRender
                    dangerouslySetInnerHTML={{ __html: userData?.description }}
                  ></S.TextRender>
                ) : (
                  <Typography.Text $fontSize="16px" italic>{t("noContent")}</Typography.Text>
                )}
              </S.TextWrapper>
            )}
          </Flex>
          <Flex gap={screens.xs ? 20 : 100}>
            <Flex vertical gap={10}>
              {isUserDataFetching ? (
                <Skeleton.Input active={isUserDataFetching} size="default" />
              ) : (
                <Flex vertical>
                  <Typography.Text $fontSize="16px">
                    {t("joinedSystemDate")}
                  </Typography.Text>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {userData?.createdAt!
                      ? moment(userData.createdAt).toDate().toLocaleDateString()
                      : t("notSetYet")}
                  </Typography.Text>
                </Flex>
              )}
              {isUserDataFetching ? (
                <Skeleton.Input active={isUserDataFetching} size="default" />
              ) : (
                <Flex vertical>
                  <Typography.Text $fontSize="16px">{t("position")}</Typography.Text>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {userData?.positionId!
                      ? t(userData?.positionId?.constant)
                      : t("notSetYet")}
                  </Typography.Text>
                </Flex>
              )}
              {isUserDataFetching ? (
                <Skeleton.Input active={isUserDataFetching} size="default" />
              ) : (
                <Flex vertical>
                  <Typography.Text $fontSize="16px">{t("department")}</Typography.Text>
                  {userData?.departments! &&
                  userData?.departments.length > 0 ? (
                    <Flex vertical>
                      {userData.departments!.map((item, index) => (
                        <Typography.Text $fontSize="16px" $fontWeight={700}>{
                            t(item.constant)
                        }</Typography.Text>
                      ))}
                    </Flex>
                  ) : (
                    t("notSetYet")
                  )}
                </Flex>
              )}
            </Flex>

            <Flex vertical gap={10}>
              {isUserDataFetching ? (
                <Skeleton.Input active={isUserDataFetching} size="default" />
              ) : (
                <Flex vertical>
                  <Typography.Text $fontSize="16px">{t("education")}</Typography.Text>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {userData?.school! ? userData?.school : t("notSetYet")}
                  </Typography.Text>
                </Flex>
              )}
              {isUserDataFetching ? (
                <Skeleton.Input active={isUserDataFetching} size="default" />
              ) : (
                <Flex vertical>
                  <Typography.Text $fontSize="16px">{t("major")}</Typography.Text>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {userData?.majorId!
                      ? t(userData?.majorId?.constant)
                      : t("notSetYet")}
                  </Typography.Text>
                </Flex>
              )}
              {isUserDataFetching ? (
                <Skeleton.Input active={isUserDataFetching} size="default" />
              ) : (
                <Flex vertical>
                  <Typography.Text $fontSize="16px">{t("workplace")}</Typography.Text>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {userData?.workplace! ? userData?.workplace : t("notSetYet")}
                  </Typography.Text>
                </Flex>
              )}
            </Flex>
          </Flex>
        </S.MainContentWrapper>
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default GeneralInformation;
