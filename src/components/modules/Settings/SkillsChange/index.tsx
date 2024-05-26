"use client"
import * as S from "./styles";

import React, { useEffect, useState } from "react";
import { TweenOneGroup } from "rc-tween-one";
import { Skeleton, Tag, theme } from "antd";

import { UserInfo } from "@/helpers/types/userTypes";
import Typography from "@/components/core/common/Typography";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

function SkillsChange({ isUserProfileLoading, userData }: IProps) {
    const { token } = theme.useToken();
    const [tags, setTags] = useState<string[]>([]);

    useEffect(() => {
        setTags(userData.skills);
    }, [userData])

    
  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const tagPlusStyle: React.CSSProperties = {
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };

    
  const forMap = (tag: string) => (
    <span key={tag} style={{ display: 'inline-block' }}>
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    </span>
  );
  const tagChild = tags.map(forMap);


  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? (
          <Skeleton />
        ) : (
          <S.ContentWrapper>
            <Typography.Title level={3}>Kỹ năng</Typography.Title>
            <S.TagsWrapper>
                <S.TagsList>
                    <TweenOneGroup
                    appear={false}
                    enter={{ scale: 0.8, opacity: 0, type: 'from', duration: 100 }}
                    leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                    onEnd={(e) => {
                        if (e.type === 'appear' || e.type === 'enter') {
                          (e.target as any).style = 'display: inline-block';
                        }
                      }}
                    >

                    </TweenOneGroup>
                </S.TagsList>
            </S.TagsWrapper>
          </S.ContentWrapper>
        )}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default SkillsChange;
