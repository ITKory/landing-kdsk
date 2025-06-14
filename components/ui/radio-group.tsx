import * as React from "react"
import { cn } from "..//lib/utils"

export interface RadioGroupItemProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
}

const RadioGroupItem = React.forwardRef<HTMLInputElement, RadioGroupItemProps>(
    ({ className, value, ...props }, ref) => {
        return (
            <input
                type="radio"
                value={value}
                className={cn(
                    "aspect-square h-4 w-4 rounded-full border border-primary text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
                    className,
                )}
                ref={ref}
                {...props}
            />
        )
    },
)
RadioGroupItem.displayName = "RadioGroupItem"

export { RadioGroupItem }
