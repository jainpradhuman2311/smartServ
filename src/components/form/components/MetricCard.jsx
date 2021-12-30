import "./metricCard.css";

const MetricCard = ({ numData, textData }) => {
  return (
    <div className="metricCard">
      {numData}
      <p>{textData}</p>
    </div>
  );
};

export default MetricCard;
