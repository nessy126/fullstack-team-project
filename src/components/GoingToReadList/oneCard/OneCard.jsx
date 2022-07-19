import s from "./OneCard.module.scss";

// import { useDispatch } from "react-redux";

const OneCard = (book) => {
  //   const dispatch = useDispatch();

  return (
    <li className={s.card}>
      <p>{book.title}</p>
      <p>{book.author}</p>
      <p>{book.year}</p>
      <p>{book.pages}</p>

      {/* <button onClick={() => dispatch(addToCart(product))}>add to card</button> */}
    </li>
  );
};

export default OneCard;
