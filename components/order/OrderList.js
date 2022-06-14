import OrderListItem from "./OrderListItem";

const OrderList = ({ orders }) => {
  return (
    <>
      <h3>List Orders</h3>
      <br />
      <div>
        {orders.map((order) => (
          <OrderListItem key={order.orderCode} order={order} />
        ))}
      </div>
    </>
  );
};

export default OrderList;
