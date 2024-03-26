import { MainSidebar } from "./components/MainSidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { CVs } from "./pages/CVs";
import { Employees } from "./pages/Employees";
import { EmployeeReview } from "./pages/EmployeeReview";
import { EmployeePassports } from "./pages/EmployeePassports";
import { Employer } from "./pages/Employer";
import { EmployerReview } from "./pages/EmployerReview";
import { Job } from "./pages/Job";
import { JobAppeal } from "./pages/JobAppeal";
import { Order } from "./pages/Order";
import { EmployeeCard } from "./pages/EmployeeCard";
import { Payment } from "./pages/Payment";
import { PaymentAppeal } from "./pages/PaymentAppeal";
import { Proposal } from "./pages/Proposal";

function App() {
  return (
    <div className="App">
      <MainSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="cvs" element={<CVs />} />
        <Route path="employee" element={<Employees />} />
        <Route path="employee-passports" element={<EmployeePassports />} />
        <Route path="employee-review" element={<EmployeeReview />} />
        <Route path="employer" element={<Employer />} />
        <Route path="employer-review" element={<EmployerReview />} />
        <Route path="job" element={<Job />} />
        <Route path="job-appeal" element={<JobAppeal />} />
        <Route path="order" element={<Order />} />
        <Route path="employee-card" element={<EmployeeCard />} />
        <Route path="payment" element={<Payment />} />
        <Route path="payment-appeal" element={<PaymentAppeal />} />
        <Route path="proposal" element={<Proposal />} />
      </Routes>
    </div>
  );
}

export default App;
