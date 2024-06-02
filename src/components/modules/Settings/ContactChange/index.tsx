import React, { useEffect, useState } from "react";
import * as S from "./styles";

import { Button, Card, Form, Input, message, Skeleton, Typography } from "antd";
import { FormProps, useForm } from "antd/es/form/Form";

import { UserInfo } from "@/helpers/types/userTypes";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";
import { useTranslation } from "@/app/i18n/client";
import { useParams } from "next/navigation";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

interface IUpdateData {
  phone: string;
  nickname: string;
}

function ContactChange({ isUserProfileLoading, userData }: IProps) {
  const params = useParams();
  const [myForm] = Form.useForm();
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const { t } = useTranslation(params?.locale as string, "settings");


  const onFinish: FormProps<IUpdateData>["onFinish"] = async (values) => {
    try {
      const res: any = await updateUserProfile(values).unwrap();
      message.success(t("updateSuccess"))
    } catch (error) {
      message.error(t("updateError"));
    }
  };


  useEffect(() => {
    myForm.setFieldsValue({
      phone: userData?.phone,
      nickname: userData?.nickname,
    });
  }, [userData]);

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? <Skeleton/> : <S.ContentWrapper>
          <Typography.Title level={3}>{t("contact")}</Typography.Title>

          <Form
            name="basic"
            onFinish={onFinish}
            layout="vertical"
            form={myForm}
          >
            <Form.Item<IUpdateData>
              label={t("phonenumber")}
              name="phone"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: t("cantBeEmpty") }]}
            >
              <Input placeholder={t("enterPhoneNumber")} />
            </Form.Item>
            <Form.Item<IUpdateData>
              label={t("nickname")}
              name="nickname"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: t("enterPhoneNumber") }]}
            >
              <Input placeholder={t("enterNickname")} />
            </Form.Item>
            
            <S.FormItemNotMB>
              <Button
                type="primary"
                style={{ width: "fit-content" }}
                htmlType="submit"
                loading={isLoading}
              >
                {t("update")}
              </Button>
            </S.FormItemNotMB>
          </Form>
        </S.ContentWrapper>}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default ContactChange;
