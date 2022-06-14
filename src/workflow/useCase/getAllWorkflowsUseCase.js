const createGetAllWorkflowsUseCase = (workflowRepository) => async () =>
  await workflowRepository.getAll();

export default createGetAllWorkflowsUseCase;
