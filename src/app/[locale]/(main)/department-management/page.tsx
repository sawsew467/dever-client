import DepartmentManagementModule from "@/components/modules/DepartmentManagement";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Phòng khảo thí | Quản lý Ban",
};

export default function DashboardPage() {
  return <DepartmentManagementModule />;
}
