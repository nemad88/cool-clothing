import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  margin-bottom: 10rem;
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
  width: 70%;
  border-bottom: 1px solid black;
  padding: 1rem;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 800px) {
    width: 80%;
  }
`;

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.customWidth};
  font-size: 1.6rem;
  text-align: center;

  @media screen and (max-width: 1000px) {
    flex-direction: column-reverse;
  }
`;

export const TableHead = styled.div`
  width: ${(props) => props.customWidth};
  font-size: 1.4rem;
  text-align: center;
`;

export const StyledComponents = {
  Table,
  TableRow,
  TableHead,
  Cell,
};
