import React from "react";
import * as S from "./styles";

import { useParams } from "next/navigation";
import { Button, Form, FormProps, Input, message, Skeleton } from "antd";

import { UserInfo } from "@/helpers/types/userTypes";
import Typography from "@/components/core/common/Typography";
import { useTranslation } from "@/app/i18n/client";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";
import { useChangePasswordMutation } from "@/store/queries/settings";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

interface IUpdateValues {
  oldPassword: string;
  newPassword: string;
}

function PasswordChange({ isUserProfileLoading, userData }: IProps) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");
  const [changePassword, { isLoading }] = useChangePasswordMutation();

  const onFishish: FormProps<IUpdateValues>["onFinish"] = async (values) => {
    try {
      console.log(values);
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword,
      };

      await changePassword(data);
      message.success("Change password thànhc công ");
    } catch (error) {
      message.error("Đã xảy ra lỗi khi thay đổi password");
    }
  };

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? (
          <Skeleton />
        ) : (
          <S.ContentWrapper>
            <Typography.Title level={3}>{t("changePassword")}</Typography.Title>
            <Form
              name="changePasswordForm"
              onFinish={onFishish}
              layout="vertical"
            >
              <Form.Item
                label={t("currentPassword")}
                name="oldPassword"
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: t("cantBeEmpty") }]}
              >
                <Input.Password
                  autoComplete="oldPassword"
                  placeholder={t("enterCurrentPassword")}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                label={t("newPassword")}
                name="newPassword"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: t("cantBeEmpty") },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[!@#?])[A-Za-z!@#?.0-9]{8,100}$/,
                    message: t("strongPassword"),
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  autoComplete="newPassword"
                  placeholder={t("enterNewPassword")}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                label={t("confirmNewPassword")}
                name="confirmNewPassword"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: t("cantBeEmpty") },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error(t("notMatch")));
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  autoComplete="confirmNewPassword"
                  placeholder={t("enterConfirmNewPassword")}
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div>
                <Typography.Title level={5} $fontWeight={700}>
                  {t("required")}
                </Typography.Title>
                <Typography.Title level={5} $fontWeight={700}>
                  {t("ensure")}
                  <ul>
                    <li>
                      <Typography.Text $fontWeight={500}>
                        {t("requiredOne")}
                      </Typography.Text>
                    </li>
                    <li>
                      <Typography.Text $fontWeight={500}>
                        {t("requiredTwo")}
                      </Typography.Text>
                    </li>
                    <li>
                      <Typography.Text $fontWeight={500}>
                        {t("requiredThree")}
                      </Typography.Text>
                    </li>
                  </ul>
                </Typography.Title>
              </div>

              <S.FormItemNotMB>
                <Button htmlType="submit" type="primary" loading={isLoading}>
                  {t("update")}
                </Button>
              </S.FormItemNotMB>
            </Form>
          </S.ContentWrapper>
        )}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default PasswordChange;
