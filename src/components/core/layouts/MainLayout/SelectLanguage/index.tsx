import type { MenuProps } from "antd";
import { Avatar, Flex, Typography } from "antd";
import { CaretDownOutlined } from "@ant-design/icons";
import Image from "next/image";
import { useTransition } from "react";
import { useRouter } from "next-nprogress-bar";
import { useParams, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

import { getPathname } from "@/utils/getPathname";
import { useTranslation } from "@/app/i18n/client";

import usa from "@public/images/languages/usa.webp";
import vietnam from "@public/images/languages/vietnam.png";

import * as S from "./styles";

type MenuItem = Required<MenuProps>["items"][number];

function SelectLanguage() {
  const router = useRouter();
  const pathname = usePathname();
  const localActive = useLocale();
  const params = useParams();
  const [_, startTransition] = useTransition();

  const { t } = useTranslation(params?.locale as string, "layout");

  const handleClick: MenuProps["onClick"] = (e) => {
    startTransition(() => {
      router.replace(`/${e?.key}/${getPathname(pathname)}`);
    });
  };

  const items: MenuItem[] = [
    {
      key: "en",
      icon: (
        <Avatar
          src={
            <Image
              src={"/images/languages/usa.webp"}
              alt="bell"
              width={20}
              height={20}
            />
          }
          size="small"
        />
      ),
      label: t("english"),
    },
    {
      key: "vi",
      icon: (
        <Avatar
          src={
            <Image
              src={"/images/languages/vietnam.png"}
              alt="bell"
              width={20}
              height={20}
            />
          }
          size="small"
        />
      ),
      label: t("vietnamese"),
    },
  ];

  return (
    <S.PopoverCustom
      trigger="click"
      placement="bottomRight"
      content={
        <S.MenuLanguage
          defaultSelectedKeys={[localActive]}
          mode="inline"
          items={items}
          onClick={handleClick}
        />
      }
    >
      <Flex gap={8} align="center">
        <Avatar
          src={
            <Image
              src={localActive === "en" ? usa : vietnam}
              alt="bell"
              width={20}
              height={20}
            />
          }
          size="small"
        />
        <Flex align="center" gap={4}>
          <Typography.Text>
            {localActive === "en" ? t("english") : t("vietnamese")}
          </Typography.Text>
          <CaretDownOutlined />
        </Flex>
      </Flex>
    </S.PopoverCustom>
  );
}

export default SelectLanguage;
