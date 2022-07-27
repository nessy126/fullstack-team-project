import * as Yup from "yup";

export const validationReviewForm = Yup.object().shape({
  comment: Yup.string().min(1, "Write something").required("Write something"),
});
