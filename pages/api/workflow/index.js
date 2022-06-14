import { getAllWorkflowsUseCase } from "../../../src";

export default async function handler(req, res) {
  switch (req.method) {
    case "GET":
      const workflows = await getAllWorkflowsUseCase();
      res.status(200).json(workflows);
      break;
    default:
      res.status(405).send("Method Not Allowed");
      break;
  }
}
