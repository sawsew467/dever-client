import { Metadata } from "next";

import SignInModule from "@/components/modules/SignIn";

export const metadata: Metadata = {
  title: " Đăng nhập | Fu - Dever",
};

function SignInPage() {
  return <SignInModule />;
}

export default SignInPage;
