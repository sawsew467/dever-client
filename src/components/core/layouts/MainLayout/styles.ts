import styled from "styled-components";
import { Avatar, Layout, Menu } from "antd";
import { Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";

export const LogoWrapper = styled.div`
  padding: 10px;
`;

export const ButtonWrap = styled.div<{ $collapsed: boolean }>`
  width: fit-content;

  line-height: normal;

  padding: 4px;

  cursor: pointer;

  transform: scaleX(${(props) => (props?.$collapsed ? -1 : 1)});
`;

export const ContainerLayoutCustom = styled(Layout)`
  height: 100vh;
`;

export const LayoutCustom = styled(Layout)`
   padding: 16px 16px !important;

   background: ${props  => props.theme.colors?.backgroundPrimary} !important;

   @media ${props => props.theme.breakpoints.smMax} {
      padding: 0px !important;
    }        
`;

export const SiderCustom = styled(Sider)`
    background:#fff !important;
    padding: 12px 0px;

    position: static !important;

    z-index: 1;

    @media ${props => props.theme.breakpoints.smMax} {
      position: absolute !important;
    }
`;


export const MenuCustom = styled(Menu)`
    background: #fff !important;
    height: fit-content;
    border: none !important;
    @media ${props => props.theme.breakpoints.smMax} {
      height: calc(100vh - 90px);
    }
`;


export const HeaderContainerWrapper = styled.div`
  display: flex;
`;

export const HeaderCustom = styled(Header)`
  display: flex;
  align-items: center;
  justify-content: space-between !important;

  padding: 0px 16px !important;
  
  position: static !important;
  top: 0;
  
  z-index: 10;
  
  background: #fff !important;
  box-shadow: #0098ff33 0px 1px 10px;

  user-select: none;

`;

export const ContentCustom = styled(Layout.Content)`
  padding: 16px;
  margin: 0;
  border-radius: 12px; 

  min-height: 200;

  background-color: #fff;

  overflow: auto;
`;

export const FooterCustom = styled(Layout.Footer)`
  background-color: ${(props) =>
    props?.theme?.colors?.backgroundSecondary} !important;

  margin-top: 16px;
  border-radius: 12px;
  padding: 16px 16px !important ;
`;

export const AvatarCustom = styled(Avatar)`
  border: 1px solid ${(props) => props?.theme?.colors?.primaryLight} !important;
`;
