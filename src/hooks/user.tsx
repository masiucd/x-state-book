import useSWR from "swr"
import { Data } from "@utils/types"

const GITHUB_URL = "https://api.github.com/users/"

const fetcher = (url: string) => fetch(url).then(r => r.json())

interface UserHookReturnType {
  user: Record<string, Data>
  isLoading: boolean
  isError: Error
}

const useUser = (username = "masiucd"): UserHookReturnType => {
  const { data, error } = useSWR(GITHUB_URL + username, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error,
  }
}

export default useUser
