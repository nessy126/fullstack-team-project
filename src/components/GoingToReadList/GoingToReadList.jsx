import s from "./GoingToReadList.module.scss";
import OneCard from "./oneCard/OneCard";

const GoingToReadList = () => {
  const books = [
    {
      _id: 1,
      title: "asdasd",
      author: "asdasd",
      year: 2020,
      pageTotal: 500,
    },
    {
      _id: 2,
      title: "asdasd",
      author: "asdasd",
      year: 2020,
      pageTotal: 500,
    },
    {
      _id: 3,
      title: "asdasd",
      author: "asdasd",
      year: 2020,
      pageTotal: 500,
    },
    {
      _id: 4,
      title: "asdasd",
      author: "asdasd",
      year: 2020,
      pageTotal: 500,
    },
  ];

  return (
    <ul className={s.list}>
      {books.length
        ? books.map(({ _id: id, title, author, year, pages }) => (
            <OneCard
              key={id}
              id={id}
              title={title}
              author={author}
              year={year}
              pages={pages}
            />
          ))
        : null}
    </ul>
  );
};

export default GoingToReadList;
