import React from "react";

export function Select({ children, ...props }) {
  return <select {...props}>{children}</select>;
}

export function SelectTrigger({ className, ...props }) {
  return (
    <div className={`relative flex items-center ${className}`} {...props} />
  );
}

export function SelectValue({ placeholder, ...props }) {
  return <span {...props}>{placeholder}</span>;
}

export function SelectContent({ className, ...props }) {
  return <div className={`bg-white rounded-md shadow-lg ${className}`} {...props} />;
}

export function SelectItem({ className, value, ...props }) {
  return <option value={value} className={className} {...props} />;
}