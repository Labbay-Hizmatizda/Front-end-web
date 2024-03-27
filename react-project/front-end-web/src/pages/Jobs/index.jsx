import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const Jobs = () => {
  const table_headers = ["id", "price", "is_active", "order_id", "proposal"];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getJobs().then((data) => {
      setData(data);
    });
  }, []);

  return <Table data={data} table_headers={table_headers} title={"Jobs"} />;
};
