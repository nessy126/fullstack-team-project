import * as Yup from "yup";

export const validationReviewForm = Yup.object().shape({
  comment: Yup.string().min(1, "write something").required("write something"),
});
