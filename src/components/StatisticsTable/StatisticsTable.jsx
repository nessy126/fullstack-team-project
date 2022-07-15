import Media from "react-media";

const StatisticsTable = () => {
  return (
    <Media
      queries={{
        small: "(max-width: 767px)",
        medium: "(min-width: 768px)",
      }}
    ></Media>
  );
};

export default StatisticsTable;
