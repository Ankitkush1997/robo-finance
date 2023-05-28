import DaysFilter from "../days-filter/days-filter";
import MiddleSection from "../middle-section/middle-section";
import Navbar from "../navbar/navbar";
import "./right-dashboard.scss";

const RightDashboard = () => {
  return (
    <div className="right-dashboard-container">
      <Navbar />
      <DaysFilter />
      <MiddleSection />
    </div>
  );
};

export default RightDashboard;
