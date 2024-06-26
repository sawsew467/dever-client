"use client";

import Image from "next/image";
import Link from "next/link";
import { Checkbox, Col, Flex, Form, FormProps, Input, message } from "antd";
import { useRouter } from "next-nprogress-bar";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";

import Button from "@/components/core/common/Button";
import SelectLanguage from "@/components/core/layouts/MainLayout/SelectLanguage";
import Typography from "@/components/core/common/Typography";

import themeColors from "@/style/themes/default/colors";
import { useTranslation } from "@/app/i18n/client";
import { useSignInMutation } from "@/store/queries/auth";

import * as S from "./styles";

type FieldType = {
  email: string;
  password: string;
  remember: string;
};

function SignInModule() {
  const router = useRouter();
  const params = useParams();
  const locale = useLocale();

  const { t } = useTranslation(params?.locale as string, "signIn");

  const [signIn, { isLoading }] = useSignInMutation();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    try {
      const res: any = await signIn(values).unwrap();

      router?.push(`/${locale}/members`);
    } catch (error) {
      message.error(t("Sai thông tin đăng nhập"));
    }
  };

  return (
    <S.Wrapper>
      <Flex justify="space-between">
        <Image
          alt=""
          src={"/icons/layout/fu-dever-logo.png"}
          width={40}
          height={40}
        />
        <SelectLanguage />
      </Flex>
      <Typography.Title
        level={2}
        $color={themeColors?.primary}
        $align="center"
        $margin="32px 0px 16px 0"
      >
        {t("welcome")}
      </Typography.Title>
      <Typography.Text $align="center" $margin="0px 0px 32px 0">
        {t("description")}
      </Typography.Text>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item<FieldType>
          label="Email"
          name="email"
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: t("emailError") }]}
        >
          <Input
            placeholder={t("enterEmail")}
            autoComplete="current-password"
          />
        </Form.Item>

        <Form.Item<FieldType>
          label={t("password")}
          name="password"
          wrapperCol={{ span: 24 }}
          rules={[{ required: true, message: t("passwordError") }]}
        >
          <Input.Password placeholder={t("enterPassword")} />
        </Form.Item>

        <Col span={24}>
          <Flex align="flex-start" justify="space-between">
            <Form.Item<FieldType>
              wrapperCol={{ span: 24 }}
              name="remember"
              valuePropName="checked"
            >
              <Checkbox>{t("rememberMe")}</Checkbox>
            </Form.Item>
            {/* <Link href={""}>{t("forgotPassword")}</Link> */}
          </Flex>
        </Col>

        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            type="primary"
            htmlType="submit"
            $width="100%"
            loading={isLoading}
          >
            {t("signIn")}
          </Button>
        </Form.Item>
      </Form>
      {/* <Flex justify="center" gap={4}>
        <p>{t("dontHaveAccount")}</p>
        <Link href={`/${locale}/sign-up`}>{t("signUp")}</Link>
      </Flex> */}
    </S.Wrapper>
  );
}

export default SignInModule;
