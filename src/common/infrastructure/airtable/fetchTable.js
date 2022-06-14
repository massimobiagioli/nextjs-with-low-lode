import airtable from "airtable";

const client = new airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID
);

const fetchTable = (tableName, view) => {
  return new Promise((resolve, reject) => {
    const orders = [];
    client(tableName)
      .select({ view })
      .eachPage(
        function page(records, fetchNextPage) {
          records.forEach(function (record) {
            orders.push(record["_rawJson"]["fields"]);
          });
          fetchNextPage();
        },
        function done(err) {
          if (err) {
            reject(err);
          }
          resolve(orders);
        }
      );
  });
};

export default fetchTable;
