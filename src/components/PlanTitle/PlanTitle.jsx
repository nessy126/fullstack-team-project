import s from "./PlanTitle.module.scss";
import PropTypes from "prop-types";

const PlanTitle = ({ text }) => {
  return (
    <div
      className={
        text === "My training" ? s.top__wrapperPlan : s.top__wrapperGoal
      }
    >
      <div
        className={
          text === "My training" ? s.title__wrapperPlan : s.title__wrapperGoal
        }
      >
        <h3 className={s.title}>{text}</h3>
      </div>
    </div>
  );
};
PlanTitle.propTypes = {
  text: PropTypes.string.isRequired,
};

export default PlanTitle;
