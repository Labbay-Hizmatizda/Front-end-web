import React, { useEffect, useState } from "react";
import AppService from "../../services";
import { Table } from "../../components/Table";

export const Orders = () => {
  const table_headers = [
    "id",
    "description",
    "media",
    "location",
    "location_link",
    "price",
    "is active",
    "owner id",
    "category",
  ];
  const api = new AppService();
  const [data, setData] = useState([]);
  useEffect(() => {
    api.getOrders().then((data) => setData(data));
  }, []);

  return (
    <>
      <Table data={data} table_headers={table_headers} title={"Orders"} />
    </>
  );
};
