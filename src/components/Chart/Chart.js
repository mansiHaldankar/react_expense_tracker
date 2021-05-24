import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = (props) => {
  console.log(props.dataPoints);
  const valueArray = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaxValues = Math.max(...valueArray);
  const renderChartBar = props.dataPoints.map((dataPoint) => {
    return (
      <ChartBar
        key={dataPoint.label}
        value={dataPoint.value}
        maxValue={totalMaxValues}
        label={dataPoint.label}
      />
    );
  });
  return <div className="chart">{renderChartBar}</div>;
};

export default Chart;
