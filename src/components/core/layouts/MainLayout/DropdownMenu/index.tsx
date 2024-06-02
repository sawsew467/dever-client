import { Avatar, Flex } from "antd";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useLocale } from "next-intl";
import { useRouter } from "next-nprogress-bar";

import Divider from "@/components/core/common/Divider";

import { useTranslation } from "@/app/i18n/client";
import { userDropdownMenu } from "@/helpers/data/userDropdownMenu";
import webStorageClient from "@/utils/webStorageClient";

import * as S from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import Typography from "@/components/core/common/Typography";
import themeColors from "@/style/themes/default/colors";

function DropdownMenu() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const {userInfo} = useSelector((state: RootState) => state.auth)

  console.log(userInfo.nickname);

  const { t } = useTranslation(params?.locale as string, "layout");

  const sideBarMenuFormat = userDropdownMenu?.map((item: any) => ({
    ...item,
    label: t(item.label),
    link: `/${item.key}`,
  }));

  const handleClickItem = (key: string) => {
    switch (key) {
      case "profile":
        router.push(`/${locale}/profile/${userInfo.id}`);
        break;
      case "settings":
        router.push(`/${locale}/settings`)
        break;
      case "logout":
        webStorageClient.removeAll()
        router.push(`/${locale}/sign-in`);
        break;
      default:
        break;
    }
  };

  return (
    <Flex vertical>
      <Flex gap={8} align="center">
        <Avatar
          size={28}
          src={
            <Image
              src={userInfo.avatar != null ? userInfo.avatar : "/images/avatar/avatar.jpg"}
              alt="avatar"
              width={28}
              height={28}
            />
          }
        />
        <Flex vertical>
          <p>{userInfo.firstname! ?? ""} {userInfo.lastname! ?? ""}</p>
          <Typography.Text $width="150px" $color={themeColors.primary} ellipsis={true} >@{userInfo.email}</Typography.Text >
        </Flex>
      </Flex>
      <Divider $margin={8} />
      <S.MenuCustom
        items={sideBarMenuFormat}
        onClick={(e) => handleClickItem(e?.key)}
      />
    </Flex>
  );
}

export default DropdownMenu;
