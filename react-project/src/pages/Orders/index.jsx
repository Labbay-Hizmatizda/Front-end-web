import { Table } from "../../components/Table";

export const Orders = () => {
  const table_headers = [
    "id",
    "category",
    "description",
    "media",
    "location",
    "location_link",
    "price",
    "is active",
    "created date",
    "owner id",
  ];

  return (
    <>
      <Table table_headers={table_headers} title={"Orders"} page={"orders"} />
    </>
  );
};
