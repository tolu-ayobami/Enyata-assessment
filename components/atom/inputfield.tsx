// components/atoms/InputWithLegend.tsx
import React from "react";
import { input } from "../../interface/type";


export const InputWithLegend = React.forwardRef<HTMLInputElement, input>(
    ({
        label,
        type,
        id,
        placeholder,
        className,
        fieldsetClassName,
        passwordClassName,
        inputProps
    }, ref) => {
        return (
            <fieldset className={`border outline-none rounded px-4 h-[48px] ${passwordClassName ? ` ${passwordClassName}` : ''} ${fieldsetClassName ? ` ${fieldsetClassName}` : ''}`}>
                <legend className="text-[12px] font-inter text-[#B0B9C8] leading-[16px] ">{label}</legend>
                <input
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    className={className}
                    ref={ref}
                    {...inputProps}
                />
            </fieldset>
        );
    }
);

InputWithLegend.displayName = "InputWithLegend";