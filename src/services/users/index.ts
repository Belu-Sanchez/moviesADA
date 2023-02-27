import { mapToArray } from "../../helpers/mapToArray";
import { SignUpPayload, User } from "../../types";
import { apiFireBase } from "../../utils/axios";

const add = async (user: SignUpPayload) => {
  const response = await apiFireBase.post("/users.json", user);
  return response.data;
};

const getAll = async (): Promise<User[]> => {
  const response = await apiFireBase.get("/users.json");
  return mapToArray(response.data);
};

const getBy = async (type: "email" | "token", value: string) => {
  const users = await getAll();

  const user = users.find((user) => user[type] === value);

  return user;
};

const update = ({ id, ...rest }: Partial<User>) => {
  const response = apiFireBase.patch(`/users/${id}.json`, { ...rest });
};

export const servicesUser = { add, getAll, getBy, update };
