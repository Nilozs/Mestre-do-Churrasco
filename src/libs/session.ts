import { useEffect, useState } from "react"

export function useTokenPayload() {
  const [tokenPayload, setTokenPayload] = useState<any>(null)
  useEffect(() => {
    const storageToken = localStorage.getItem("token")
    if (storageToken) {
      try {
        const base64Url = storageToken.split(".")[1]
        const parsedToken = JSON.parse(atob(base64Url))
        setTokenPayload(parsedToken)
      } catch (error) {
        console.error("error parsing token:  ", error)
      }
    }
  }, [])
  return [tokenPayload]
}
