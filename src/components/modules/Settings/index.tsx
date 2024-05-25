"use client";
import React, { useState } from "react";
import * as S from "./styles";
import { Button, Card, Skeleton, Typography } from "antd";
import { useTranslation } from "@/app/i18n/client";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import Image from "next/image";
import { useGetMyProfileQuery } from "@/store/queries/settings";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { UserInfo } from "@/helpers/types/userTypes";
import { CloudUploadOutlined } from "@ant-design/icons";
import AvatarChange from "./AvatarChange";
import AboutMe from "./AboutMe";
import ContactChange from "./ContactChange";
import SocialChange from "./SocialChange";
import GeneralChange from "./GeneralChange";

function SettingsModules() {
  const params = useParams();
  const router = useRouter();
  const searchParams = useSearchParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  const { result, isFetching, refetch } = useGetMyProfileQuery(
    webStorageClient.get(constants.USER_INFO),
    {
      selectFromResult: ({ data, isFetching }) => {
        const newDataResult = data?.data;
        return {
          result: data?.data ?? {},
          isFetching,
        };
      },
    }
  );

  return (
    <S.PageWrapper>
      <S.Head>
        <Typography.Title level={3} style={{fontWeight: 700}}>{t("title")}</Typography.Title>
      </S.Head>
      <S.CustomContent>
        <S.Gallery>
          <S.LGalleryCol>
            <AvatarChange isProfileFetching={isFetching} userData={result} />
            <ContactChange isUserProfileLoading={isFetching} userData={result}/>
            <SocialChange isUserProfileLoading={isFetching} userData={result} refetchUserData={refetch}/>
          </S.LGalleryCol>

          <S.RGalleryCol>
            <AboutMe isUserProfileFetching={isFetching} userData={result} />
            <GeneralChange isUserProfileLoading={isFetching} userData={result}/>
          </S.RGalleryCol>
        </S.Gallery>
      </S.CustomContent>
    </S.PageWrapper>
  );
}

export default SettingsModules;
