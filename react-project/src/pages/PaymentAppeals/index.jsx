import { Table } from "../../components/Table";

export const PaymentAppeals = () => {
  const table_headers = {
    eng: ["id", "message", "created date", "owner id", "payment id"],
    ru: [
      "идентификатор",
      "сообщение",
      "дата создания",
      "идентификатор владельца",
      "идентификатор оплаты",
    ],
    uzb: [
      "identifikator",
      "xabar",
      "yaratilgan sana",
      "egasi identifikatori",
      "to'lov identifikatori",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Payment Appeals"}
      page={"payment_appeals"}
    />
  );
};
