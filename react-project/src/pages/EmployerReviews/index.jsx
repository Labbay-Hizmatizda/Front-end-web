import { Table } from "../../components/Table";

export const EmployerReviews = () => {
  const table_headers = [
    "id",
    "rate",
    "message",
    "created date",
    "job id",
    "owner id",
    "employee id",
  ];

  return (
    <Table
      table_headers={table_headers}
      title={"Employer Reviews"}
      page={"employer_reviews"}
    />
  );
};
