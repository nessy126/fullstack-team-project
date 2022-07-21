import { FaStar } from "react-icons/fa";

const Stars = ({ backRate }) => {
  return (
    <div>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;
        return (
          <FaStar
            key={index}
            size={20}
            color={ratingValue <= backRate ? "#ffc107" : "#e4e5e9"}
          />
        );
      })}
    </div>
  );
};

export default Stars;
