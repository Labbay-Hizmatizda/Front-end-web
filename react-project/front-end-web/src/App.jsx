import { MainSidebar } from "./components/MainSidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { CVs } from "./pages/CVs";
import { Employees } from "./pages/Employees";
import { EmployeeReviews } from "./pages/EmployeeReviews";
import { EmployeePassports } from "./pages/EmployeePassports";
import { Employers } from "./pages/Employers";
import { EmployerReviews } from "./pages/EmployerReviews";
import { Jobs } from "./pages/Jobs";
import { JobAppeals } from "./pages/JobAppeals";
import { Orders } from "./pages/Orders";
import { EmployeeCards } from "./pages/EmployeeCards";
import { Payments } from "./pages/Payments";
import { PaymentAppeals } from "./pages/PaymentAppeals";
import { Proposals } from "./pages/Proposals";

function App() {
  return (
    <div className="App">
      <MainSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cvs" element={<CVs />} />
        <Route path="employees" element={<Employees />} />
        <Route path="employee-passports" element={<EmployeePassports />} />
        <Route path="employee-reviews" element={<EmployeeReviews />} />
        <Route path="employers" element={<Employers />} />
        <Route path="employer-reviews" element={<EmployerReviews />} />
        <Route path="jobs" element={<Jobs />} />
        <Route path="job-appeals" element={<JobAppeals />} />
        <Route path="orders" element={<Orders />} />
        <Route path="employee-cards" element={<EmployeeCards />} />
        <Route path="payments" element={<Payments />} />
        <Route path="payment-appeals" element={<PaymentAppeals />} />
        <Route path="proposals" element={<Proposals />} />
      </Routes>
    </div>
  );
}

export default App;
