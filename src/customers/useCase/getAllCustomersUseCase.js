const createGetAllCustomersUseCase = (customerRepository) => async () =>
  await customerRepository.getAll();

export default createGetAllCustomersUseCase;
