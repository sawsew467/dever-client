"use client"

import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { UserInfo } from "@/helpers/types/userTypes";
import { Skeleton } from "antd";
import Typography from "@/components/core/common/Typography";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

function SkillsChange({ isUserProfileLoading, userData }: IProps) {
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        setTags(userData.skills);
    }, [userData])

    

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? (
          <Skeleton />
        ) : (
          <S.ContentWrapper>
            <Typography.Title level={3}>Kỹ năng</Typography.Title>


          </S.ContentWrapper>
        )}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default SkillsChange;
