import * as yup from "yup";

export const validationSchema = [
  yup.object({
    fullName: yup.string().required(),
    address1: yup.string().required(),
    city: yup.string().required(),
    state: yup.string().required(),
    zip: yup.string().required(),
    phoneNumber: yup.string().required(),
  }),
  yup.object(),
  yup.object({
    // nameOnCard: yup.string().required(),
  }),
];
