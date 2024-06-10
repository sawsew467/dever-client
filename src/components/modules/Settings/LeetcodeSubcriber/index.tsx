"use client";

import * as S from "./styles";

import React, { useEffect, useRef, useState } from "react";
import { TweenOneGroup } from "rc-tween-one";
import {
  Button,
  Form,
  Input,
  InputRef,
  message,
  Skeleton,
  Tag,
  theme,
} from "antd";
import { useParams } from "next/navigation";

import { UserInfo } from "@/helpers/types/userTypes";
import Typography from "@/components/core/common/Typography";
import { PlusOutlined } from "@ant-design/icons";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";
import { useTranslation } from "@/app/i18n/client";
import {
  useSubscribeLeaderboardMutation,
  useUpdateLeetcodeMutation,
} from "@/store/queries/leetcode";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

interface IUpdateData {
  leetcodeUsername: string;
}

function LeetcodeSubcriber({ userData }: IProps) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  const [form] = Form.useForm();

  const [subscribeLeaderboard] = useSubscribeLeaderboardMutation();
  const [updateLeetcode, { isLoading }] = useUpdateLeetcodeMutation();

  const onFishish = async (values: any) => {
    try {
      await subscribeLeaderboard(values).unwrap();
      await updateLeetcode(null).unwrap();
      message.success(t("updateSuccess"));
    } catch (error) {
      message.error(t("updateError"));
    }
  };

  useEffect(() => {
    form?.setFieldsValue(userData);
  }, [userData, form]);

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        <S.ContentWrapper>
          <Typography.Title level={3}>{t("leetcode")}</Typography.Title>
          <Form form={form} layout="vertical" onFinish={onFishish}>
            <Form.Item<IUpdateData>
              label={t("leetcodeUsername")}
              name="leetcodeUsername"
              rules={[
                {
                  required: true,
                  message: "Please input your Leetcode username!",
                },
              ]}
            >
              <Input placeholder="Leetcode username" />
            </Form.Item>
            <S.FormItemNotMB>
              <Button htmlType="submit" type="primary" loading={isLoading}>
                {t("update")}
              </Button>
            </S.FormItemNotMB>
          </Form>
        </S.ContentWrapper>
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default LeetcodeSubcriber;
