import "./final.css";
import MetricCard from "./components/MetricCard";
import BarChart from "./components/BarChart";

function Final() {
  const metricData = [
    {
      id: 1,
      numData: "$406,411.29",
      textData: "Total Revenue",
    },
    {
      id: 2,
      numData: "$620",
      textData: "Total Job average",
    },
    {
      id: 3,
      numData: "$620",
      textData: "Total Job average",
    },
    {
      id: 4,
      numData: "$620",
      textData: "Total Job average",
    },
    {
      id: 5,
      numData: "$620",
      textData: "Total Job average",
    },
    {
      id: 6,
      numData: "$620",
      textData: "Total Job average",
    },
    {
      id: 7,
      numData: "$620",
      textData: "Total Job average",
    },
    {
      id: 8,
      numData: "$620",
      textData: "Total Job average",
    },
  ];
  return (
    <div className="final">
      {metricData.map((data) => {
        return (
          <MetricCard
            numData={data.numData}
            textData={data.textData}
            key={data.id}
          />
        );
      })}
      <div className="ChartSection">
        <BarChart />
        <BarChart />
      </div>
      <div className="ChartSection">
        <BarChart />
        <BarChart />
      </div>
    </div>
  );
}

export default Final;
