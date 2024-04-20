import { Link } from "react-router-dom";
import styles from "./MainSidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeNavigationState } from "../../store/slices/navSlice";
import { MainSidebarList } from "./MainSidebarList";
import { changeLanguage } from "../../store/slices/languageSlice";

export const MainSidebar = () => {
  const lists = {
    eng: [
      [
        { id: 3, title: "Employers", link: "employers" },
        { id: 5, title: "Employer Reviews", link: "employer-reviews" },
      ],
      [
        { id: 2, title: "Employees", link: "employees" },
        { id: 9, title: "Employee Cards", link: "employee-cards" },
        { id: 4, title: "Employee Reviews", link: "employee-reviews" },
        { id: 14, title: "Employee Passports", link: "employee-passports" },
        { id: 10, title: "CVs", link: "cvs" },
      ],
      [
        { id: 6, title: "Proposals", link: "proposals" },
        { id: 8, title: "Orders", link: "orders" },
      ],

      [
        { id: 7, title: "Jobs", link: "jobs" },
        { id: 12, title: "Job Appeals", link: "job-appeals" },
      ],

      [
        { id: 11, title: "Payments", link: "payments" },
        { id: 13, title: "Payment Appeals", link: "payment-appeals" },
      ],
    ],
    ru: [
      [
        { id: 3, title: "Работодатели", link: "employers" },
        { id: 5, title: "Отзывы о работодателях", link: "employer-reviews" },
      ],
      [
        { id: 2, title: "Сотрудники", link: "employees" },
        { id: 9, title: "Карточки сотрудников", link: "employee-cards" },
        { id: 4, title: "Отзывы о сотрудниках", link: "employee-reviews" },
        { id: 14, title: "Паспорта сотрудников", link: "employee-passports" },
        { id: 10, title: "Резюме", link: "cvs" },
      ],
      [
        { id: 6, title: "Предложения", link: "proposals" },
        { id: 8, title: "Заказы", link: "orders" },
      ],
      [
        { id: 7, title: "Работы", link: "jobs" },
        { id: 12, title: "Апелляции по работе", link: "job-appeals" },
      ],
      [
        { id: 11, title: "Платежи", link: "payments" },
        { id: 13, title: "Апелляции по платежам", link: "payment-appeals" },
      ],
    ],
    uzb: [
      [
        { id: 3, title: "Mijozlar", link: "employers" },
        { id: 5, title: "Buyurtmachini sharhi", link: "employer-reviews" },
      ],
      [
        { id: 2, title: "Bajaruvchi", link: "employees" },
        { id: 9, title: "Bank kartalar", link: "employee-cards" },
        { id: 4, title: "Sharhlar", link: "employee-reviews" },
        { id: 14, title: "Passportlar", link: "employee-passports" },
        { id: 10, title: "CVs", link: "cvs" },
      ],
      [
        { id: 6, title: "Arizalar", link: "proposals" },
        { id: 8, title: "Buyurtmalar", link: "orders" },
      ],

      [
        { id: 7, title: "Ishlar", link: "jobs" },
        { id: 12, title: "Shikoyatlar", link: "job-appeals" },
      ],

      [
        { id: 11, title: "To'lovlar", link: "payments" },
        { id: 13, title: "Shikoyatlar", link: "payment-appeals" },
      ],
    ],
  };

  const language = useSelector((state) => state.language.lang);

  const listLang = lists[language];

  const dispatch = useDispatch();

  return (
    <aside className={styles.sidebar}>
      <Link to="/" onClick={() => dispatch(changeNavigationState("Dashboard"))}>
        <h2 className={styles.logo}>Logo</h2>
      </Link>
      {listLang.map((item, i) => (
        <MainSidebarList list={item} key={i} />
      ))}
      <div className={styles.langBtns}>
        <button
          className={styles.langBtn}
          onClick={() => dispatch(changeLanguage("ru"))}
        >
          Ru
        </button>
        <button
          className={styles.langBtn}
          onClick={() => dispatch(changeLanguage("eng"))}
        >
          Eng
        </button>
        <button
          className={styles.langBtn}
          onClick={() => dispatch(changeLanguage("uzb"))}
        >
          Uzb
        </button>
      </div>
    </aside>
  );
};
