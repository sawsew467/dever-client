import AllMemberModule from "@/components/modules/AllMember";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "FU-DEVER | Danh sách thành viên",
};

function AllMember() {
  return <AllMemberModule />;
}

export default AllMember;
