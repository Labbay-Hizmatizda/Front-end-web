import { Link, NavLink } from "react-router-dom";
import styles from "./MainSidebar.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { changeNavigationState } from "../../store/slices/navSlice";

export const MainSidebar = () => {
  fetch('http://127.0.0.1:8000/api/employers') .then(response => response.json()) .then(json => console.log(json))
  const list = [
    { id: 1, title: "Dashboard", link: "/" },
    { id: 2, title: "Employee", link: "employee" },
    { id: 3, title: "Employer", link: "employer" },
    { id: 4, title: "Employee Review", link: "employee-review" },
    { id: 5, title: "Employer Review", link: "employer-review" },
    { id: 6, title: "Proposal", link: "proposal" },
    { id: 7, title: "Job", link: "job" },
    { id: 8, title: "Order", link: "order" },
    { id: 9, title: "Employee Card", link: "employee-card" },
    { id: 10, title: "CVs", link: "cvs" },
    { id: 11, title: "Payment", link: "payment" },
    { id: 12, title: "Job Appeal", link: "job-appeal" },
    { id: 13, title: "Payment Appeal", link: "payment-appeal" },
    { id: 14, title: "Employee Passports", link: "employee-passports" },
  ];

  const activeItem = useSelector((state) => state.navigation.navigationState);
  const dispatch = useDispatch();
  return (
    <aside className={styles.sidebar}>
      <Link to="/" onClick={() => dispatch(changeNavigationState("Dashboard"))}>
        <h2 className={styles.logo}>Logo</h2>
      </Link>
      <ul className={styles.list}>
        {list.map((item) => (
          <li
            key={item.id}
            className={`${styles.listItem} ${
              activeItem === item.title && styles.activeItem
            }`}
            onClick={() => dispatch(changeNavigationState(item.title))}
          >
            <NavLink to={item.link} className={styles.listItemLink}>
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </aside>
  );
};
