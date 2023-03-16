import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = ({
  showModalDeleteUser,
  setShowModalDeleteUser,
  dataUpdate,
}) => {
  const handleClose = () => {
    setShowModalDeleteUser(false);
  };

  return (
    <Modal show={showModalDeleteUser} onHide={handleClose} backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>
          Confirm Delete this user {dataUpdate.username} ?
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        Are you sure to delete this user <b>{dataUpdate.email}</b>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Cancel
        </Button>
        <Button variant="danger" onClick={handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeleteUser;
