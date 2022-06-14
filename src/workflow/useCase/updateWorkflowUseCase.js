const { N8N_HOST, N8N_API_KEY } = process.env;

const baseUrl = `${N8N_HOST}/api/v1/workflows`;

const getNewWorkflowContent = (currentWorkflowContent) => {
  let newContent = Object.assign({}, currentWorkflowContent)
  delete newContent.id;
  delete newContent.active;
  return newContent;
}

const createUpdateWorkflowUseCase = (workflowRepository) => async (id) => {
  const currentWorkflowContent = await workflowRepository.getContentById(id);
  const newContent = getNewWorkflowContent(currentWorkflowContent);

  try {
    await fetch(`${baseUrl}/${id}`, {
      method: "PUT",
      headers: {
        "X-N8N-API-KEY": N8N_API_KEY,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newContent),
    });
  } catch (e) {
    console.error(e)
  }
};

export default createUpdateWorkflowUseCase;
