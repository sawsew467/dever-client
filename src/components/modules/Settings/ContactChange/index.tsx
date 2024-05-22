import React, { useEffect, useState } from "react";
import * as S from "./styles";
import { Button, Card, Form, Input, message, Skeleton, Typography } from "antd";
import { UserInfo } from "@/helpers/types/userTypes";
import { FormProps, useForm } from "antd/es/form/Form";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

interface IUpdateData {
  phone: string;
  nickname: string;
}

function ContactChange({ isUserProfileLoading, userData }: IProps) {
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const [updateData, setUpdateData] = useState<IUpdateData>({
    nickname: userData.nickname,
    phone: userData.phone,
  });

  const onFinish: FormProps<IUpdateData>["onFinish"] = async (values) => {
    try {
      const res: any = await updateUserProfile(values).unwrap();
    } catch (error) {
      message.error("Cập nhật xảy ra lỗi");
    }
  };

  const [myForm] = Form.useForm();

  useEffect(() => {
    myForm.setFieldsValue({
      phone: userData?.phone,
      nickname: userData?.nickname,
    });
  }, [userData]);

  return (
    <S.LGalleryCol>
      <Card bordered={false}>
        {isUserProfileLoading ? <Skeleton/> : <S.ContentWrapper>
          <Typography.Title level={3}>Thông tin liên hệ</Typography.Title>

          <Form
            name="basic"
            onFinish={onFinish}
            layout="vertical"
            form={myForm}
          >
            <Form.Item<IUpdateData>
              label="Số điện thoại"
              name="phone"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: "Không được để trống" }]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>
            <Form.Item<IUpdateData>
              label="Nickname"
              name="nickname"
              wrapperCol={{ span: 24 }}
              rules={[{ required: true, message: "Không được để trống" }]}
            >
              <Input placeholder="Nhập nickname" />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                style={{ width: "fit-content" }}
                htmlType="submit"
                loading={isLoading}
              >
                Cập nhật
              </Button>
            </Form.Item>
          </Form>
        </S.ContentWrapper>}
      </Card>
    </S.LGalleryCol>
  );
}

export default ContactChange;
