import * as Yup from "yup";

export const validationReviewForm = Yup.object().shape({
  rating: Yup.number().min(1, "maybe just 1?").required("Field required"),

  review: Yup.string().min(1, "write something").required("Field required"),
});
