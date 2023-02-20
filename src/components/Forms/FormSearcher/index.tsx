import { FC, useState } from "react";
import { Props, FormField } from './types';
import { MdSavedSearch } from 'react-icons/md';
import './styles.scss';

const FormSearch: FC<Props> = ({ onSearch }) => {

    const defaultValue: FormField = {
        query: ""
    }
    const [fields, setFields] = useState(defaultValue)

    const handelSubmit = (e: any) => {
        e.preventDefault()
        onSearch(fields)
    }
    return (
        <div className="container-search-form">
            <div className="search-form">
                <form className="search-form" onChange={handelSubmit}>
                    <input className="input" type="text" name="query" placeholder="Search..." value={fields.query}
                        onChange={e => setFields(prevState => ({ ...prevState, query: e.target.value }))} />
                </form>
                <div className="icon-wrapper">
                    <MdSavedSearch className="icon" />
                </div>
            </div>
        </div>

    );
}

export { FormSearch };

