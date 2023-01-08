import { useContext} from "react";
import { SnapContext } from "../context/SnapContext";

const Search = () => {
    const {search, setSearch} = useContext(SnapContext);

    return (
        <input className="search-form" name="snap" value={search} onChange={e => setSearch(e.target.value)} />
    );
}

export default Search;