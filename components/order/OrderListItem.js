const OrderListItem = ({ order }) => {
  return (
    <li>
      {order.code} - {order.description}
    </li>
  );
};

export default OrderListItem;
