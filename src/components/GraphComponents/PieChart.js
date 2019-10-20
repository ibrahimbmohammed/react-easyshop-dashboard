import React, { Component } from "react";
import Chart from "react-apexcharts";

class PieChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "none"
        },
        xaxis: {
          categories: ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [30, 40, 45, 50, 49, 60, 70, 91]
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
          type="pie"
          width="100"
        />
      </div>
    );
  }
}

export default PieChart;
