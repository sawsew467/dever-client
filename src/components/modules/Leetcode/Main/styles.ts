import styled from "styled-components";
import { Input, Row, Select as SelectFromAntd } from "antd";
import { Content } from "antd/es/layout/layout";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  gap: 16px;
`;

export const Head = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media ${(props) => props.theme.breakpoints.smMax} {
    flex-direction: column;
    gap: 16px;
  }
`;
export const HeadTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media ${(props) => props.theme.breakpoints.smMax} {
    flex-direction: column;
    gap: 16px;
  }
`;

export const HeadFilter = styled.div``;

export const CustomContent = styled(Content)`
  background: white;

  border-radius: 16px;

  overflow: auto;
  overflow-x: hidden;

  display: flex;
  justify-content: center;
`;

export const ComponentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const ItemWrapper = styled.div`
  max-width: 540px;

  display: flex;
  flex-direction: row;

  @media ${(props) => props.theme.breakpoints.smMax} {
    max-width: 100%;
    gap: 16px;
  }
`;
export const FilterWrapper = styled.div`
  width: 40px;
  height: 40px;
  padding: 20px;
  border-radius: 6px;

  border: 1px solid ${(props) => props?.theme?.colors?.borderPrimary};

  color: ${(props) => props?.theme?.colors.primaryDarker} !important;

  display: flex;
  align-items: center;
  justify-content: center;

  /* background: #cccccc4a; */

  cursor: pointer;

  transition: 300ms;

  &:hover {
    background-color: ${(props) => props?.theme?.colors?.backgroundPrimary};
  }
`;
export const MapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;
export const SpinWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const InputCustom = styled(Input)`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.smMax} {
    width: 400px !important;
  }
`;

export const RowCustom = styled(Row)`
  @media ${(props) => props.theme.breakpoints.mdMax} {
    gap: 12px;
  }
`;

export const TopWrapper = styled.div`
  margin: 60px 0;

  display: flex;
  justify-content: center;
  gap: 80px;

  @media ${(props) => props.theme.breakpoints.lgMax} {
    gap: 16px;
  }
`;

export const RankCard = styled.div`
  cursor: pointer;

  display: flex;
  padding: 20px 60px; 

  width: 100%;

  background-color: ${(props) => props.theme.colors.backgroundSecondary};

  box-shadow: 0px 4px 8px rgba(82, 38, 153, 0.06);

  border-radius: 16px;
  transition: 300ms;
  &:hover {
    background-color: ${(props) => props.theme.colors.primaryLighter};
  }
  @media ${(props) => props.theme.breakpoints.smMax} {
    padding: 10px 20px;
  }
`;
