import { Table } from "../../components/Table";

export const EmployeeReviews = () => {
  const table_headers = {
    eng: [
      "id",
      "rate",
      "message",
      "created date",
      "job id",
      "owner id",
      "employer id",
    ],
    ru: [
      "идентификатор",
      "рейтинг",
      "сообщение",
      "дата создания",
      "идентификатор задания",
      "идентификатор владельца",
      "идентификатор работодателя",
    ],
    uzb: [
      "identifikator",
      "reyting",
      "xabar",
      "yaratilgan sana",
      "vazifa identifikatori",
      "egasi identifikatori",
      "ish beruvchi identifikatori",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Employee Reviews"}
      page={"employee_reviews"}
    />
  );
};
