"use client";
import React, { useState } from "react";
import * as S from "./styles";

import { Button, Card, Grid, message, Skeleton, Typography, Upload } from "antd";
import Image from "next/image";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useParams } from "next/navigation";

import { CloudUploadOutlined } from "@ant-design/icons";
import { UserInfo } from "@/helpers/types/userTypes";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";
import webStorageClient from "@/utils/webStorageClient";
import { constants } from "@/settings";
import { applyChangeAvatar } from "@/store/slices/auth";
import { useTranslation } from "@/app/i18n/client";

interface IProps {
  isProfileFetching: boolean;
  userData: UserInfo;
}

function AvatarChange({ isProfileFetching, userData }: IProps) {
  const [imageUrl, setImageUrl] = useState<string>("");
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [updateUserProfile] = useUpdateUserProfileMutation();
  const dispatch = useDispatch();
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  const handleUpload = async ({
    onSuccess,
    onError,
    file,
    onProgress,
  }: any) => {
    console.log(file);
    const fmData = new FormData();
    const config = {
      headers: { "content-type": "multipart/form-data" },
      onUploadProgress: (event: any) => {
        onProgress({ percent: (event.loaded / event.total) * 100 });
        setIsUploading(true);
      },
    };

    fmData.append("image", file);
    try {
      const res = await axios.post(
        "https://api.imgbb.com/1/upload?key=c9a0d416d3771b79bea983ffbb51811e",
        fmData,
        config
      );
      onSuccess("Ok");
      setImageUrl(res?.data?.data?.url);
      //update user avatar

      if (res) {
        const data = {
          avatar: res?.data?.data?.url,
        };
        console.log(data);
        updateUserProfile(data).unwrap();
        webStorageClient.set(constants.AVT, res?.data?.data?.url);
        dispatch(applyChangeAvatar(res?.data?.data?.url))
        message.success(t("updateSuccess"));
      }
      setIsUploading(false);
    } catch (err) {
      const error = new Error(t("updateError"));
      onError({ error });
    }
  };
  return (
    <S.ContentWrapper>
      <S.CustomCard>
        <S.AvatarEditorWrapper>
          <div>
            {isProfileFetching || isUploading ? (
              <Skeleton.Image
                active={isProfileFetching}
                style={{
                  width: 125,
                  height: 125,
                }}
              />
            ) : (
              <Image
                src={imageUrl == "" ? webStorageClient.get(constants.AVT) : imageUrl}
                width={500}
                height={500}
                alt="avatar"
                style={{
                  objectFit: "cover",
                  width: 125,
                  height: 125,
                  borderRadius: "8px",
                }}
              />
            )}
          </div>
          <S.Wrapper>
            <Typography.Title level={3}>
              {isProfileFetching ? (
                <Skeleton.Input
                  active={isProfileFetching}
                  size={"default"}
                  style={{ width: "100%" }}
                />
              ) : (
                userData.firstname! + " " + userData.lastname!
              )}
            </Typography.Title>
            <Typography.Text style={{ fontSize: "16px" }}>
              {isProfileFetching ? (
                <Skeleton.Input
                  active={isProfileFetching}
                  size={"default"}
                  style={{ width: "100%" }}
                />
              ) : userData?.email != null ? (
                userData?.email
              ) : (
                t("notSetYet")
              )}
            </Typography.Text>

            <Upload
              name="file"
              action={
                "https://api.imgbb.com/1/upload?expiration=600&key=d0adfbcb1f973887c165948d50681492"
              }
              headers={{
                authorization: "authorization-text",
              }}
              customRequest={handleUpload}
              multiple={false}
              fileList={[]}
            >
              <Button
                type="primary"
                icon={<CloudUploadOutlined />}
                loading={isUploading}
              >
                {t("changeAvatar")}
              </Button>
            </Upload>
          </S.Wrapper>
        </S.AvatarEditorWrapper>
      </S.CustomCard>
    </S.ContentWrapper>
  );
}

export default AvatarChange;
