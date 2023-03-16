import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const ModalDeleteUser = ({
  showModalDeleteUser,
  setShowModalDeleteUser,
  dataUser,
}) => {
  const handleClose = () => {
    setShowModalDeleteUser(false);
  };

  const handleConfirmDelete = () => {
    alert("Delete Success");
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
        <Button variant="danger" onClick={handleClose}>
          Delete
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalDeleteUser;
