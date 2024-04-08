import { Table } from "../../components/Table";

export const JobAppeals = () => {
  const table_headers = ["id", "message", "created date", "owner id", "job id"];

  return (
    <Table
      table_headers={table_headers}
      title={"Job Appeals"}
      page={"job_appeals"}
    />
  );
};
