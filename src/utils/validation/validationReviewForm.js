import * as Yup from "yup";

export const validationReviewForm = Yup.object().shape({
  rating: Yup.number().required("Field required"),

  review: Yup.string().required("Field required"),
});
