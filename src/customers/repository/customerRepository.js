import fetchTable from "../../common/infrastructure/airtable/fetchTable";

const TABLE_NAME = "customer";
const VIEW_NAME = "Grid view";

const createCustomerRepository = () => ({
  getAll: async () => await fetchTable(TABLE_NAME, VIEW_NAME),
});

export default createCustomerRepository;
