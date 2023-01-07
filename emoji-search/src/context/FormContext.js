import { createContext, useState } from "react";

export const SearchContext = createContext();

const FormProvider = ({ children }) => {
  const [search, setSearch] = useState("");

  const providerValue = {
    search,
    setSearch,
  };

  return (
    <SearchContext.Provider value={providerValue}>
      {children}
    </SearchContext.Provider>
  );
};

export default FormProvider;
