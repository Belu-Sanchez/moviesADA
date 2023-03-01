import { useContext } from "react";
import { AuthContext } from "../../contexts";
import { tokenGenerator } from "../../helpers/tokenGenerator";
import { servicesUser } from "../../services";
import { LoginForm, User } from "../../types";

const useMe = () => {
  const { me, setMe } = useContext(AuthContext);

  const login = async ({ email, pass }: LoginForm) => {
    const user = await servicesUser.getBy("email", email);

    if (user && user.password === pass) {
      const { id, name, lastname } = user;

      const token = tokenGenerator();

      servicesUser.update({ id, token });

      localStorage.setItem("token", token);

      setMe({ id, name, lastname, email });
    } 
  };

  const signup = (user: Omit<User, "id">) => {
  };

  const loginWithToken = async () => {
    const token = localStorage.getItem("token");

    if (token && !me) {
      const user = await servicesUser.getBy("token", token);
      if (user) {
        setMe({
          id: user.id,
          name: user.name,
          lastname: user.lastname,
          email: user.email,
        });
      }
    }
  };


  return { me, login, signup, loginWithToken };
};

export { useMe };
