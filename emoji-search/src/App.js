import useState from "react";
import FormProvider from "./context/FormContext";
import SearchForm from "./components/SearchForm";
import Contents from "./components/Contents";

import "./App.css";

function App() {
  return (
    <FormProvider>
      <h1> Emoji Search </h1>
      <SearchForm />
      <Contents />
    </FormProvider>
  );
}

export default App;
