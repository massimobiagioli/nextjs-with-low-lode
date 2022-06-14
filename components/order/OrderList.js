import OrderListItem from "./OrderListItem";

const OrderList = ({ orders }) => {
  return (
    <>
      <h3>List Orders</h3>
      <ul>
        {orders.map((order) => (
          <OrderListItem key={order.orderCode} order={order} />
        ))}
      </ul>
    </>
  );
};

export default OrderList;
