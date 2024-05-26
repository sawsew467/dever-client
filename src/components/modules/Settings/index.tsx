"use client";
import { Typography } from "antd";
import { useParams, useRouter, useSearchParams } from "next/navigation";

import * as S from "./styles";
import AvatarChange from "./AvatarChange";
import ContactChange from "./ContactChange";
import GeneralChange from "./GeneralChange";
import SocialChange from "./SocialChange";
import AboutMe from "./AboutMe";

import { useTranslation } from "@/app/i18n/client";
import { constants } from "@/settings";
import { useGetMyProfileQuery } from "@/store/queries/settings";
import webStorageClient from "@/utils/webStorageClient";
import SkillsChange from "./SkillsChange";
import FavouritiesChange from "./FavouritesChange";
import PasswordChange from "./PasswordChange";

function SettingsModules() {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  const { result, isFetching, refetch } = useGetMyProfileQuery(
    webStorageClient.get(constants.USER_INFO),
    {
      selectFromResult: ({ data, isFetching }) => {
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
            <SkillsChange isUserProfileLoading={isFetching} userData={result}></SkillsChange>
            <FavouritiesChange isUserProfileLoading={isFetching} userData={result}></FavouritiesChange>
          </S.LGalleryCol>

          <S.RGalleryCol>
            <AboutMe isUserProfileFetching={isFetching} userData={result} />
            <GeneralChange isUserProfileLoading={isFetching} userData={result}/>
            <PasswordChange isUserProfileLoading={isFetching} userData={result}/>
          </S.RGalleryCol>
        </S.Gallery>
      </S.CustomContent>
    </S.PageWrapper>
  );
}

export default SettingsModules;
