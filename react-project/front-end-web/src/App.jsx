import { MainSidebar } from "./components/MainSidebar";
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { CVs } from "./pages/CVs";
import { Employee } from "./pages/Employee";
function App() {
  return (
    <div className="App">
      <MainSidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="cvs" element={<CVs />} />
        <Route path="employee" element={<Employee />} />
        <Route path="cvs" element={<CVs />} />
        <Route path="cvs" element={<CVs />} />
        <Route path="cvs" element={<CVs />} />
      </Routes>
    </div>
  );
}

export default App;
