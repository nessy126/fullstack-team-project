import * as Yup from "yup";

export const addBookValidationSchema = Yup.object().shape({
  title: Yup.string()
    .required("Field required")
    .min(2, "more then 2 symbols")
    .max(254, " Max 254 symbols"),
  author: Yup.string()
    .required("Field required")
    .min(2, "more then 2 symbols")
    .max(254, "Max 254 symbols"),
  publishYear: Yup.number()
    .required("Field required")
    .max(2023, "Future is here?"),
  pagesTotal: Yup.number()
    .required("Field required")
    .moreThan(0, "Nice try")
    .lessThan(5001, "Max 5000"),
});
