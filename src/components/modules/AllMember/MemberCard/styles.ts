import styled from "styled-components";
import { Image, Select as SelectFromAntd } from "antd";

export const ComponentsWrapper = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  
  padding: 10px 0px 20px 0px;  
  
  transition: 300ms;
  
  cursor: pointer;
  
  &:hover{
    scale: 1.02;
  }
`;

export const ItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const CustomImage = styled.div`
    width: 100%;
    height: 220px;
    border-radius: 12px !important;
    overflow: hidden;
`;

export const Gen = styled.div`
  position: absolute;
  top: 10px;
  left: 10px;
  
  font-size: 20px;
  font-weight: 600;
  color: white;
  background-color: ${(props) => props?.theme?.colors.primaryOpacity} !important; 

  padding: 0px 16px;
  border-radius: 10px;

  display: flex;
  align-items: center;
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column; 
    text-align: center;
`;