"use client";

import React, { FC, ChangeEventHandler } from "react";

interface InputProps {
    labelName?: string;
    placeholder?: string;
    type?: string;
    value?: string | number;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    className?: string;
    inputStyle?: string;
    readOnly?: boolean;
    name?: string;
    inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
    required?: boolean;
}

const Input: FC<InputProps> = ({
    labelName,
    placeholder,
    type = "text",
    value,
    onChange,
    className,
    inputStyle,
    readOnly = false,
    name,
    inputMode,
    required
}) => {
    return (
        <div className={`flex flex-col gap-1 w-full ${className}`}>
            {labelName && (
                <label className="md:text-[15px] text-[12px] text-black focus:outline-none semibold">
                    {labelName}
                </label>
            )}
            <input
                name={name}
                readOnly={readOnly}
                className={`p-3 ${inputStyle} border-[1px] border-[#bdbdbd]`}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                type={type}
                inputMode={inputMode}
                required={required}
            />
        </div>
    );
};

export default Input;