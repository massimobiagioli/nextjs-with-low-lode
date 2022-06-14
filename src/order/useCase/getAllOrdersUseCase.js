const createGetAllOrdersUseCase =
  (orderRepository, orderItemRepository, customerRepository) => async () => {
    const orders = await orderRepository.getAll();
    const orderItems = await orderItemRepository.getAll();
    const customers = await customerRepository.getAll();

    return orders.map((order) => {
      const customerCode = order.customer_code;
      delete order.customer_code;
      return {
        ...order,
        customer: customers.find((customer) => customer.code === customerCode),
        orderItems: orderItems.filter(
          (orderItem) => orderItem.order_code === order.code
        ),
      };
    });
  };

export default createGetAllOrdersUseCase;
