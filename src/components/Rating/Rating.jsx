import s from "./Rating.module.scss";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ values }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  values.rating = rating;

  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <label key={index}>
            <input
              type="radio"
              name="rating"
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
            />
            <FaStar
              className={s.star}
              size={20}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
              color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
            />
          </label>
        );
      })}
    </div>
  );
};

export default Rating;
