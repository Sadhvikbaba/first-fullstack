import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-orange-600",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg ${bgColor} ${textColor} ${className} hover:text-black hover:bg-white`} {...props}>
            {children}
        </button>
    );
}