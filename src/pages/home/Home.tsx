import styled from "styled-components";

const Main = styled.main`
  grid-area: main;
  border: 1px dashed red;
  width: 100%;
  height: 92.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Section = styled.section`
  /* grid-area: content; */
  width: inherit;
  height: 100%;
  border-radius: 1rem;
  background-color: #e0e0e0;
  overflow-x: auto;
`;

const Table = styled.table`
  border-collapse: collapse;
  width: inherit;
  height: auto;
`;
const Tr = styled.tr`
  width: inherit;
  cursor: pointer;
  border-top: 1px solid #dbdbdb;

  &:hover {
    background-color: #c2c2eb;
  }
  &:focus {
    background-color: #c2c2eb;
  }
`;
const Th = styled.th`
  text-align: left;
  padding: 1rem;
`;
const Td = styled.td`
  text-align: left;
  padding: 0.8rem;
`;
function Home() {
  return (
    <Main>
      <div>
        <button>Click</button>
        <button>CLICK</button>
        <button>CLICK</button>
        <button>CLICK</button>
      </div>
      <Section>
        <Table>
          <Tr>
            <Th>DATE</Th>
            <Th>DEALERSHIP</Th>
            <Th>STOCK</Th>
            <Th>PO</Th>
            <Th>VIN</Th>
            <Th>MODEL</Th>
            <Th>COLOR</Th>
            <Th>TOTAL</Th>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
          <Tr>
            <Td>Sample Date</Td>
            <Td>Sample Dealership</Td>
            <Td>Sample Stock</Td>
            <Td>Sample Po</Td>
            <Td>Sample Vin</Td>
            <Td>Sample Model</Td>
            <Td>Sample Color</Td>
            <Td>Sample Total</Td>
          </Tr>
        </Table>
      </Section>
    </Main>
  );
}

export default Home;
