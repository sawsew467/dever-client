import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phòng khảo thí | Quản lý người dùng",
};

import UsersManagementModule from "@/components/modules/UsersManagement";

export default function UserManagementPage() {
  return <UsersManagementModule />;
}
