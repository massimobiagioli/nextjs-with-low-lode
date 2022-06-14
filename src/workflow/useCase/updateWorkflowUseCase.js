const { N8N_HOST, N8N_API_KEY } = process.env;

const url = `${N8N_HOST}/api/v1/workflow`;

const createUpdateWorkflowUseCase = (workflowRepository) => async (id) => {
  const workflowContent = await workflowRepository.getContentById(id);

  await fetch(url, {
    method: "PUT",
    headers: {
      "X-N8N-API-KEY": N8N_API_KEY,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(workflowContent),
  });
};

export default createUpdateWorkflowUseCase;
