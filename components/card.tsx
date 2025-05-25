import React from "react";

export function Card({ className, ...props }) {
  return (
    <div className={`bg-white rounded-lg shadow ${className}`} {...props} />
  );
}

export function CardHeader({ className, ...props }) {
  return <div className={`p-6 ${className}`} {...props} />;
}

export function CardTitle({ className, ...props }) {
  return <h3 className={`text-2xl font-bold ${className}`} {...props} />;
}

export function CardContent({ className, ...props }) {
  return <div className={`p-6 pt-0 ${className}`} {...props} />;
}

export function CardDescription({ className, ...props }) {
  return <p className={`text-gray-500 ${className}`} {...props} />;
}

export function CardFooter({ className, ...props }) {
  return (
    <div className={`p-6 border-t border-gray-200 ${className}`} {...props} />
  );
}