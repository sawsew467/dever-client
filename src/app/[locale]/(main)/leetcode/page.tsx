import { Metadata } from "next";

import LeetcodeModule from "@/components/modules/Leetcode/Main";

export const metadata: Metadata = {
  title: "FU-DEVER | Leetcode",
};

function AllMember() {
  return <LeetcodeModule />;
}

export default AllMember;
