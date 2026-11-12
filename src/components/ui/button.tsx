import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "cn"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border-2 border-transparent bg-clip-padding text-sm font-semibold whitespace-nowrap transition-all duration-150 outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-[var(--nb-ink)] bg-primary text-primary-foreground shadow-[3px_3px_0px_var(--nb-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-primary/95 hover:shadow-[5px_5px_0px_var(--nb-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--nb-shadow)]",
        secondary:
          "border-[var(--nb-ink)] bg-[var(--nb-surface)] text-foreground shadow-[3px_3px_0px_var(--nb-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-[5px_5px_0px_var(--nb-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--nb-shadow)]",
        outline:
          "border-[var(--nb-ink)] bg-card text-foreground shadow-[3px_3px_0px_var(--nb-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[var(--nb-surface)] hover:shadow-[5px_5px_0px_var(--nb-shadow)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0px_var(--nb-shadow)]",
        ghost:
          "hover:border-[var(--nb-ink)]/35 hover:bg-secondary hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground",
        destructive:
          "border-[var(--nb-ink)] bg-destructive text-white shadow-[3px_3px_0px_var(--nb-shadow)] hover:-translate-x-0.5 hover:-translate-y-0.5",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default:
          "h-9 gap-1.5 px-3.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
        xs: "h-6 gap-1 rounded-lg px-2 text-xs in-data-[slot=button-group]:rounded-lg has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
        sm: "h-8 gap-1 rounded-xl px-3 text-[0.82rem] in-data-[slot=button-group]:rounded-xl has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2 [&_svg:not([class*='size-'])]:size-3.5",
        lg: "h-11 gap-2 px-5 text-sm has-data-[icon=inline-end]:pr-4 has-data-[icon=inline-start]:pl-4",
        icon: "size-9",
        "icon-xs":
          "size-6 rounded-lg in-data-[slot=button-group]:rounded-lg [&_svg:not([class*='size-'])]:size-3",
        "icon-sm":
          "size-8 rounded-xl in-data-[slot=button-group]:rounded-xl",
        "icon-lg": "size-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}: ButtonPrimitive.Props & VariantProps<typeof buttonVariants>) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
