"use client";

import { TextProps } from "antd/es/typography/Text";
import { TitleProps } from "antd/es/typography/Title";

import * as S from "./styles";

interface TypographyCustomProps {
  $align?: "left" | "right" | "center" | "justify";
  $color?: string;
  $fontSize?: string;
  $fontWeight?: number;
  $lineHeight?: string;
  $letterSpacing?: string;
  $textTransform?: "none" | "uppercase" | "lowercase" | "capitalize";
  $textDecoration?: "none" | "underline";
  $ellipsis?: boolean;
  $whiteSpace?: "normal" | "nowrap" | "pre-line";
  $wordBreak?: "normal" | "break-all";
  $cursor?: "pointer";
  $margin?: string;
  $padding?: string;

  children: React.ReactNode;
}

export interface TextCustomProps extends TypographyCustomProps, TextProps {
  children: React.ReactNode;
}

function Text({
  children,
  $align = "left",
  $margin = "0",
  $padding = "0",
  $color,
  $fontSize,
  $fontWeight,
  $lineHeight,
  $letterSpacing,
  $textTransform,
  $textDecoration,
  $ellipsis = false,
  $whiteSpace,
  $wordBreak,
  ...props
}: TextCustomProps) {
  return (
    <S.TextCustom
      $align={$align}
      $color={$color}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $lineHeight={$lineHeight}
      $letterSpacing={$letterSpacing}
      $textTransform={$textTransform}
      $textDecoration={$textDecoration}
      $ellipsis={$ellipsis}
      $whiteSpace={$whiteSpace}
      $wordBreak={$wordBreak}
      $margin={$margin}
      $padding={$padding}
      {...props}
    >
      {children}
    </S.TextCustom>
  );
}

export interface TitleCustomProps extends TypographyCustomProps, TitleProps {
  children: React.ReactNode;
}
function Title({
  children,
  $align = "left",
  $margin = "0",
  $padding = "0",
  $color,
  $fontSize,
  $fontWeight,
  $lineHeight,
  $letterSpacing,
  $textTransform,
  $textDecoration,
  $ellipsis = false,
  $whiteSpace,
  $wordBreak,
  ...props
}: TitleCustomProps) {
  return (
    <S.TitleCustom
      $align={$align}
      $color={$color}
      $fontSize={$fontSize}
      $fontWeight={$fontWeight}
      $lineHeight={$lineHeight}
      $letterSpacing={$letterSpacing}
      $textTransform={$textTransform}
      $textDecoration={$textDecoration}
      $ellipsis={$ellipsis}
      $whiteSpace={$whiteSpace}
      $wordBreak={$wordBreak}
      $margin={$margin}
      $padding={$padding}
      {...props}
    >
      {children}
    </S.TitleCustom>
  );
}

const Typography = { Text, Title };

export default Typography;
