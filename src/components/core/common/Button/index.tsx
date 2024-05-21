import { ButtonProps } from "antd";

import * as S from "./styles";

export interface ButtonCommonProps extends ButtonProps {
  $width?: string;
  children?: React.ReactNode;
}

function Button({
  $width = "fit-content",
  children,
  ...props
}: ButtonCommonProps) {
  return (
    <S.ButtonCommon $width={$width} {...props}>
      {children}
    </S.ButtonCommon>
  );
}

export default Button;
