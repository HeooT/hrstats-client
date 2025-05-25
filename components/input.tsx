import React from "react";

export function Input({ className, ...props }) {
  return (
    <input
      className={`block w-full rounded-md border border-gray-300 px-3 py-2 ${className}`}
      {...props}
    />
  );
}