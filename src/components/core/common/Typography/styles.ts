import { Typography } from "antd";
import styled from "styled-components";
import { TextCustomProps, TitleCustomProps } from ".";

export const TextCustom = styled(Typography.Text)<TextCustomProps>`
  text-align: ${(props) => props?.$align} !important;
  color: ${(props) => props?.$color} !important;
  font-size: ${(props) => props?.$fontSize} !important;
  font-weight: ${(props) => props?.$fontWeight} !important;
  line-height: ${(props) => props?.$lineHeight} !important;
  letter-spacing: ${(props) => props?.$letterSpacing} !important;
  text-transform: ${(props) => props?.$textTransform} !important;
  text-decoration: ${(props) => props?.$textDecoration} !important;
  white-space: ${(props) => props?.$whiteSpace} !important;
  word-break: ${(props) => props?.$wordBreak} !important;
  cursor: ${(props) => props?.$cursor} !important;
  margin: ${(props) => props?.$margin} !important;
  padding: ${(props) => props?.$padding} !important;

  text-wrap: balance;
`;
export const TitleCustom = styled(Typography.Title)<TitleCustomProps>`
  text-align: ${(props) => props?.$align} !important;
  color: ${(props) => props?.$color} !important;
  font-size: ${(props) => props?.$fontSize} !important;
  font-weight: ${(props) => props?.$fontWeight} !important;
  line-height: ${(props) => props?.$lineHeight} !important;
  letter-spacing: ${(props) => props?.$letterSpacing} !important;
  text-transform: ${(props) => props?.$textTransform} !important;
  text-decoration: ${(props) => props?.$textDecoration} !important;
  white-space: ${(props) => props?.$whiteSpace} !important;
  word-break: ${(props) => props?.$wordBreak} !important;
  cursor: ${(props) => props?.$cursor} !important;
  margin: ${(props) => props?.$margin} !important;
  padding: ${(props) => props?.$padding} !important;

  text-wrap: balance;
`;
