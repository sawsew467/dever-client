import React from "react";

import * as S from "./styles";
import { UserInfo } from "@/helpers/types/userTypes";
import Image from "next/image";
import { Typography } from "antd";

interface IProps {
  dataSource: UserInfo;
}

function MemberCard({ dataSource }: IProps) {
  return (
    <S.ComponentsWrapper>
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
            <S.Gen>Gen {dataSource.gen}</S.Gen>
          </S.CustomImage>
        </div>
        <S.TextWrapper>
          <Typography
            style={{
              fontSize: "24px",
              fontWeight: 700,
            }}
          >
            {dataSource.firstname} {dataSource.lastname}
          </Typography>
          <Typography
             style={{
                fontSize: "16px",
                fontWeight: 600,
              }}>
            {dataSource.positionId !== null ? dataSource?.positionId?.name : "Chưa cập nhật"}
          </Typography>
        </S.TextWrapper>
      </S.ItemWrapper>
    </S.ComponentsWrapper>
  );
}

export default MemberCard;
