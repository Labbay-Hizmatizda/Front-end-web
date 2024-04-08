import { Table } from "../../components/Table";

export const CVs = () => {
  const table_headers = [
    "id",
    "media",
    "bio",
    "rating",
    "created date",
    "owner id",
  ];

  return (
    <>
      <Table table_headers={table_headers} title={"CVs"} page={"cvs"} />
    </>
  );
};
