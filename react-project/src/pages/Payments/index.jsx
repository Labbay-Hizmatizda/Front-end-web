import { useEffect } from "react";
import AppService from "../../services";
import { useState } from "react";
import { Table } from "../../components/Table";

export const Payments = () => {
  const table_headers = [
    "id",
    "employee approve",
    "employer approve",
    "created date",
    "job id",
  ];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getPayments().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Payments"}
      page={"payments"}
      setData={setData}
    />
  );
};
