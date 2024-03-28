import { Link } from "react-router-dom";
import styles from "./MainSidebar.module.scss";
import { useDispatch } from "react-redux";
import { changeNavigationState } from "../../store/slices/navSlice";
import { MainSidebarList } from "./MainSidebarList";

export const MainSidebar = () => {
  const employers = [
    { id: 3, title: "Employers", link: "employers" },
    { id: 5, title: "Employer Reviews", link: "employer-reviews" },
  ];
  const employees = [
    { id: 2, title: "Employees", link: "employees" },
    { id: 9, title: "Employee Cards", link: "employee-cards" },
    { id: 4, title: "Employee Reviews", link: "employee-reviews" },
    { id: 14, title: "Employee Passports", link: "employee-passports" },
    { id: 10, title: "CVs", link: "cvs" },
  ];

  const proposals = [
    { id: 6, title: "Proposals", link: "proposals" },
    { id: 8, title: "Orders", link: "orders" },
  ];

  const jobs = [
    { id: 7, title: "Jobs", link: "jobs" },
    { id: 12, title: "Job Appeals", link: "job-appeals" },
  ];

  const payment = [
    { id: 11, title: "Payments", link: "payments" },
    { id: 13, title: "Payment Appeals", link: "payment-appeals" },
  ];

  const dispatch = useDispatch();

  return (
    <aside className={styles.sidebar}>
      <Link to="/" onClick={() => dispatch(changeNavigationState("Dashboard"))}>
        <h2 className={styles.logo}>Logo</h2>
      </Link>
      <MainSidebarList list={employers} />
      <MainSidebarList list={employees} />
      <MainSidebarList list={proposals} />
      <MainSidebarList list={jobs} />
      <MainSidebarList list={payment} />
    </aside>
  );
};
