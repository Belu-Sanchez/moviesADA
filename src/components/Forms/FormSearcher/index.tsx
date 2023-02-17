import { FC, useState } from "react";
import { Props, defaultValue } from './types';

const FormSearch: FC<Props> = ({ onSearch }) => {

    const [fields, setFields] = useState(defaultValue)

    const handelSubmit = (e: any) => {
        e.preventDefault()
        onSearch(fields)
    }
    return (
        <div >
            <form onChange={handelSubmit}>
                <label htmlFor="">Search</label>
                <input
                    type="text"
                    name="query"
                    value={fields.query}
                    onChange={e => setFields(prevState => ({ ...prevState, query: e.target.value }))}
                />
            </form>
        </div>
    );
}

export { FormSearch };

