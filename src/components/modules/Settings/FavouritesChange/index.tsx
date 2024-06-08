"use client";

import * as S from "./styles";

import React, { useEffect, useRef, useState } from "react";
import { TweenOneGroup } from "rc-tween-one";
import { Button, Input, InputRef, message, Skeleton, Tag, theme } from "antd";
import { useParams } from "next/navigation";

import { UserInfo } from "@/helpers/types/userTypes";
import Typography from "@/components/core/common/Typography";
import { PlusOutlined } from "@ant-design/icons";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";
import { useTranslation } from "@/app/i18n/client";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

function FavouritiesChange({ isUserProfileLoading, userData }: IProps) {
  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [isHaveNewTag, setIsHaveNewTag] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const handleUpdate = async () => {
    try {
      const data = {
        favourites: tags ?? [],
      };
      setIsHaveNewTag(false);
      await updateUserProfile(data);
      message.success(t("updateSuccess"));
    } catch (error) {
      message.error(t("updateError"));
    }
  };

  useEffect(() => {
    setTags(userData?.favourites || []);
  }, [userData]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    setIsHaveNewTag(true);
    setTags(newTags);
  };

  const tagPlusStyle: React.CSSProperties = {
    background: token.colorBgContainer,
    borderStyle: "dashed",
  };

  const forMap = (tag: string) => (
    <span key={tag} style={{ display: "inline-block" }}>
      <S.TagCustom
        closable
        color="purple"
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </S.TagCustom>
    </span>
  );
  const tagChild = tags?.map((item, _) => forMap(item));

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setIsHaveNewTag(true);
    setInputVisible(false);
    setInputValue("");
  };
  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? (
          <Skeleton />
        ) : (
          <S.ContentWrapper>
            <Typography.Title level={3}>{t("favouries")}</Typography.Title>
            <S.TagsWrapper>
              <S.TagsList>
                <TweenOneGroup
                  appear={false}
                  enter={{
                    scale: 0.8,
                    opacity: 0,
                    type: "from",
                    duration: 100,
                  }}
                  leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
                  onEnd={(e) => {
                    if (e.type === "appear" || e.type === "enter") {
                      (e.target as any).style = "display: inline-block";
                    }
                  }}
                >
                  {tagChild}
                </TweenOneGroup>
              </S.TagsList>

              {inputVisible ? (
                <Input
                  ref={inputRef}
                  type="text"
                  size="large"
                  style={{ width: 200 }}
                  placeholder={t("enterNewTag")}
                  value={inputValue}
                  onChange={handleInputChange}
                  onBlur={handleInputConfirm}
                  onPressEnter={handleInputConfirm}
                />
              ) : (
                <S.TagCustom onClick={showInput} style={tagPlusStyle}>
                  <PlusOutlined /> New Tag
                </S.TagCustom>
              )}
            </S.TagsWrapper>
            <Button
              disabled={isHaveNewTag ? false : true}
              type={isHaveNewTag ? "primary" : "default"}
              style={{ width: "fit-content" }}
              onClick={() => handleUpdate()}
              loading={isLoading}
            >
              {t("update")}
            </Button>
          </S.ContentWrapper>
        )}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default FavouritiesChange;
