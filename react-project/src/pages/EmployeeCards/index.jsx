import { Table } from "../../components/Table";

export const EmployeeCards = () => {
  const table_headers = {
    eng: ["id", "holder name", "card number", "created date", "owner id"],
    ru: [
      "идентификатор",
      "имя владельца",
      "номер карты",
      "дата создания",
      "идентификатор владельца",
    ],
    uzb: [
      "identifikator",
      "egasi nomi",
      "karta raqami",
      "yaratilgan sana",
      "egasi identifikatori",
    ],
  };

  return (
    <>
      <Table
        table_headers={table_headers}
        title={"Employee Cards"}
        page={"employee_cards"}
      />
    </>
  );
};
