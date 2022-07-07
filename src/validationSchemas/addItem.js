import * as Yup from "yup";

export const addItemValidationSchema = Yup.object().shape({
  title: Yup.string().required(),
  category: Yup.string().required(),
  sale_price: Yup.number().min(1).required(),
  unit_price: Yup.number().min(0).required(),
  quantity: Yup.number().min(0).required(),
});
