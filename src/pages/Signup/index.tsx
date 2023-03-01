import { SignUpForm } from "../../components/forms";
import { withAuth } from "../../hoc";

const SignUpPage = () => {
  return (
    <SignUpForm />
  );
}

export const SignUp = withAuth(SignUpPage);