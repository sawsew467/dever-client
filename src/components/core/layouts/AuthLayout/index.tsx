"use client";

import * as S from "./styles";

function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <S.Wrapper>
      <S.BoxContainer>{children}</S.BoxContainer>
    </S.Wrapper>
  );
}

export default AuthLayout;
