const OrderListItem = ({ order }) => {
  let total = 0;
  return (
    <>
      <div>

        <div>
          <span>Customer: </span>
          <span><strong>{order.customer.firstname} {order.customer.lastname}</strong></span>
          <span> ({order.customer.email})</span>
        </div>

        <div>
          <span>Order Code: </span>
          <span><strong>{order.code}</strong></span>
          <span> - Description: </span>
          <span><strong>{order.description}</strong></span>
        </div>

        <div>
          <span>Created at: </span>
          <span><strong>{order.created_at}</strong></span>
          <span> - Status: </span>
          <span><strong>{order.status}</strong></span>
        </div>

        <div>
          <p>Order Items:</p>
          <ul>
            {order.orderItems.map((item) => (
              total += item.price * item.quantity,
              <li key={item.code}>
                <span><strong>{item.description}</strong></span>
                <span> - Quantity: </span>
                <span><strong>{item.quantity}</strong></span>
                <span> - Unit Price (€): </span>
                <span><strong>{item.price}</strong></span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span>Total (€): </span>
          <span><strong>{total}</strong></span>
        </div>

      </div>
      <hr />
    </>
  );
};

export default OrderListItem;
