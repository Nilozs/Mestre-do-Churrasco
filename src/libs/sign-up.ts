import { useMutation } from "@tanstack/react-query"
import { User } from "../@types/user"
import { api } from "./api"

const createUser = async (user: User) => {
  const { data } = await api.post<User>("/api/create-users", user)
  return data
}

export default function useCreateUser() {
  return useMutation({
    mutationFn: createUser,
  })
}
