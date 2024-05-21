"use client";

import React, { useCallback, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { MenuFoldOutlined } from "@ant-design/icons";
import { Flex, Layout, Menu, Popover, message } from "antd";
import { useParams, usePathname } from "next/navigation";
import { AppProgressBar, useRouter } from "next-nprogress-bar";
import { useLocale } from "next-intl";

import DropdownMenu from "./DropdownMenu";
import SelectLanguage from "./SelectLanguage";
import Typography from "../../common/Typography";
import LoadingScreen from "../../common/LoadingScreen";

import { sidebarMenu } from "@/helpers/data/sidebarMenu";
import { useTranslation } from "@/app/i18n/client";
import { themes } from "@/style/themes";
import { useVerifyTokenMutation } from "@/store/queries/auth";
import webStorageClient from "@/utils/webStorageClient";
import { getRootPathname } from "@/utils/getPathname";
import themeColors from "@/style/themes/default/colors";

import * as S from "./styles";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const params = useParams();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();

  const { t } = useTranslation(params?.locale as string, "layout");

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [verifyToken] = useVerifyTokenMutation();

  const handleVerifyToken = useCallback(async () => {
    try {
      if (!webStorageClient.get("_access_token")) {
        message.error("Bạn cần đăng nhập để truy cập trang này");
        throw new Error("Bạn cần đăng nhập để truy cập trang này");
      }
      const res: any = await verifyToken(
        webStorageClient.get("_access_token") || "??"
      ).unwrap();
      if (!res?.data?.isAdmin) {
        message.error("Bạn không có quyền truy cập trang này");
        throw new Error("Bạn không có quyền truy cập trang này");
      }
      setIsAuth(true);
      message.success("Kiểm tra truy cập thành công");
    } catch (error) {
      setIsAuth(false);
      webStorageClient.remove("_access_token");
      router.push(`/${localActive}/sign-in`);
    }
  }, [localActive, router, verifyToken]);

  useLayoutEffect(() => {
    handleVerifyToken();
  }, [handleVerifyToken]);

  const sideBarMenuFormat = sidebarMenu?.map((item: any) => ({
    ...item,
    label: t(item.label),
    link: `/${item.key}`,
  }));

  return (
    <>
      {!isAuth ? (
        <LoadingScreen />
      ) : (
        <Layout hasSider>
          <S.SiderCustom trigger={null} collapsible collapsed={collapsed}>
            <S.LogoWrapper
              onClick={() => router?.push(`/${localActive}/dashboard`)}
            >
              <div className="demo-logo-vertical">
                <Flex align="center" justify="space-between">
                  <Flex align="center" gap={12}>
                    <Image
                      alt=""
                      src={"/icons/layout/logo.svg"}
                      width={40}
                      height={40}
                    />
                    {!collapsed && (
                      <Typography.Title
                        level={4}
                        $color={themes?.default?.colors?.primary}
                      >
                        Khảo thí
                      </Typography.Title>
                    )}
                  </Flex>
                </Flex>
              </div>
            </S.LogoWrapper>

            <Menu
              mode="inline"
              defaultSelectedKeys={["user-management"]}
              items={sideBarMenuFormat}
              onClick={(e) => router?.push(`/${localActive}/${e?.key}`)}
            />
          </S.SiderCustom>
          <S.LayoutCustom $collapsed={collapsed}>
            <AppProgressBar
              height="4px"
              color={themeColors.primary}
              options={{ showSpinner: false }}
              shallowRouting
            />
            <S.HeaderCustom $collapsed={collapsed}>
              <S.ButtonWrap
                onClick={() => setCollapsed((prev) => !prev)}
                $collapsed={collapsed}
              >
                <MenuFoldOutlined />
              </S.ButtonWrap>
              <Flex align="center" gap={20}>
                <SelectLanguage />
                <Popover
                  content={<DropdownMenu />}
                  trigger="click"
                  open={isShowMenu}
                  onOpenChange={() => setIsShowMenu(!isShowMenu)}
                  placement="bottomRight"
                >
                  <Flex>
                    <S.AvatarCustom
                      size={40}
                      src={
                        <Image
                          src={"/images/avatar/avatar.jpg"}
                          alt="avatar"
                          width={64}
                          height={64}
                        />
                      }
                    />
                  </Flex>
                </Popover>
              </Flex>
            </S.HeaderCustom>
            <S.ContentCustom>{children}</S.ContentCustom>
            <S.FooterCustom>
              <p>COPYRIGHT © 2024 DashTail All rights Reserved</p>
            </S.FooterCustom>
          </S.LayoutCustom>
        </Layout>
      )}
    </>
  );
};

export default MainLayout;
