import React, { Component } from "react";
import Chart from "react-apexcharts";

function SaleOrderChart() {
  const series = [
    {
      name: "Amazon",
      data: [44, 55, 57, 56],
    },
    {
      name: "Ebay",
      data: [16, 65, 11, 54],
    },
    {
      name: "Flipkart",
      data: [96, 25, 18, 68],
    },
    {
      name: "Meshow",
      data: [48, 85, 56, 87],
    },
    {
      name: "Myntra",
      data: [76, 85, 56, 36],
    },
    {
      name: "Snapdeal",
      data: [32, 75, 11, 38],
    },
    {
      name: "AJio",
      data: [76, 85, 56, 72],
    },
    {
      name: "Bigbazar",
      data: [64, 45, 75, 38],
    },
    {
      name: "Adidas",
      data: [16, 96, 64, 18],
    },
    {
      name: "Amazon",
      data: [42, 35, 71, 65],
    },
    {
      name: "Flipkart",
      data: [12, 65, 56, 65],
    },
    {
      name: "Revenue",
      data: [96, 24, 61, 72],
    },
    {
      name: "Revenue",
      data: [25, 65, 71, 38],
    },
  ];
  const options = {
    chart: {
      id: "simple-bar",
    },
    xaxis: {
      categories: ["Cloths", "Footware", "Electronics", "Mobile"], //will be displayed on the x-asis
    },
  };

  return (
    <div className="h-[692px] w-[full] bg-white mt-5 rounded-[20px] px-10 py-5 relative">
      <Chart
        options={options}
        type="bar"
        series={series}
        width="100%"
        height="100%"
        className=""
      />
    </div>
  );
}

export default SaleOrderChart;
