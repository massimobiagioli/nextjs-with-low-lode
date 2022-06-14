import { Toast, ToastContainer } from "react-bootstrap";

const OrderCreateToast = ({ onClose, show }) => {
  return (
    <ToastContainer className="p-3" position="top-end">
      <Toast onClose={onClose} show={show} bg={"success"}>
        <Toast.Header>
          <strong className="me-auto">Info</strong>
        </Toast.Header>
        <Toast.Body>Start processing order</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default OrderCreateToast;
