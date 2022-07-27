import PlainingItem from "components/PlainingItem";
import PropTypes from "prop-types";
import s from "./PlanList.module.scss";

const PlanList = ({ books = [], type, deletItemFromList }) => {
  return (
    <ul
      className={type === "column" ? s.column__list : s.table__list}
      key={type === "column" ? "column" : "table"}
    >
      {books?.map((book) => {
        return (
          <PlainingItem
            key={book._id}
            type={type}
            deletItemFromList={deletItemFromList}
            book={book}
          />
        );
      })}
    </ul>
  );
};
PlanList.propTypes = {
  books: PropTypes.array,
  type: PropTypes.string.isRequired,
  deletItemFromList: PropTypes.func.isRequired,
};

export default PlanList;
