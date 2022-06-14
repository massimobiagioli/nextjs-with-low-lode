const {
  N8N_HOST,
  WORKFLOW_PROCESS_ORDER_WEBHOOK,
  WORKFLOW_PROCESS_ORDER_API_KEY,
} = process.env;

const webHookUrl = `${N8N_HOST}${WORKFLOW_PROCESS_ORDER_WEBHOOK}`;

const createCreateOrderUseCase = () => async (orderData) => {
  await fetch(webHookUrl, {
    method: "POST",
    headers: {
      Auth: `Bearer ${WORKFLOW_PROCESS_ORDER_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(orderData),
  });
};

export default createCreateOrderUseCase;
