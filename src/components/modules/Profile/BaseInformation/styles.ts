import { Avatar, Card, Image } from "antd";
import styled from "styled-components";

export const ContainerWrapper = styled.div`
`;

export const CustomCard = styled(Card)`
  border-radius: 12px !important;
  .ant-card-body {
    padding: 16px !important;
  }
`;

export const MainContentWrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;;
`;

export const PreviewGroupCustom = styled(Image.PreviewGroup)`

`;

export const AvatarCustom = styled(Image)`
  width: 140px !important;
  height: 140px !important;
  object-fit: cover;

  border-radius: 10px !important;

`;

export const AvatarWrapper = styled.div`
    display: flex;
    gap: 16px;
    flex-direction: row;

    @media ${(props) => props.theme.breakpoints.xxlMax} {
        flex-direction: column;
    }
`;
export const RSideContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`