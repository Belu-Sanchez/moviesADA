import { ReactNode } from "react";

type Props = {
    children?: ReactNode;
    type: "submit" | "button" | "reset";
    variant?: string;
    icon?: string;
    handleClick?: () => void;
}

export default Props;