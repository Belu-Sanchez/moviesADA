import { object, string } from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const loginSchema = object({
  name: string().required(),
  lastname: string().required(),
  email: string().required(),
  password: string()
    .required()
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/, {
      message:
        "The password should be at least 8 characters long. The password should contain at least one uppercase letter, one lowercase letter, and one number. The password should not contain any common words or easily guessed patterns.",
    }),
  birthdate: string().required(),
});

export const validationSchema = yupResolver(loginSchema);
