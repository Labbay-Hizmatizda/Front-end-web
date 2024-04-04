import { useEffect } from "react";
import AppService from "../../services";
import { useState } from "react";
import { Table } from "../../components/Table";

export const JobAppeals = () => {
  const table_headers = ["id", "message", "owner id", "job id"];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getJobAppeals().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Table data={data} table_headers={table_headers} title={"Job Appeals"} />
  );
};
