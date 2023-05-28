import "./days-filter.scss";
import Question from "../../assets/question-mark.svg";

const DaysFilter = () => {
  return (
    <div className="days-filter-container">
      <div className="left-text">
        <span>Project statistic</span>
        <img src={Question} alt="question-mark" />
      </div>
      <div className="right-filters">
        <span>30 days</span>
        <span>90 days</span>
        <span>6 months</span>
        <span>12 months</span>
      </div>
    </div>
  );
};

export default DaysFilter;
