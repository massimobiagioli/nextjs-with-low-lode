import { v4 as uuidv4 } from "uuid";
import { getAllOrdersUseCase, createOrderUseCase } from "../../../src";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const orders = await getAllOrdersUseCase();
      res.status(200).json(orders);
      break;
    case "POST":
      const orderCode = uuidv4();
      const body = JSON.parse(req.body);
      const orderData = {
        orderCode,
        ...body,
      };
      await createOrderUseCase(orderData);
      res.status(200).json({ orderCode });
      break;
    default:
      res.status(405).send("Method Not Allowed");
      break;
  }
}
