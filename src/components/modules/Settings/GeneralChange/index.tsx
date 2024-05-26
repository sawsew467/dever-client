import * as S from "./styles";

import {
  Button,
  Col,
  Form,
  FormProps,
  Grid,
  Input,
  InputNumber,
  message,
  Row,
  Select,
  Skeleton,
  Typography,
} from "antd";
import moment from "moment";
import { useParams } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import dayjs from "dayjs";

import { useTranslation } from "@/app/i18n/client";
import { UserEnum, UserInfo } from "@/helpers/types/userTypes";
import {
  useGetDepartmentEnumsQuery,
  useGetMajorEnumsQuery,
  useGetPositionEnumsQuery,
  useUpdateUserProfileMutation,
} from "@/store/queries/settings";
import { constants } from "@/settings";
import { applyChangeName } from "@/store/slices/auth";
import webStorageClient from "@/utils/webStorageClient";

interface IProps {
  isUserProfileLoading: boolean;
  userData: UserInfo;
}

interface IUpdateValues {
  firstname: string;
  lastname: string;
  gen: string;
  MSSV: string;
  hometown: string;
  job: string;
  majorId: string;
  positionId: string;
  departmetns: string[];
  school: string;
  workspace: string;
}

function GeneralChange({ isUserProfileLoading, userData }: IProps) {
  const params = useParams();
  const { t } = useTranslation(params?.locale as string, "settings");
  const [myForm] = Form.useForm();
  const [updateUserProfile, { isLoading }] = useUpdateUserProfileMutation();
  const dispatch = useDispatch();

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const onFinish: FormProps<IUpdateValues>["onFinish"] = async (values) => {
    try {
      const res = await updateUserProfile(values);
      dispatch(
        applyChangeName({
          firstname: values.firstname,
          lastname: values.lastname,
        })
      );
      webStorageClient.set(constants.FN, values.firstname);
      webStorageClient.set(constants.LN, values.lastname);
      message.success(t("updateSuccess"));
    } catch (error) {
      message.error(t("updateError"));
    }
  };

  const { positionEnums } = useGetPositionEnumsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        positionEnums: data?.data ?? [],
        isFetching,
      };
    },
  });

  const { departmentEnums } = useGetDepartmentEnumsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        departmentEnums: data?.data ?? [],
        isFetching,
      };
    },
  });

  const { majorEnums } = useGetMajorEnumsQuery(undefined, {
    selectFromResult: ({ data, isFetching }) => {
      return {
        majorEnums: data?.data ?? [],
        isFetching,
      };
    },
  });

  useEffect(() => {
    const departmentIds: string[] = userData.departments?.map(
      (item: UserEnum, _) => {
        return item._id;
      }
    );
    myForm.setFieldsValue({
      firstname: userData?.firstname,
      lastname: userData?.lastname,
      dob: dayjs(userData?.dob),
      gen: userData.gen,
      MSSV: userData.MSSV,
      hometown: userData?.hometown,
      job: userData?.job,
      majorId: userData?.majorId?._id,
      positionId: userData?.positionId?._id,
      departments: departmentIds,
      school: userData?.school,
      workspace: userData?.workplace,
    });
  }, [userData]);

  const handleFillGridEntryScreen = () => {
    if (screens.lg) return 12;
    if (screens.md) return 24;
    if (screens.sm) return 24;
    if (screens.xs) return 24;
  };
  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        {isUserProfileLoading ? (
          <Skeleton />
        ) : (
          <S.ContentWrapper>
            <Typography.Title level={3}>{t("general")}</Typography.Title>
            <Form
              name="generalUpdateForm"
              onFinish={onFinish}
              layout="vertical"
              style={{
                display: "flex",
                flexDirection: "column",
              }}
              form={myForm}
            >
              <Row gutter={16}>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("firstname")}
                    name="firstname"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <Input placeholder={t("enterFirstname")} />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("lastname")}
                    name="lastname"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <Input placeholder={t("enterLastname")} />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("studentId")}
                    name="MSSV"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <Input placeholder={t("enterStudentId")} />
                  </Form.Item>
                </Col>
                
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("birthday")}
                    name="dob"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <S.DatePickerCustom
                      size="large"
                      placeholder={t("enterBirthday")}
                    />
                  </Form.Item>
                </Col>

                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("gen")}
                    name="gen"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <InputNumber style={{width: "100%"}} size="middle" min={1} max={10} placeholder={t("enterGen")} />
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("hometown")}
                    name="hometown"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <Input placeholder={t("enterHometown")}/>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("job")}
                    name="job"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <Input placeholder={t("enterJob")}/>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("position")}
                    name="positionId"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <S.SelectCustom
                      disabled
                      size="large"
                      placeholder={t("enterPosition")}
                    >
                      {positionEnums.map((item: UserEnum, index: number) => (
                        <Select.Option value={item._id} key={index}>
                          {t(item.constant)}
                        </Select.Option>
                      ))}
                    </S.SelectCustom>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("department")}
                    name="departments"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <S.SelectCustom
                      disabled
                      mode="multiple"
                      allowClear
                      size="large"
                      placeholder={t("enterDepartment")}
                    >
                      {departmentEnums.map((item: UserEnum, index: number) => (
                        <Select.Option value={item._id} key={index}>
                          {t(item.constant)}
                        </Select.Option>
                      ))}
                    </S.SelectCustom>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("major")}
                    name="majorId"
                    wrapperCol={{ span: 24 }}
                    rules={[{ required: true, message: t("cantBeEmpty") }]}
                  >
                    <S.SelectCustom size="large" placeholder={t("enterMajor")}>
                      {majorEnums.map((item: UserEnum, index: number) => (
                        <Select.Option value={item._id} key={index}>
                          {t(item.constant)}
                        </Select.Option>
                      ))}
                    </S.SelectCustom>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("school")}
                    name="school"
                    wrapperCol={{ span: 24 }}
                  >
                    <Input placeholder={t("enterSchool")}/>
                  </Form.Item>
                </Col>
                <Col className="gutter-row" span={handleFillGridEntryScreen()}>
                  <Form.Item
                    label={t("workspace")}
                    name="workspace"
                    wrapperCol={{ span: 24 }}
                  >
                    <Input placeholder={t("enterWorkspace")} />
                  </Form.Item>
                </Col>
              </Row>
              <S.FormItemNotMB>
                <Button
                  htmlType="submit"
                  type="primary"
                  style={{ width: "fit-content" }}
                  loading={isLoading}
                >
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

export default GeneralChange;
