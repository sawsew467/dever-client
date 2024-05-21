import styled from "styled-components";
import { Select as SelectFromAntd } from "antd";

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

export const TableWrapper = styled.div`
  width: 100%;

  margin-bottom: 24px;
`;

export const FilterWrapper = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  gap: 8px;
  margin-bottom: 24px;

  input[type="file"] {
    width: 0;
    height: 0;
  }

  .search {
    width: 30%;
  }
`;
export const Select = styled(SelectFromAntd)`
  width: 100%;
`;
