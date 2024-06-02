import React, { ReactNode, useEffect, useState } from "react";

import * as S from "./styles";
import { Social, UserEnum, UserInfo } from "@/helpers/types/userTypes";
import {
  Avatar,
  Button,
  Divider,
  Form,
  FormProps,
  Input,
  List,
  message,
  Select,
  Skeleton,
} from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";

import FacebookIcon from "@public/icons/layout/socials/facebook.png";
import YoutubeIcon from "@public/icons/layout/socials/youtube.png";
import GithubIcon from "@public/icons/layout/socials/github.png";
import InstagramIcon from "@public/icons/layout/socials/instagram.png";
import LeetCodeIcon from "@public/icons/layout/socials/leetcode.png";
import { PlusOutlined } from "@ant-design/icons";
import {
  useGetSocialEnumsQuery,
  useUpdateUserProfileMutation,
} from "@/store/queries/settings";
import { useTranslation } from "@/app/i18n/client";
import Typography from "@/components/core/common/Typography";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
  refetchUserData: () => void;
}

interface IUpdateValues {
  socialId: string;
  url: string;
}

interface ISocial {
  url: string;
  socialId: {
    _id: string;
  };
}

function SocialChange({
  isUserProfileLoading,
  userData,
  refetchUserData,
}: IProps) {
  const [isEdit, setIsEdit] = useState<boolean>(false);

  const [socialData, setSocialData] = useState<Social[]>([]);
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  const handleRenderSocialIcon = (key: string) => {
    switch (key) {
      case "FACEBOOK":
        return FacebookIcon;
      case "YOUTUBE":
        return YoutubeIcon;
      case "GITHUB":
        return GithubIcon;
      case "INSTAGRAM":
        return InstagramIcon;
      case "LEETCODE":
        return LeetCodeIcon;
    }
  };
  useEffect(() => {
    setSocialData(userData.socials);
  }, [userData]);

  const { result, isFetching, refetch } = useGetSocialEnumsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        result: data?.data ?? [],
        isFetching,
      };
    },
  });

  const handleSubmitChange: FormProps<IUpdateValues>["onFinish"] = async (
    values
  ) => {
    const dataArray: ISocial[] = [];
    const forUpdateValue = {
      url: values.url,
      socialId: {
        _id: values.socialId,
      },
    };
    
    socialData.map((item, index) => {
      let itemDataFilter = {
        url: item.url,
        socialId: {
          _id: item.socialId._id,
        },
      };
      return dataArray.push(itemDataFilter);
    });
    if (values.url !== "" && values.socialId != "") {
      dataArray.push(forUpdateValue);
    }
    try {
      const res = await updateUserProfile({ socials: dataArray });
      setSocialData(res?.data?.data?.socials);
      setIsEdit(false);
      message.success(t("updateSuccess"));
    } catch (error) {
      message.error(t("updateError"));
    }
  };

  const handleDisconnect = async (fromId: string) => {
    const newFilteredList = socialData.filter((item, _) => item._id !== fromId);
    const dataToUpdate: ISocial[] = newFilteredList.map((item, _) => {
      return {
        url: item.url,
        socialId: { _id: item.socialId._id },
      };
    });
    try {
      message.info(t("disconnecting"));
      const res = await updateUserProfile({ socials: dataToUpdate });
      setSocialData([...newFilteredList]);
      message.success(t("disconnected"));
    } catch (error) {
      message.error(t("updateError"));
    }
  };

  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? (
          <Skeleton />
        ) : (
          <S.ContentWrapper>
            <Typography.Title level={3}>{t("socials")}</Typography.Title>
            <S.SocialListContainer>
              <List
                itemLayout="horizontal"
                dataSource={socialData}
                renderItem={(item, index) => (
                  <List.Item key={index}>
                    <List.Item.Meta
                      avatar={
                        <Image
                          src={handleRenderSocialIcon(item.socialId.constant!)!}
                          alt="icon"
                          width={42}
                          height={42}
                        />
                      }
                      title={item.socialId.name}
                      description={
                        <Typography.Text style={{width: "200px"}} ellipsis={true}>
                          <a href={item.url}>{item.url}</a>
                        </Typography.Text>
                      }
                    />
                    <Button
                      type="default"
                      onClick={() => handleDisconnect(item._id)}
                    >
                      {t("disconnect")}
                    </Button>
                  </List.Item>
                )}
              />
              <S.PlusButtonCustom
                type={isEdit ? "primary" : "default"}
                title="Add new"
                size="middle"
                onClick={() => setIsEdit(!isEdit)}
              >
                <PlusOutlined />
              </S.PlusButtonCustom>

              {isEdit && (
                <Form
                  name="basic-form"
                  onFinish={handleSubmitChange}
                  layout="vertical"
                >
                  <Form.Item
                    label={t("platform")}
                    name={"socialId"}
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <S.SelectCustom
                      size="large"
                      onChange={() => {}}
                      placeholder={t("selectPlatfrorm")}
                    >
                      {result.map((item: UserEnum, index: number) => (
                        <Select.Option value={item._id} key={index}>
                          {item.name}
                        </Select.Option>
                      ))}
                    </S.SelectCustom>
                  </Form.Item>
                  <Form.Item
                    label={t("accountLink")}
                    name={"url"}
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <Input size="middle" placeholder={t("enterAccountUrl")} />
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
              )}
            </S.SocialListContainer>
          </S.ContentWrapper>
        )}
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default SocialChange;
