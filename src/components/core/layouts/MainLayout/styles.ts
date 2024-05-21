import styled from "styled-components";
import { Avatar, Layout } from "antd";

export const SiderCustom = styled(Layout.Sider)`
  height: 100vh;

  background-color: ${(props) =>
    props?.theme?.colors?.backgroundSecondary} !important;

  border-right: 1px solid ${(props) => props?.theme?.colors?.secondary} !important;

  position: fixed !important;
  left: 0;
  top: 0;
  bottom: 0;

  overflow: auto;
`;

export const LogoWrapper = styled.div`
  padding: 16px;
`;

export const ButtonWrap = styled.div<{ $collapsed: boolean }>`
  width: fit-content;

  line-height: normal;

  padding: 4px;

  cursor: pointer;

  transform: scaleX(${(props) => (props?.$collapsed ? -1 : 1)});
`;

export const LayoutCustom = styled(Layout)<{ $collapsed: boolean }>`
  margin-left: ${(props) => (props?.$collapsed ? "80px" : "200px")};

  background-color: ${(props) =>
    props?.theme?.colors?.backgroundPrimary} !important;
`;

export const HeaderCustom = styled(Layout.Header)<{ $collapsed: boolean }>`
  width: calc(
    100% - ${(props) => (props?.$collapsed ? "80px" : "200px")}
  ) !important;
  height: auto !important;

  padding: 16px !important;

  background-color: ${(props) =>
    props?.theme?.colors?.backgroundSecondary} !important;

  border-bottom: 1px solid ${(props) => props?.theme?.colors?.secondary} !important;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: fixed !important;
  z-index: 999 !important;

  line-height: normal !important;
`;

export const ContentCustom = styled(Layout.Content)`
  min-height: 100vh !important;

  margin: 89px 16px 0;
`;

export const FooterCustom = styled(Layout.Footer)`
  background-color: ${(props) =>
    props?.theme?.colors?.backgroundSecondary} !important;

  border-top: 1px solid ${(props) => props?.theme?.colors?.secondary} !important;
`;

export const AvatarCustom = styled(Avatar)`
  border: 1px solid ${(props) => props?.theme?.colors?.primaryLight} !important;
`;
