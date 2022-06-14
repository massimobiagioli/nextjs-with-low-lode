import fetchTable from "../../common/infrastructure/airtable/fetchTable";

const TABLE_NAME = "order";
const VIEW_NAME = "Grid view";

const createOrderRepository = () => ({
  getAll: async () => await fetchTable(TABLE_NAME, VIEW_NAME),
});

export default createOrderRepository;
