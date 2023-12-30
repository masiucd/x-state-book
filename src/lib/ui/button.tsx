import {Slot} from "@radix-ui/react-slot";
import {cva, type VariantProps} from "class-variance-authority";
import {type ButtonHTMLAttributes, forwardRef} from "react";

import {cn} from "../styles";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        def: "text-red-500",
        destructive: "shadow-sm",
        outline: "border shadow-sm",
        secondary: "shadow-sm",
        ghost: "",
        link: "",
      },
      size: {
        // default: "h-9 px-4 py-2",
        def: "",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9",
      },
    },
    defaultVariants: {
      variant: "def",
      size: "def",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

// function Button({
//   className,
//   variant,
//   size,
//   asChild = false,
//   children,
//   ...props
// }: ButtonProps) {
//   const Comp = asChild ? Slot : "button";
//   return (
//     <button
//       className={cn(buttonVariants({variant, size, className}))}
//       type="button"
//       {...props}
//     >
//       {children}
//     </button>
//   );
// }

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({className, variant, size, asChild = false, ...props}, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({variant, size, className}))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";
export {Button, buttonVariants};
