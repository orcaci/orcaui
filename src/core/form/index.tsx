import {ChangeEvent} from "react";

interface InputInterface {
    key: string;
    title: string;
    children: JSX.Element[] | JSX.Element;
}

export function Form(props: InputInterface) {
    const {key, title, children} = props;
    return (
        <div className="mb-6">
            {children}
        </div>
    );

}