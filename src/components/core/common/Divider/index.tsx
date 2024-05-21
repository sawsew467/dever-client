import { DividerProps } from "antd";
import * as S from "./styles";

export interface DividerCommonProps extends DividerProps {
  $margin?: number;
}

function Divider({ $margin, ...props }: DividerCommonProps) {
  return <S.DividerCommon $margin={$margin} {...props} />;
}

export default Divider;
