import { useEffect } from "react";

const Search = () => {

    useEffect(() => {
    })

    return (
        <>


            <div >
                <label htmlFor="">Search</label>
                <input
                    type="text"
                    name="text"
                // value={fields.text}
                // onChange={e => setFileds(prevState => ({ ...prevState, text: e.target.value }))}
                />
            </div>
        </>


    );
}

export { Search };

