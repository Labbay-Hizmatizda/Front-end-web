import { useEffect, useState } from "react";
import AppService from "../../services";
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
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getEmployers().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Employers"}
      page={"employers"}
      setData={setData}
    />
  );
};
