import React, { Component } from "react";
import CanvasJSReact from "@canvasjs/react-charts";

var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class CustomChart extends Component {
  constructor() {
    super();
    this.toggleDataSeries = this.toggleDataSeries.bind(this);
  }

  toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
    this.chart.render();
  }

  render() {
    const options = {
      theme: "light2",
      animationEnabled: true,
      title: {
        // text: "Units Sold VS Profit",
      },
      subtitles: [
        {
          //   text: "Click Legend to Hide or Unhide Data Series",
        },
      ],
      axisX: {
        // title: "States",
      },
      axisY: {
        // title: "Units Sold",
        titleFontColor: "#6D78AD",
        lineColor: "#6D78AD",
        labelFontColor: "#6D78AD",
        tickColor: "#6D78AD",
      },
      axisY2: {
        title: "Profit in USD",
        titleFontColor: "#51CDA0",
        lineColor: "#51CDA0",
        labelFontColor: "#51CDA0",
        tickColor: "#51CDA0",
      },
      toolTip: {
        shared: true,
      },
      legend: {
        cursor: "pointer",
        itemclick: this.toggleDataSeries,
      },
      data: [
        {
          type: "spline",
          showInLegend: true,
          xValueFormatString: "MMM YYYY",
          yValueFormatString: "#,##0 Units",
          dataPoints: [
            { x: new Date(2017, 0, 1).getMonth(), y: 120 },
            { x: new Date(2017, 1, 1).getMonth(), y: 135 },
            { x: new Date(2017, 2, 1).getMonth(), y: 120 },
            { x: new Date(2017, 3, 1).getMonth(), y: 135 },
            { x: new Date(2017, 4, 1).getMonth(), y: 120 },
            { x: new Date(2017, 5, 1).getMonth(), y: 90 },
          ],
        },
      ],
    };

    return (
      <div>
        <CanvasJSChart options={options} onRef={(ref) => (this.chart = ref)} />
      </div>
    );
  }
}

export default CustomChart;
