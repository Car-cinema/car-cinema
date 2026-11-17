import { Button as ButtonPrimitive } from "@base-ui/react/button";
import { cva, type VariantProps } from "class-variance-authority";
import { LoaderCircle } from "lucide-react";

import { cn } from "@/shared/lib/cn";

/**
 * Button — implements the Figma "Web Design System" button set.
 *
 * Axes from Figma:
 *  - type        → `variant`: primary | secondary | tertiary | shadow
 *  - size        → `size`:    lg | md | sm  (+ icon variants)
 *  - state       → driven by native/base-ui states (hover, active/press, disabled) and the `loading` prop
 *  - destructive → `destructive` boolean, recolors primary/secondary/tertiary to the error ramp
 *
 * Colors come from the design-system tokens defined in app/globals.css.
 *
 * Note: `loading` sets the button `disabled` (to block clicks) but keeps its
 * normal background — the disabled color only applies when NOT loading, via the
 * `not-data-loading:` prefix (paired with `data-loading` on the element).
 */
const buttonVariants = cva(
  [
    "group/button relative inline-flex shrink-0 items-center justify-center",
    "rounded-full border border-transparent bg-clip-padding font-bold whitespace-nowrap",
    "transition-colors outline-none select-none",
    "focus-visible:ring-3 focus-visible:ring-primary/50",
    "active:not-aria-[haspopup]:translate-y-px",
    "disabled:pointer-events-none",
    "[&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-5",
  ],
  {
    variants: {
      variant: {
        // Figma: type=primary
        primary: [
          "bg-primary-base text-white",
          "hover:bg-primary-dark active:bg-primary-light data-loading:bg-primary-light",
          "not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled",
        ],
        // Figma: type=secondary
        secondary: [
          "bg-component-selected text-text-primary",
          "hover:bg-component-hover active:bg-component-pressed data-loading:bg-component-pressed",
          "not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled",
        ],
        // Figma: type=tertiary
        tertiary: [
          "bg-transparent text-primary-base",
          "hover:bg-primary-op-16 active:bg-primary-op-24 data-loading:bg-primary-op-24",
          "not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled",
        ],
        // Figma: type=shadow. Hover and press share one look: primary border + text
        // on the unchanged container bg. No destructive/disabled spec in Figma —
        // disabled falls back to the shared flat treatment, destructive is a no-op.
        shadow: [
          "bg-container text-text-primary shadow-xs",
          "hover:border-primary-base hover:text-primary-base",
          "active:border-primary-base active:text-primary-base",
          "not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled not-data-loading:disabled:shadow-none",
        ],
      },
      size: {
        // Figma sizes (pill). lg=56px, md=40px, sm=32px
        lg: "h-14 gap-4 px-6 text-base tracking-[-0.02em]",
        md: "h-10 gap-3 px-4 text-sm tracking-[-0.02em]",
        sm: "h-8 gap-3 px-3 text-sm tracking-[-0.02em]",
        "icon-lg": "size-14 px-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-md": "size-10 px-0 [&_svg:not([class*='size-'])]:size-5",
        "icon-sm": "size-8 px-0 [&_svg:not([class*='size-'])]:size-4",
      },
      destructive: {
        true: "",
        false: "",
      },
    },
    compoundVariants: [
      // Figma: destructive=on recolors each type to the error ramp
      {
        variant: "primary",
        destructive: true,
        className:
          "bg-error-base text-white hover:bg-error-dark active:bg-error-light data-loading:bg-error-light not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled",
      },
      {
        variant: "secondary",
        destructive: true,
        className:
          "bg-error-op-8 text-error-base hover:bg-error-op-16 active:bg-error-op-24 data-loading:bg-error-op-24 not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled",
      },
      {
        variant: "tertiary",
        destructive: true,
        className:
          "bg-transparent text-error-base hover:bg-error-op-16 active:bg-error-op-24 data-loading:bg-error-op-24 not-data-loading:disabled:bg-component-disabled not-data-loading:disabled:text-text-disabled",
      },

      // Figma: icons inside sm buttons are 16px
      { size: "sm", className: "[&_svg:not([class*='size-'])]:size-4" },
      { size: "icon-sm", className: "[&_svg:not([class*='size-'])]:size-4" },
    ],
    defaultVariants: {
      variant: "primary",
      size: "lg",
      destructive: false,
    },
  },
);

export type ButtonProps = ButtonPrimitive.Props &
  VariantProps<typeof buttonVariants> & {
    loading?: boolean;
  };

function Button({
  className,
  variant = "primary",
  size = "lg",
  destructive = false,
  loading = false,
  disabled,
  children,
  ...props
}: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, destructive, className }))}
      data-loading={loading || undefined}
      data-slot="button"
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <>
          <LoaderCircle className="animate-spin" />
          <span className="sr-only">{children}</span>
        </>
      ) : (
        children
      )}
    </ButtonPrimitive>
  );
}

export { Button, buttonVariants };
