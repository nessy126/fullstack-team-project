import s from "./Chart.module.scss";

const Chart = (props) => {
  const chartTitle = "кількість сторінок / день";
  return (
    <>
      <div className={s.chartWrapper}>
        <p className={s.chartText}>{chartTitle}</p>
      </div>
    </>
  );
};

export default Chart;
