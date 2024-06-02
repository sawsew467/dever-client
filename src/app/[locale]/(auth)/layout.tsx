import { getCookie } from "cookies-next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

import AuthLayout from "@/components/core/layouts/AuthLayout";

import { constants } from "@/settings";

export default function RootAuthLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const token = getCookie(constants.ACCESS_TOKEN, { cookies });

  if (token) {
    redirect(`/${locale}/all-member`);
  }

  return <AuthLayout>{children}</AuthLayout>;
}
