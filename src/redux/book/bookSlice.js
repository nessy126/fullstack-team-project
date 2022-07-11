import { createSlice } from '@reduxjs/toolkit';

const bookSlice  = createSlice({
  name: "book",
  books: [{
    id: 1,
    title: "",
    author: "",
    year: 1978,
    status: ["goingToRead", "inReading", "finished"],
    pagesTotal: 100,
    pagesFinished: 15, //сумма прочитанных стр из статистики, но не более pages;
    feedBack: {
      rating: 5,
      comment: ""
    },
    statistics: [{
      id_stat: 123,
      date: "11.09.2009",
      pagesFinished: 3,
    }],
    owner: {},
  }],
})
 
export default bookSlice ;