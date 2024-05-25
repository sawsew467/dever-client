"use client";

import React, { useCallback, useLayoutEffect, useState } from "react";
import Image from "next/image";
import {
  LaptopOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  NotificationOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Button, Flex, Grid, Layout, Menu, Popover, message } from "antd";
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
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { constants } from "@/settings";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { assignUserInfo } from "@/store/slices/auth";

const MainLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const params = useParams();
  const router = useRouter();
  const localActive = useLocale();
  const pathname = usePathname();
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();
  const dispatch = useDispatch();

  console.log(screens);

  const { userInfo } = useSelector((state: RootState) => state.auth);
  const { t } = useTranslation(params?.locale as string, "layout");

  const [collapsed, setCollapsed] = useState<boolean>(false);
  const [isShowMenu, setIsShowMenu] = useState<boolean>(false);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const [verifyToken] = useVerifyTokenMutation();

  const email = webStorageClient.get(constants.MAIL);
  const fname = webStorageClient.get(constants.FN);
  const lname = webStorageClient.get(constants.LN);
  const avatar = webStorageClient.get(constants.AVT);
  
  console.log(avatar);

  const handleVerifyToken = useCallback(async () => {
    try {
      if (!webStorageClient.get("_access_token")) {
        message.error(t("token_not_valid"));
        throw new Error(t("token_not_valid"));
      }
      const res: any = await verifyToken(
        webStorageClient.get("_access_token") || "??"
      ).unwrap();

      setIsAuth(true);
      message.success(t("checkedAccess"));

      //assign redux auth state
      dispatch(
        assignUserInfo({
          email: email,
          firstname: fname,
          lastname: lname,
          avatar: avatar,
          nickname: "",
        })
      );
    } catch (error) {
      setIsAuth(false);
      webStorageClient.removeAll();
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
        <Layout
          style={{
            height: "100vh",
          }}
        >
          <S.HeaderCustom>
            <S.HeaderContainerWrapper>
              <S.LogoWrapper>
                <div className="demo-logo-vertical">
                  <Flex align="center" justify="space-between">
                    <Flex align="center" gap={12}>
                      <Image
                        alt=""
                        src={"/icons/layout/fu-dever-logo.png"}
                        width={40}
                        height={40}
                        style={{ cursor: "pointer" }}
                        onClick={() => setCollapsed(!collapsed)}
                      />
                      {!collapsed && (
                        <Typography.Title
                          level={4}
                          $color={themes?.default?.colors?.primary}
                          $fontWeight={800}
                          onClick={() =>
                            router?.push(`/${localActive}/all-member`)
                          }
                        >
                          {screens.xs ? "" : "FU - DEVER"}
                        </Typography.Title>
                      )}
                    </Flex>
                  </Flex>
                </div>
              </S.LogoWrapper>
            </S.HeaderContainerWrapper>
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
                      <Image src={avatar} alt="avatar" width={64} height={64} />
                    }
                  />
                </Flex>
              </Popover>
            </Flex>
          </S.HeaderCustom>
          <Layout>
            <S.SiderCustom
              trigger={null}
              width={200}
              breakpoint="lg"
              collapsed={collapsed}
              collapsedWidth={screens?.sm == true ? 80 : 0}
              onCollapse={() => setCollapsed(!collapsed)}
            >
              <S.MenuCustom
               
                mode="inline"
                // defaultSelectedKeys={["all-member"]}
                // defaultOpenKeys={["all-member"]}
                onClick={(e) => {
                  router?.push(`/${localActive}/${e?.key}`);
                }}
                items={sideBarMenuFormat}
              />
            </S.SiderCustom>
            <S.LayoutCustom>
              <S.ContentCustom>{children}</S.ContentCustom>
              <S.FooterCustom>
                <p>COPYRIGHT © 2024 DashTail All rights Reserved</p>
              </S.FooterCustom>
            </S.LayoutCustom>
          </Layout>
        </Layout>
      )}
    </>
  );
};

export default MainLayout;
