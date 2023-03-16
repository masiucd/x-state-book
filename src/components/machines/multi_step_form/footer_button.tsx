import {cn} from "@/lib/utils/styles"

interface Props {
  onClick: () => void
  enabled: boolean
  text: string
}

function disabledStyle() {
  return "cursor-not-allowed opacity-40"
}

function FooterButton({onClick, enabled, text}: Props) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 border shadow border-slate-900 rounded-md bg-slate-100 hover:shadow-md",
        !enabled && disabledStyle()
      )}
      disabled={!enabled}
    >
      {text}
    </button>
  )
}

export default FooterButton
