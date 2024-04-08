import { Table } from "../../components/Table";

export const Employers = () => {
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
      title={"Employers"}
      page={"employers"}
    />
  );
};
