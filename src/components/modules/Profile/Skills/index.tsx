import React from "react";
import { Flex, Skeleton } from "antd";

import * as S from "./styles";

import { UserInfo } from "@/helpers/types/userTypes";
import Typography from "@/components/core/common/Typography";
import { TweenOneGroup } from "rc-tween-one";
import { useParams } from "next/navigation";
import { useTranslation } from "@/app/i18n/client";

interface IProps {
  userData: UserInfo;
  isUserDataFetching: boolean;
}

function Skills({ userData, isUserDataFetching }: IProps) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "profile");

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        <S.MainContentWrapper>
          {isUserDataFetching ? (
            <Skeleton.Input active={isUserDataFetching} size="default" />
          ) : (
            <Flex vertical>
              <Typography.Title level={3} $fontWeight={700}>
                {t("skills")}
              </Typography.Title>
              {userData?.skills && userData?.skills.length > 0 && (
                <Typography.Text $fontSize="16px">
                  {t("skillsDescriptions")}
                </Typography.Text>
              )}
            </Flex>
          )}

          {isUserDataFetching ? (
            <Skeleton.Input
              active={isUserDataFetching}
              size="default"
              style={{ width: "300px" }}
            />
          ) : (
            <S.TagsWrapper>
              <S.TagsList>
                <TweenOneGroup appear={false}>
                  {userData.skills! && userData?.skills.length > 0 ? (
                    <div>
                      {userData?.skills.map((item, _) => (
                        <span key={_} style={{ display: "inline-block" }}>
                          <S.TagCustom closable={false} color="green">
                            {item}
                          </S.TagCustom>
                        </span>
                      ))}
                    </div>
                  ) : (
                    <Typography.Text $fontSize="16px" italic>
                      {t("noContent")}
                    </Typography.Text>
                  )}
                </TweenOneGroup>
              </S.TagsList>
            </S.TagsWrapper>
          )}
        </S.MainContentWrapper>
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default Skills;
