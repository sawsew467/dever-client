import Image from "next/image";
import { Flex, Grid } from "antd";

import Typography from "@/components/core/common/Typography";

import * as S from "./styles";

function Card({
  data,
  top,
  isTop1,
}: {
  data: any;
  top: number;
  isTop1?: boolean;
}) {

  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  return (
    <S.Main $isTop1={isTop1}>
      {isTop1 && (
        <Image src={"/icons/crown.svg"} alt="" width={screens.lg ? 60 : screens.sm ? 52 : 32} height={screens.lg ? 52 : screens?.sm ? 42 : 38} />
      )}
      <S.ImageWrapper>
        <Image src={data?.userId?.avatar} alt="" width={290} height={400} />
        <span>{top}</span>
      </S.ImageWrapper>
      <S.Content>
        <Typography.Title
          level={screens.md ? 3 : 5} $align="center"
        >{`${data?.userId?.firstname} ${data?.userId?.lastname}`}</Typography.Title>
        <Flex justify="center" gap={4}>
          <Image src={"/icons/leetcode.svg"} alt="" width={20} height={20} />
          <Typography.Text>
            {data?.acSubmissionList?.length * 10} Pts
          </Typography.Text>
        </Flex>
      </S.Content>
    </S.Main>
  );
}

export default Card;
