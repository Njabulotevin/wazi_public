import React from "react";

function Button({ label, children, className, variant,onClick,color }) {
  return (
    <button
    onClick={onClick}
      className={`${
        variant && variant === "outline"
          ? `bg-transaperent border  ${color?color:"border-secondary text-secondary"}`
          : `${color?color:"bg-secondary"} text-primary-basic`
      } min-w-[196px] px-4 py-[17px] rounded text-sm box-border ${className}`}
    >
      {label || children}
    </button>
  );
}

export default Button;
