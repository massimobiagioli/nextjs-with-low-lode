import { v4 as uuidv4 } from "uuid";
import { Button, Form, InputGroup } from "react-bootstrap";

const MAX_ORDER_ITEMS = 5;

const processOrder = (setWorkflowStarted) => (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);

  const orderData = {
    description: formData.get("description"),
    customerCode: formData.get("customerCode"),
  };

  const orderItems = [];

  for (let i = 0; i < MAX_ORDER_ITEMS; i++) {
    const orderItemDescription = formData.get(`orderItemDescription_${i}`);
    const orderItemQuantity =
      parseInt(formData.get(`orderItemQuantity_${i}`)) || 0;
    const orderItemPrice = parseFloat(formData.get(`orderItemPrice_${i}`)) || 0;

    if (orderItemDescription.length > 0 && orderItemQuantity > 0) {
      orderItems.push({
        code: uuidv4(),
        description: orderItemDescription,
        quantity: orderItemQuantity,
        price: orderItemPrice,
      });
    }
  }

  orderData["orderItems"] = orderItems;

  fetch("/api/order", {
    method: "POST",
    body: JSON.stringify(orderData),
  }).then(() => {
    setWorkflowStarted(true);
  });
};

const OrderCreateForm = ({ customers, onWorkflowStarted }) => {
  return (
    <Form onSubmit={processOrder(onWorkflowStarted)}>
      <Form.Group className="m-3">
        <Form.Label>Description</Form.Label>
        <Form.Control
          id="description"
          name="description"
          type="text"
          placeholder="Enter description"
        />
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Customer</Form.Label>
        <Form.Select id="customerCode" name="customerCode">
          {customers.map((customer) => (
            <option value={customer.code}>
              {customer.firstname} {customer.lastname}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="m-3">
        <Form.Label>Items</Form.Label>

        {[...Array(MAX_ORDER_ITEMS)].map((_, index) => (
          <InputGroup className="mb-3">
            <InputGroup.Text>#{index + 1}</InputGroup.Text>
            <Form.Control
              id={"orderItemDescription_" + index}
              name={"orderItemDescription_" + index}
              type="text"
              placeholder="Enter description"
            />

            <InputGroup.Text>QTY</InputGroup.Text>
            <Form.Control
              id={"orderItemQuantity_" + index}
              name={"orderItemQuantity_" + index}
              type="text"
              placeholder="Enter quantity"
            />

            <InputGroup.Text>€</InputGroup.Text>
            <Form.Control
              id={"orderItemPrice_" + index}
              name={"orderItemPrice_" + index}
              type="text"
              placeholder="Enter price"
            />
          </InputGroup>
        ))}
      </Form.Group>

      <Button className="m-3" variant="primary" type="submit">
        Process Order
      </Button>
    </Form>
  );
};

export default OrderCreateForm;
