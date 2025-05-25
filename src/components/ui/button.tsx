import React from "react";

export function Button({ className, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center rounded-md px-4 py-2 font-medium text-white bg-blue-600 hover:bg-blue-700 ${className}`}
      {...props}
    />
  );
}