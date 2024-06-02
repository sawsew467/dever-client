import Image from "next/image";
import { Flex } from "antd";

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
  return (
    <S.Main $isTop1={isTop1}>
      {isTop1 && (
        <Image src={"/icons/crown.svg"} alt="" width={60} height={52} />
      )}
      <S.ImageWrapper>
        <Image src={data?.userId?.avatar} alt="" width={290} height={400} />
        <span>{top}</span>
      </S.ImageWrapper>
      <S.Content>
        <Typography.Title
          level={3}
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
