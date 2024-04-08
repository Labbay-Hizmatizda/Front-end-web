import { Table } from "../../components/Table";

export const Employees = () => {
  const table_headers = [
    "id",
    "user id",
    "name",
    "surname",
    "phone number",
    "created date",
    "language",
  ];

  return (
    <Table
      table_headers={table_headers}
      title={"Employees"}
      page={"employees"}
    />
  );
};
