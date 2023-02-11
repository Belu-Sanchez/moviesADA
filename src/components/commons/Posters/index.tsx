import { FC} from "react";
import './styles.scss';
import { Props } from "./types";


const Posters: FC<Props> = ({ title, children, }) => {


    return (
        <>
            <div className="scroll">
                <h6 className="title">{title}</h6>
                <div className="row pb-4" >
                    <div className="col card-block" >
                        {children}
                    </div>
                </div>
            </div>
        </>
    );
}

export { Posters }