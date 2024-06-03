import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import MainLayout from "@/components/core/layouts/MainLayout";

import { constants } from "@/settings";

export default function RootMainLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const token = getCookie(constants.ACCESS_TOKEN, { cookies });


  if (!token) {
    redirect(`/${locale}/sign-in`);
  }

  return <MainLayout>{children}</MainLayout>;
}
