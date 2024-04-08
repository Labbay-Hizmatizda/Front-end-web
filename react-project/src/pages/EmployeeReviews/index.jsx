import { Table } from "../../components/Table";

export const EmployeeReviews = () => {
  const table_headers = [
    "id",
    "rate",
    "message",
    "created date",
    "job id",
    "owner id",
    "employer id",
  ];

  return (
    <Table
      table_headers={table_headers}
      title={"Employee Reviews"}
      page={"employee_reviews"}
    />
  );
};
