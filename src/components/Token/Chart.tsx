"use client";
import * as React from "react";
import { PieChart } from "react-minimal-pie-chart";
const data = [
  { label: "Group A", value: 130, color: "#886BD8" },
  { label: "Group B", value: 550, color: "#E5DAFB" },
  { label: "Group C", value: 90, color: "#472EA3" },
  { label: "Group D", value: 60, color: "#23146E" },
  { label: "Group E", value: 70, color: "#341F88" },
  { label: "Group F", value: 100, color: "#5E3FBE" },
];
// const sizing = {
//   margin: { right: 10 },
//   width: 400,
//   height: 400,
//   legend: { hidden: true },
// };
const TOTAL = data.map((item) => item.value).reduce((a, b) => a + b, 0);
export function PieChartWithCustomizedLabel() {
  const [outerRadius, setOuterRadius] = React.useState(200);
  const [width, setWidth] = React.useState(300);
  const [height, setHeight] = React.useState(300);
  React.useEffect(() => {
    // Check if the device width is smaller than a certain threshold (e.g., 600px)
    const handleResize = () => {
      const isMobile = window.innerWidth < 500; // You can adjust this threshold as needed
      setOuterRadius(isMobile ? 100 : 200);
      setWidth(isMobile ? 300 : 300);
      setHeight(isMobile ? 300 : 300); // Set smaller radius for mobile devices
    };
    // Initial call to handleResize
    handleResize();
    // Add event listener for window resize
    window.addEventListener("resize", handleResize);
    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const sizing = {
    margin: { right: 10 },
    width,
    height,
    legend: { hidden: true },
  };
  return (
    <PieChart
      data={data.map(({ value, color }, index) => ({
        value,
        color,
        key: index,
        title: `${((value / TOTAL) * 100).toFixed(0)} %`, // Display percentage as title
      }))}
      label={({ dataEntry }) => dataEntry.title} // Use title as label
      paddingAngle={10}
      lineWidth={30}
      animate={true}
      animationDuration={1500}
      labelStyle={{
        fontSize: "3px",
        fontFamily: "sans-serif",
        color: "#000000",
        fill: "#788293",
      }}
    />
  );
}
