import { Table } from "../../components/Table";

export const EmployerReviews = () => {
  const table_headers = {
    eng: [
      "id",
      "rate",
      "message",
      "created date",
      "job id",
      "owner id",
      "employee id",
    ],
    ru: [
      "идентификатор",
      "рейтинг",
      "сообщение",
      "дата создания",
      "идентификатор задания",
      "идентификатор владельца",
      "идентификатор сотрудника",
    ],
    uzb: [
      "identifikator",
      "reyting",
      "xabar",
      "yaratilgan sana",
      "vazifa identifikatori",
      "egasi identifikatori",
      "xodim identifikatori",
    ],
  };

  return (
    <Table
      table_headers={table_headers}
      title={"Employer Reviews"}
      page={"employer_reviews"}
    />
  );
};
