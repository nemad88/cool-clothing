import styled from "styled-components";

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  text-align: center;
`;

export const TableRow = styled.div`
  display: flex;
  flex-direction: row;
  min-width: 35rem;
  width: 60%;
  border-bottom: 1px solid black;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;
`;

export const TableColumn = styled.div`
  width: ${(props) => props.customWidth};
  font-size: 1.6rem;
  text-align: center;
`;

export const TableHead = styled.div`
  width: ${(props) => props.customWidth};

  text-align: center;
`;

export const StyledComponents = {
  Table,
  TableRow,
  TableHead,
  TableColumn,
};
