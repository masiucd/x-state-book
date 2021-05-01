import { useEffect, useState } from "react"
import useHasMounted from "./mounted"

const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false)
  const isMounted = useHasMounted()

  useEffect(() => {
    const media = isMounted ? matchMedia(query) : null
    if (media && matches !== media?.matches) {
      setMatches(media?.matches)
    }
    const listener = (): void => {
      setMatches(media?.matches ?? false)
    }
    media?.addEventListener("change", listener)
    return () => {
      media?.removeEventListener("change", listener)
    }
  }, [isMounted, matches, query])

  return matches
}

export default useMediaQuery
