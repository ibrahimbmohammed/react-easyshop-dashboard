import React, { Component } from "react";
import Chart from "react-apexcharts";

class BarChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          toolbar: {
            show: false
          }
        },
        xaxis: {
          categories: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"]
        },
        title: {
          text: "sales",
          align: "center",
          margin: 0,
          offsetX: 10,
          offsetY: 0,
          floating: false,
          style: {
            fontSize: "18px",
            fontFamily: "montserrat",
            color: undefined
          }
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 91, 50, 49, 60, 25, 34]
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          width="250"
        />
      </div>
    );
  }
}

export default BarChart;
