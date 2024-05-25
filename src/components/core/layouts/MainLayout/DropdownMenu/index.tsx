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

function DropdownMenu() {
  const params = useParams();
  const router = useRouter();
  const locale = useLocale();
  const {userInfo} = useSelector((state: RootState) => state.auth)

  const { t } = useTranslation(params?.locale as string, "layout");

  const sideBarMenuFormat = userDropdownMenu?.map((item: any) => ({
    ...item,
    label: t(item.label),
    link: `/${item.key}`,
  }));

  const handleClickItem = (key: string) => {
    switch (key) {
      case "profile":
        console.log("profile");
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

  const handleToUserName = () => {
    return userInfo.firstname?.concat(" ", userInfo.lastname!);
  }

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
          <p>{handleToUserName()}</p>
          <a>@{userInfo.email}</a>
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
