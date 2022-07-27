import * as Yup from "yup";

export const addBookValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Field required")
    .min(2, "more then 2 symbols")
    .max(151, " Max 150 symbols"),
  author: Yup.string()
    .required("Field required")
    .min(2, "more then 2 symbols")
    .max(151, "Max 150 symbols"),
  year: Yup.number().required("Field required").max(2023, "Future is here?"),
  pageTotal: Yup.number()
    .required("Field required")
    .moreThan(0, "Nice try")
    .lessThan(5001, "Max 5000"),
});
