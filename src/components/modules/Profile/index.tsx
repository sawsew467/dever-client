"use client";
import React, { useEffect } from "react";
import { Grid, Skeleton } from "antd";
import { useParams } from "next/navigation";

import BaseInformation from "./BaseInformation";
import GeneralInformation from "./GeneralInformation";
import Skills from "./Skills";
import * as S from "./styles";

import Typography from "@/components/core/common/Typography";
import { useGetProfileQuery } from "@/store/queries/profiles";
import themeColors from "@/style/themes/default/colors";
import { useTranslation } from "@/app/i18n/client";
import Favourites from "./Favourites";

interface IProps {
  userInfo: string;
}

function ProfileModule({ userInfo }: IProps) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "profile");

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  console.log(screens);

  const { profileData, isFetching, refetch } = useGetProfileQuery(userInfo, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        profileData: data?.data ?? {},
        isFetching,
      };
    },
  });

  console.log(profileData);

  useEffect(() => {
    refetch();
  }, []);
  return (
    <S.PageWrapper>
      <S.Head>
        {isFetching ? (
          <Skeleton.Input
            active={isFetching}
            size="default"
            style={{ width: "100%" }}
          />
        ) : (
          <Typography.Title
            level={3}
            $fontWeight={700}
            $color={themeColors.primary}
          >
            {profileData?.firstname && profileData?.lastname
              ? `${profileData?.firstname} ${profileData?.lastname}`
              : profileData?.email}{" "}
            <span style={{ color: "#000" }}>{t("profile")}</span>
          </Typography.Title>
        )}
      </S.Head>
      <S.CustomContent>
        <S.Gallery>
          <S.LGalleryCol>
            <BaseInformation
              userData={profileData}
              isUserDataFetching={isFetching}
            />
            {!screens.lg ? (
              <>
                <GeneralInformation
                  userData={profileData}
                  isUserDataFetching={isFetching}
                />
              </>
            ) : (
              <>
                <Skills
                  userData={profileData}
                  isUserDataFetching={isFetching}
                />
                <Favourites
                  userData={profileData}
                  isUserDataFetching={isFetching}
                />
              </>
            )}
          </S.LGalleryCol>
          <S.RGalleryCol>
            {!screens.lg ? (
              <>
                <Skills
                  userData={profileData}
                  isUserDataFetching={isFetching}
                />
                <Favourites
                  userData={profileData}
                  isUserDataFetching={isFetching}
                />
              </>
            ) : (
              <>
                <GeneralInformation
                  userData={profileData}
                  isUserDataFetching={isFetching}
                />
              </>
            )}
          </S.RGalleryCol>
        </S.Gallery>
      </S.CustomContent>
    </S.PageWrapper>
  );
}

export default ProfileModule;
