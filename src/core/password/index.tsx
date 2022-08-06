import {ChangeEvent} from "react";

interface InputInterface {
    key: string;
    title: string;
    helpText?: string;
    onChange?: (event: any) => void;
    srOnly?: boolean;
    classStyle?: string;
    placeholder?: string;
    type?: string;
    autoComplete?: string;
}

const  DEFAULT_STYLE = "shadow appearance-none border rounded w-full py-2 px-3 " +
    "text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline";

export function Password(props: InputInterface) {
    const {
        key, title, helpText, onChange,
        srOnly=false, classStyle=DEFAULT_STYLE,
        placeholder, type="text",
        autoComplete=""} = props;
    return (
        <div>
            <label className={"block text-gray-700 text-sm font-bold mb-2 " + srOnly? "sr-only": ""} htmlFor={`id${key}`}>
                {title}
            </label>
            <input
                className={classStyle} autoComplete={autoComplete}
                id={`id${key}`} type="password" placeholder={placeholder} onChange={onChange}/>
            {helpText? <p className="text-red-500 text-xs italic">{helpText}</p>: null}

        </div>
    );

}