import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Providers from "@/providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FU - DEVER",
  description: "Fu-Dever dashboard cho thành viên",
  icons: "/icons/layout/fu-dever-logo.png",
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: {
    locale: string;
  };
}>) {
  return (
    <html lang={params?.locale || "vi"}>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
