import "./App.css";

import PhotoList from "./components/PhotoList";
import Search from "./components/Search";
import SnapProvider from "./context/SnapContext";

function App() {
  return (
    <div>
      <SnapProvider>
        <header id="header">
          <h1>SnapShot</h1>
          <Search />
        </header>
        <PhotoList />
      </SnapProvider>
    </div>
  );
}

export default App;
