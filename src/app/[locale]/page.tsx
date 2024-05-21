import { redirect } from "next/navigation";

export default function RootPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  redirect(`/${locale}/all-member`);
}
