import React, { use, useEffect, useState } from "react";
import * as S from "./styles";

import { Button, Card, Form, message, Skeleton, Typography } from "antd";
import { useParams } from "next/navigation";

import { UserInfo } from "@/helpers/types/userTypes";
import CustomEditor from "@/components/core/common/CustomEditor";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";
import { EditOutlined } from "@ant-design/icons";
import { useTranslation } from "@/app/i18n/client";

interface IProps {
  isUserProfileFetching: boolean;
  userData: UserInfo;
}

function AboutMe({ isUserProfileFetching, userData }: IProps) {
  const [textEditorData, setTextEditorData] = useState<string>("");
  const [idleText, setIdleText] = useState<string>("");
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [isUpdateSuccess, setIsUpdateSuccess] = useState<boolean>(false);
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();

  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");

  useEffect(() => {
    setTextEditorData(userData.description!);
  }, [userData]);

  const handleSubmitDescription = async () => {
    try {
      const data = {
        description: textEditorData,
      };
      await updateUserProfile(data).unwrap();
      setIsUpdateSuccess(true);
      setIdleText(textEditorData);
      setIsEdit(false);
      message.success(t('updateSuccess'));
    } catch (error) {
      setIsUpdateSuccess(false);
      const err = new Error("Some error");
      message.error(t('updateError'));
    }
  };

  return (
    <S.ContentWrapperDiv>
      <S.CustomCard>
        <S.ContentWrapper>
          {isUserProfileFetching ? (
            <Skeleton />
          ) : (
            <>
              <Typography.Title level={3}>{t("aboutMe")}</Typography.Title>

              <Typography.Text>
                <S.HtmlRenderWrapper
                  dangerouslySetInnerHTML={{
                    __html: `${
                      isUpdateSuccess ? idleText : userData?.description ?? t("noContent")
                    }`,
                  }}
                ></S.HtmlRenderWrapper>
              </Typography.Text>

              <Button
                type={isEdit ? "primary" : "default"}
                icon={<EditOutlined />}
                style={{ width: "fit-content" }}
                onClick={() => setIsEdit(!isEdit)}
              >
                Edit
              </Button>
            </>
          )}

          {isEdit && (
            <Form
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 16,
              }}
            >
              <CustomEditor
                getData={setTextEditorData}
                data={isUpdateSuccess? idleText : userData.description}
              />
              <Button
                type="primary"
                style={{ width: "fit-content" }}
                loading={isLoading}
                onClick={handleSubmitDescription}
              >
                {t("update")}
              </Button>
            </Form>
          )}
        </S.ContentWrapper>
      </S.CustomCard>
    </S.ContentWrapperDiv>
  );
}

export default AboutMe;
