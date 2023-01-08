import "./App.css";

import PhotoList from "./components/PhotoList";
import Search from "./components/Search";
import SnapProvider from "./context/SnapContext";

function App() {
  return (
    <div> 
      <SnapProvider>
        <h1>SnapShot</h1>
        <Search />
        <PhotoList />
      </SnapProvider>
    </div>
  );
}

export default App;
