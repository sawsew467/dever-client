import styled from "styled-components";
import { Select as SelectFromAntd } from "antd";
import { Content } from "antd/es/layout/layout";

export const PageWrapper = styled.section`
  display: flex;
  flex-direction: column;

  width: 100%;
  height: 100%;

  padding-bottom: 16px;
`;


export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-bottom: 24px;
`;

export const CustomContent = styled(Content)`
    background: white;
    border-radius: 16px;
    padding: 20px;
`

export const ComponentsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const ItemWrapper = styled.div`
    max-width: 540px;

    display: flex;
    flex-direction: row;
    gap: 20px;
`;
export const FilterWrapper = styled.div`
    width: 40px;
    height: 40px;
    padding: 20px;
    border-radius: 6px;

    color: ${(props) => props?.theme?.colors.primaryDarker} !important;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #cccccc4a;

    cursor: pointer;
    
    transition: 300ms;
    
    &:hover {
      background-color: #cccccc75;
    }
`
export const MapWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;