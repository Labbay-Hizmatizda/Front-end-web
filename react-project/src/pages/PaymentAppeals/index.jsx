import { useEffect } from "react";
import AppService from "../../services";
import { useState } from "react";
import { Table } from "../../components/Table";

export const PaymentAppeals = () => {
  const table_headers = ["id", "owner id", "message", "payment id"];
  const [data, setData] = useState([]);
  const api = new AppService();

  useEffect(() => {
    api.getPaymentAppeals().then((data) => {
      setData(data);
    });
  }, []);

  return (
    <Table
      data={data}
      table_headers={table_headers}
      title={"Payment Appeals"}
    />
  );
};
