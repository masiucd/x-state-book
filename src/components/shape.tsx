import {cn} from "@/lib/styles";

export function Shape({className}: {className?: string}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="200"
      height="200"
      viewBox="0 0 512 512"
    >
      <path
        className={cn("fill-current text-purple-500", className)}
        // fill='url("#SvgjsLinearGradient1046")'
        d="M266.648 507.589c-5.881 5.881-15.415 5.881-21.296 0L102.293 364.531c-5.881-5.881-5.881-15.416 0-21.296l143.059-143.059c5.881-5.881 15.415-5.881 21.296 0l143.059 143.059c5.881 5.881 5.881 15.416 0 21.296zm0-346.353c-5.881 5.881-15.415 5.881-21.296 0l-67.765-67.765c-5.881-5.881-5.881-15.416 0-21.296L245.352 4.41c5.881-5.881 15.415-5.881 21.296 0l67.765 67.765c5.881 5.881 5.881 15.416 0 21.296z"
      ></path>
      <defs>
        {/* <linearGradient id="SvgjsLinearGradient1046">
          <stop offset="0" stopColor="#f8f9"></stop>
          <stop offset="1" stopColor="#e8dbfc"></stop>
        </linearGradient> */}
      </defs>
    </svg>
  );
}
