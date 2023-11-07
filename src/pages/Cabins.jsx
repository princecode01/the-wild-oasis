import { useCabins } from "../features/cabins/useCabins";
import CabinTable from "../features/cabins/CabinTable";
import CabinTableOperations from "../features/cabins/CabinTableOperations";
import Row from "../ui/Row";
import Heading from "../ui/Heading";
import Spinner from "../ui/Spinner";
import AddCabin from "../ui/AddCabin";

function Cabins() {
  const { isLoading } = useCabins();

  if (isLoading) return <Spinner />;


  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins</Heading>
        <CabinTableOperations />
      </Row>
      <Row>
        <CabinTable />
        <AddCabin />
      </Row>
    </>
  );
}

export default Cabins;
