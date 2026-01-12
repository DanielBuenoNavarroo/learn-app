import { users } from "./schema";

export const publicUsersFields = {
  id: users.id,
  name: users.name,
  email: users.email,
  role: users.role,
};
