import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const buttonVariants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-300 disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-sky-300 text-slate-950 hover:bg-sky-200 hover:shadow-[0_0_35px_#7dd3fc55]", outline: "border border-white/15 bg-white/[0.03] text-white hover:border-sky-300/60 hover:bg-sky-300/10", ghost: "text-slate-300 hover:bg-white/5 hover:text-white" }, size: { default: "h-12 px-6", sm: "h-9 px-4 text-xs" } }, defaultVariants: { variant: "default", size: "default" } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild=false, ...props }, ref) => { const Comp = asChild ? Slot : "button"; return <Comp ref={ref} className={cn(buttonVariants({variant,size}),className)} {...props}/>; });
Button.displayName = "Button";
