import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-xl px-6 py-3 font-semibold transition-all duration-200";

  const styles = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700 hover:scale-105",
    secondary:
      "border border-slate-300 bg-white hover:bg-slate-100",
  };

  return (
    <button className={`${base} ${styles[variant]}`}>
      {children}
    </button>
  );
}