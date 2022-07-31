interface CheckboxGroupOption {
    key: string;
    value: string;
    className?: string;
}

interface CheckboxGroupInterface {
    key: string;
    title: string;
    indeterminate?: boolean;
    helpText?: string;
    warningText?: string;
    isValid?: true;
    options?: Array<CheckboxGroupOption>;
}

export const CheckboxGroup = ({
                                  indeterminate=false,
                                  isValid=true,
                                  key, title, helpText, warningText,
                                  ...props
}: CheckboxGroupInterface) => {
    return (
        <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                {title}
            </label>
            <input type="checkbox" className="appearance-none indeterminate:bg-gray-300 ..."/>
            {helpText? <p className="text-red-500 text-xs italic">{helpText}</p>: null}
        </div>
    );

}