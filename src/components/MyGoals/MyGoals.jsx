import s from "./MyGoals.module.scss";
import { useSelector } from "react-redux";
import { getStatusIsTraining } from "redux/auth/authSelectors";

const MyGoals = ({ data }) => {
  const statusIsTraining = useSelector(getStatusIsTraining);
console.log(data);
  return (
    <>
      {!statusIsTraining ? (
        <div className={s.goal__wrapper__plan}>
          <div className={s.top__wrapper}>
            <div className={s.title__wrapper}>
              <h3 className={s.title}>My goals</h3>
            </div>
          </div>
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
          <div className={s.top__wrapper}>
            <div className={s.title__wrapper}>
              <h3 className={s.title}>My goals</h3>
            </div>
          </div>
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

export default MyGoals;
