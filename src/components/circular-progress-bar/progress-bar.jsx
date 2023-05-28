import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./progress-bar.scss";

const ProgressBar = () => {
  return (
    <div className="progress-container">
      <p className="middle-text">Direct</p>
      <span className="dot one"></span>
      <span className="dot two"></span>
      <CircularProgressbar
        styles={buildStyles({
          rotation: 0.5,
          textSize: "30px",
          pathTransitionDuration: 0.5,
          pathColor: `#e17cfd`,
          textColor: "#000",
          trailColor: "#4cd7f6",
          backgroundColor: "#3e98c7",
        })}
        strokeWidth={12}
        value={50}
        text="50%"
      />
    </div>
  );
};

export default ProgressBar;
