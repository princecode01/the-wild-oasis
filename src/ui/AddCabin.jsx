import CreateCabinForm from "../features/cabins/CreateCabinForm";
import Button from "./Button";
import Modal from "./Modal";

function AddCabin() {
  return (
    <div>
    <Modal>
      <Modal.Open opens='cabin-form'>
        <Button>Add new cabin</Button>
      </Modal.Open>
      <Modal.Window name='cabin-form'>
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
    </div>
  );
}

// function AddCabin() {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   function onCloseModal() {
//     setIsModalOpen(false);
//   }

//   return (
//     <>
//       <Button
//         onClick={() => setIsModalOpen((show) => !show)}
//       >
//         add cabin
//       </Button >
//       {isModalOpen && (
//         <Modal onCloseModal={onCloseModal}>
//           <CreateCabinForm onCloseModal={onCloseModal} />
//         </Modal>
//       )}
//     </>
//   );
// }

export default AddCabin;
