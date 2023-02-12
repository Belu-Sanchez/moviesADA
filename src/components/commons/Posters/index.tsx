import { FC } from "react";
import { Props } from "./types";
import './styles.scss';


const Posters: FC<Props> = ({ title, children, variant }) => {


    return (
        <>
            <div className="scroll">
                <h6 className="title">{title}</h6>
                <div className={`${variant}`} >
                    {children}
                </div>
            </div>
        </>
    );
}

export { Posters }