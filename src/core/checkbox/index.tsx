import React, {ChangeEvent} from "react";

interface CheckboxInterface {
    key: string;
    label: string;
    indeterminate?: boolean;
    helpText?: string;
    isValid?: true;
}

export function Checkbox(props: CheckboxInterface) {
    const checkboxRef = React.useRef();
    const {key, label, indeterminate=false, helpText, isValid=true} = props;
    return (
        <div className="m-1">
            <label className="block text-gray-700 text-sm font-bold mb-2 select-none">
                <input type="checkbox" className={"accent-pink-500 indeterminate:bg-gray-300"} /> {label}
            </label>
            {helpText? <p className="text-red-500 text-xs italic">{helpText}</p>: null}
        </div>
    );

}