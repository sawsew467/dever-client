import React, { use, useState } from "react";
import * as S from "./styles";
import { UserInfo } from "@/helpers/types/userTypes";
import { Button, Card, Form, message, Skeleton, Typography } from "antd";
import CustomEditor from "@/components/core/common/CustomEditor";
import { useUpdateUserProfileMutation } from "@/store/queries/settings";
import { EditOutlined } from "@ant-design/icons";

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
  console.log(textEditorData);

  const handleSubmitDescription = async () => {
    try {
      const data = {
        description: textEditorData,
      };
      await updateUserProfile(data).unwrap();
      setIsUpdateSuccess(true);
      setIdleText(textEditorData);
    } catch (error) {
      setIsUpdateSuccess(false);
      const err = new Error("Some error");
      message.error("Cập nhật không thành công");
    }
  };

  return (
    <S.RGalleryCol>
      <Card bordered={false}>
        <S.ContentWrapper>
          {isUserProfileFetching ? (
            <Skeleton />
          ) : (
            <>
              <Typography.Title level={3}>Mô tả bản thân</Typography.Title>

              <Typography.Text>
                <div
                  dangerouslySetInnerHTML={{
                    __html: `${
                      isUpdateSuccess ? idleText : userData.description
                    }`,
                  }}
                ></div>
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
                data={userData.description}
              />
              <Button
                type="primary"
                style={{ width: "fit-content" }}
                loading={isLoading}
                onClick={handleSubmitDescription}
              >
                Cập nhật
              </Button>
            </Form>
          )}
        </S.ContentWrapper>
      </Card>
    </S.RGalleryCol>
  );
}

export default AboutMe;
