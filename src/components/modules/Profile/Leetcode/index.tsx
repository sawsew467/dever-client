import React from "react";
import * as S from "./styles";
import { UserInfo } from "@/helpers/types/userTypes";
import { Flex, Skeleton } from "antd";
import Typography from "@/components/core/common/Typography";
import moment from "moment";

interface IProps {
  userData: UserInfo;
  isUserDataFetching: boolean;
}

function LeetCode({ userData, isUserDataFetching }: IProps) {
  console.log(userData);
  return (
    <S.ContainerWrapper>
      <S.CustomCard>
        <Flex vertical>
          <Typography.Title level={3} $fontWeight={700}>
            {"LeetCode"}
          </Typography.Title>
        </Flex>
        <Flex vertical gap={12}>
          {userData?.acSubmissionList?.map((item, index) => {
            return (
              <S.TextWrapper key={index}>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {item.title}
                  </Typography.Text>
                  <Typography.Text $fontSize="16px" $fontWeight={700}>
                    {moment(item.date).toDate().toLocaleDateString()}
                  </Typography.Text>
              </S.TextWrapper>
            );
          })}
        </Flex>
      </S.CustomCard>
    </S.ContainerWrapper>
  );
}

export default LeetCode;
