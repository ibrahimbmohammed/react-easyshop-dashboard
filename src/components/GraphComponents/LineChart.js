import React, { Component } from "react";
import Chart from "react-apexcharts";

class LineChart extends Component {
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
        total: {
          show: false,
          label: "Total",
          color: "#373d3f",
          formatter: function(w) {
            return (
              w.globals.seriesTotals.reduce((a, b) => {
                return a + b;
              }, 0) /
                w.globals.series.length +
              "%"
            );
          }
        },
        title: {
          text: "customers",
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
          type="line"
          width="250"
        />
      </div>
    );
  }
}

export default LineChart;
