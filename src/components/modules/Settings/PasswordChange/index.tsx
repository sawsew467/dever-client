import React from "react";
import * as S from "./styles";
import Typography from "@/components/core/common/Typography";
import { UserInfo } from "@/helpers/types/userTypes";
import { Button, Form, FormProps, Input, message, Skeleton } from "antd";
import { useParams } from "next/navigation";
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
        console.log(values)
      const data = {
        oldPassword: values.oldPassword,
        newPassword: values.newPassword
      }

      await changePassword(data);
      message.success("Change password thànhc công ")
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
            <Typography.Title level={3}>Thay đổi password</Typography.Title>
            <Form
              name="changePasswordForm"
              onFinish={onFishish}
              layout="vertical"
            >
              <Form.Item
                label={"Current password"}
                name="oldPassword"
                wrapperCol={{ span: 24 }}
                rules={[{ required: true, message: t("cantBeEmpty") }]}
              >
                <Input.Password
                  autoComplete="oldPassword"
                  placeholder="Enter current password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                label={"New password"}
                name="newPassword"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: t("cantBeEmpty") },
                  {
                    pattern: /^(?=.*[a-z])(?=.*[!@#?])[A-Za-z!@#?.0-9]{8,100}$/,
                    message: "Please enter more stronger password",
                  },
                ]}
                hasFeedback
              >
                <Input.Password
                  autoComplete="newPassword"
                  placeholder="Enter new password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <Form.Item
                label={"Confirm new password"}
                name="confirmNewPassword"
                wrapperCol={{ span: 24 }}
                rules={[
                  { required: true, message: t("cantBeEmpty") },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue("newPassword") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new Error(
                          "The new password that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
                hasFeedback
              >
                <Input.Password
                  placeholder="Enter current password"
                  iconRender={(visible) =>
                    visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
                  }
                />
              </Form.Item>
              <div>
                <Typography.Title level={5} $fontWeight={700}>
                  Password requirements:
                </Typography.Title>
                <Typography.Title level={5} $fontWeight={700}>
                  Ensure that these requirements are met:
                  <ul>
                    <li>
                      <Typography.Text $fontWeight={500}>
                        At least 10 characters (and up to 100 characters)
                      </Typography.Text>
                    </li>
                    <li>
                      <Typography.Text $fontWeight={500}>
                        At least one lowercase character
                      </Typography.Text>
                    </li>
                    <li>
                      <Typography.Text $fontWeight={500}>
                        Inclusion of at least one special character, e.g., ! @ #
                        ?
                      </Typography.Text>
                    </li>
                  </ul>
                </Typography.Title>
              </div>

              <Form.Item>
                <Button htmlType="submit" type="primary">{t("update")}</Button>
              </Form.Item>
            </Form>
          </S.ContentWrapper>
        )}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default PasswordChange;
