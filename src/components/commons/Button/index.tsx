import { FC } from "react";
import Props from "./types"

const Button: FC<Props> = ({variant, children, type, icon, handleClick }) => {
    return (
        <button className={`btn btn-${variant}`} type={type} onClick={handleClick}>
            {children}
            {icon && <i className={`bi bi-${icon} ${children ? "ms-2" : ""}`}></i>}
            </button>
    );
}
export { Button }