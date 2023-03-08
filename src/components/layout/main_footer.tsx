import {cn} from "@/lib/utils/styles"

interface Props {
  className?: string
}

export default function MainFooter({className}: Props) {
  return (
    <footer className={cn("min-h-[5rem]", className)}>
      <div className="mx-auto flex max-w-2xl justify-center gap-1">
        <small>©{new Date().getFullYear()} X state book | </small>
        <small>Built with Next.js and Tailwind CSS | </small>
        <small>Deployed on Vercel</small>
      </div>
    </footer>
  )
}
