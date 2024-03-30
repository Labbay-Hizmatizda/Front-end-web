import { useEffect } from "react";
import AppService from "../../services";
import { useState } from "react";
import { Table } from "../../components/Table";

export const Employees = () => {
  const table_headers = [
    "id",
    "user id",
    "name",
    "surname",
    "phone number",
    "created date",
  ];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getEmployees().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Employees"}
      setData={setData}
      url={"employees"}
    />
  );
};
