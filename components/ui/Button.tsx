import Link from "next/link";
import { Loader2, type LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary";

interface BaseProps {
  text: string;
  icon?: LucideIcon;
  variant?: Variant;
  className?: string;
}

interface LinkProps extends BaseProps {
  /** Ako je zadato, dugme se renderuje kao <Link> (navigacija). */
  href: string;
}

interface ActionProps extends BaseProps {
  href?: undefined;
  type?: "submit" | "button" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  isLoading?: boolean;
  loadingText?: string;
}

type ButtonProps = LinkProps | ActionProps;

const base =
  "relative overflow-hidden uppercase py-2.5 px-5 rounded-xl cursor-pointer transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 inline-flex items-center justify-center text-sm font-semibold tracking-wide disabled:opacity-60 disabled:cursor-not-allowed disabled:translate-y-0";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-white border-2 border-accent hover:bg-accent-dim hover:border-accent-dim",
  secondary:
    "bg-transparent text-text-primary border-2 border-text-primary before:absolute before:inset-0 before:bg-text-primary before:origin-left before:scale-x-0 before:transition-transform before:duration-300 hover:before:scale-x-100 hover:text-bg-primary",
};

export default function Button(props: ButtonProps) {
  const { text, icon: Icon, variant = "primary", className = "" } = props;
  const classes = `${base} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    return (
      <Link href={props.href} className={classes}>
        <span className="relative z-10 inline-flex items-center gap-2">
          {Icon && <Icon size={16} />}
          {text}
        </span>
      </Link>
    );
  }

  const { type = "button", onClick, disabled, isLoading, loadingText } = props;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || isLoading}
      className={classes}
    >
      <span className="relative z-10 inline-flex items-center gap-2">
        {isLoading ? (
          <Loader2 size={16} className="animate-spin" />
        ) : (
          Icon && <Icon size={16} />
        )}
        {isLoading ? loadingText ?? text : text}
      </span>
    </button>
  );
}
