import Card from "../card/card";

import { CardsArray } from "../../utils/utils";

import ProgressBar from "../circular-progress-bar/progress-bar";
import CustomChart from "../chart/chart";

import "./middle-section.scss";

const MiddleSection = () => {
  return (
    <div className="middle-section-container">
      <div className="left-chart">
        <CustomChart />
      </div>
      <div className="right-cards">
        {CardsArray.map((value) => {
          return <Card {...value} />;
        })}
      </div>
      <div className="traffic">
        <span className="title">Traffic Sources</span>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div className="source-container">
              <span>source</span>
              <span>Traffic source%</span>
            </div>
            <div className="first-row">
              <div className="direct">
                <div className="sky-blue"></div>
                <span>Direct</span>
              </div>
              <span>50</span>
            </div>
            <div className="second-row">
              <div className="search">
                <div className="pink"></div>
                <span>Search</span>
              </div>
              <span>50</span>
            </div>
          </div>
          <ProgressBar />
        </div>
      </div>
      <div className="traffic">
        <span className="title">Traffic Sources</span>
        <hr />
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <div className="source-container">
              <span>source</span>
              <span>Traffic source%</span>
            </div>
            <div className="first-row">
              <div className="direct">
                <div className="sky-blue"></div>
                <span>Direct</span>
              </div>
              <span>50</span>
            </div>
            <div className="second-row">
              <div className="search">
                <div className="pink"></div>
                <span>Search</span>
              </div>
              <span>50</span>
            </div>
          </div>
          <ProgressBar />
        </div>
      </div>
      {/* <div className="traffic"></div> */}
    </div>
  );
};

export default MiddleSection;
