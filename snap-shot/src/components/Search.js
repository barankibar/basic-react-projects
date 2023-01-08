import { useContext, useState } from "react";
import { SnapContext } from "../context/SnapContext";

const Search = () => {
    const {search, setSearch} = useContext(SnapContext);

    return (
        <input name="snap" value={search} onChange={e => setSearch(e.target.value)} />
    );
}

export default Search;