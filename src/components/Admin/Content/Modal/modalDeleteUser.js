import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { deleteUser } from "../../../../services/apiService";

const ModalDeleteUser = ({
  showModalDeleteUser,
  setShowModalDeleteUser,
  dataUser,
  getListUser,
}) => {
  const handleClose = () => {
    setShowModalDeleteUser(false);
  };

  const handleConfirmDelete = async () => {
    let data = await deleteUser(dataUser.id);

    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      await getListUser();
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
    <Modal show={showModalDeleteUser} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          Confirm Delete this user {dataUser.username} ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure to delete this user{" "}
        <b>{dataUser && dataUser.email ? dataUser.email : ""}</b>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={() => handleConfirmDelete()}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeleteUser;
