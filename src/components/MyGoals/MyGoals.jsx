import s from "./MyGoals.module.scss";
import PlanTitle from "components/PlanTitle";
import { useSelector } from "react-redux";
import { getStatusIsTraining } from "redux/auth/authSelectors";
import PropTypes from "prop-types";

const MyGoals = ({ data }) => {
  const statusIsTraining = useSelector(getStatusIsTraining);

  return (
    <>
      {!statusIsTraining ? (
        <div className={s.goal__wrapper__plan}>
          <PlanTitle text="My goals" />
          <ul className={s.list__plan}>
            {data.map(({ title, amount }) => {
              return (
                <li key={title} className={s.item__plan}>
                  <div className={s.amount}>{amount}</div>
                  <div className={s.text}>{title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      ) : (
        <div className={s.goal__wrapper__statistic}>
          <PlanTitle text="My goals" />
          <ul className={s.list__statistic}>
            {data.map(({ title, amount }) => {
              return (
                <li key={title} className={s.item__statistic}>
                  <div className={s.amount}>{amount}</div>
                  <div className={s.text}>{title}</div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </>
  );
};

MyGoals.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      amount: PropTypes.number,
      title: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default MyGoals;
