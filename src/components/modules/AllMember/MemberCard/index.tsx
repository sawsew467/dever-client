import React from "react";

import * as S from "./styles";

import Image from "next/image";
import { useParams } from "next/navigation";

import { UserInfo } from "@/helpers/types/userTypes";
import { useTranslation } from "@/app/i18n/client";
import Typography from "@/components/core/common/Typography";
import { useRouter } from "next-nprogress-bar";
import { useLocale } from "next-intl";

interface IProps {
  dataSource: UserInfo;
}

function MemberCard({ dataSource }: IProps) {
  const params = useParams();
  const locale = useLocale();
  const { t } = useTranslation(params?.locale as string, "allMember");

  const router = useRouter();

  return (
    <S.ComponentsWrapper
      onClick={() => {
        router.push(
          `/${locale}/profile/${
            dataSource?.nickname ? dataSource?.nickname : dataSource._id
          }`
        );
      }}
    >
      <S.ItemWrapper>
        <div
          style={{
            position: "relative",
          }}
        >
          <S.CustomImage>
            <Image
              src={dataSource.avatar == null ? "" : dataSource.avatar}
              width={400}
              height={500}
              alt="avatar"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            ></Image>
            {dataSource.gen && <S.Gen>Gen {dataSource.gen}</S.Gen>}
          </S.CustomImage>
        </div>
        <S.TextWrapper>
          <Typography.Title level={5} $fontWeight={700} $align="center">
            {dataSource?.firstname! && dataSource?.lastname!
              ? `${dataSource.firstname.concat(" ", dataSource?.lastname)}`
              : dataSource?.email}
          </Typography.Title>
          <Typography.Text $align="center">
            {dataSource.positionId !== null
              ? t(dataSource?.positionId?.constant)
              : ""}
          </Typography.Text>
        </S.TextWrapper>
      </S.ItemWrapper>
    </S.ComponentsWrapper>
  );
}

export default MemberCard;
