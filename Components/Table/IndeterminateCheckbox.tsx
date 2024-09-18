import React from "react";

export function IndeterminateCheckbox({ indeterminate, ...rest }: any) {
    const ref = React.useRef<any>(null);
    const { id } = rest;

    React.useEffect(() => {
        if (typeof indeterminate === "boolean") {
            ref.current.indeterminate = !rest.checked && indeterminate;
        }
    }, [ref, indeterminate]);

    return (
        <input
            type="checkbox"
            ref={ref}
            {...rest}
            id={id}
            className=" focus:outline-none focus:ring-0"
        />
    );
}