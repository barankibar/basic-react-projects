import { createContext, useState } from "react";

export const SnapContext = createContext();

const SnapProvider = ({children}) => {
    const [search, setSearch] = useState('');

    const providerValue = {
        search,
        setSearch,
    };

    return(
        <SnapContext.Provider value={providerValue}> {children} </SnapContext.Provider>
    )
}

export default SnapProvider;