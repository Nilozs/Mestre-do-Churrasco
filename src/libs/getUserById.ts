import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUser = async (userId: number) => {
  const { data } = await axios.get(`api/user/${userId}`)
  return data
}

export const useUser = (userId: number | null) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: () =>
      userId ? fetchUser(userId) : Promise.reject("User ID not provided"),
    enabled: !!userId,
  })
}
