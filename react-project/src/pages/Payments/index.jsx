import { Table } from "../../components/Table";

export const Payments = () => {
  const table_headers = {
    eng: [
      "id",
      "employee approve",
      "employer approve",
      "created date",
      "job id",
    ],
    ru: [
      "идентификатор",
      "подтверждение сотрудника",
      "подтверждение работодателя",
      "дата создания",
      "идентификатор задания",
    ],
    uzb: [
      "identifikator",
      "xodimning tasdiqlash",
      "ish beruvchining tasdiqlash",
      "yaratilgan sana",
      "vazifa identifikatori",
    ],
  };

  return (
    <Table table_headers={table_headers} title={"Payments"} page={"payments"} />
  );
};
