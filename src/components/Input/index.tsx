import React from "react";

interface InputProps {
    label: string;
    placeholder: string;
    onChange: React.ChangeEventHandler<HTMLInputElement> | undefined;
    disabled: boolean;
}

export function Input(props: InputProps) {
    return (
        <div className={"flex flex-col w-1/2 max-lg:w-full"}>
            <label className={"text-black text-sm font-medium"}>{props.label}</label>
            <input
                className={"rounded-xl border-2 border-black py-3 px-4 placeholder-gray-600 placeholder: font-medium"}
                type={"number"}
                step={".01"}
                placeholder={props.placeholder}
                onChange={props.onChange}
                disabled={props.disabled}
            />
        </div>
    );
}
