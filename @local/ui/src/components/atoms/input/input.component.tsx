import React, { forwardRef } from "react";

export type Props = {
  hasError?: boolean;
  type?: string;
  tw?: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

export const Input = forwardRef(
  // forward ref for status messages
  (
    { hasError = false, type, tw, ...props }: Props,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => (
    <>
      <input
        type={type}
        className="search-input block absolute text-2xl border-2 border-white border-b-black focus:border-none"
        {...props}
        ref={ref}
      ></input>
      <div className={`${hasError ? "" : ""}`}></div>
    </>
  )
);

Input.displayName = "Input";

export default Input;
