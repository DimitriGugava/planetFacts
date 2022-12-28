import "./App.css";
import { useState, useEffect } from "react";
import ScrollBar from "./ScrollBar/ScrollBar";
import MainComp from "./Main";
import HeaderComp from "./Header/Header";
import {
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  Navigate,
} from "react-router-dom";
import data from "./data.json";
import Overview from "./Option/overview";
import Structure from "./Option/structure";
import Surface from "./Option/surface";
const App = () => {
  const [headerBar, setHeaderBar] = useState(false);
  const handleSearchBar = () => {
    return setHeaderBar(!headerBar);
  };

  return (
    <div className="App">
      <div className="parentContainer">
        <ScrollBar
          handleSearchBar={handleSearchBar}
          setHeaderBar={setHeaderBar}
        />
        {headerBar ? (
          <HeaderComp handleSearchBar={handleSearchBar} headerBar={headerBar} />
        ) : null}
        <Routes>
          <Route path="/" element={<Navigate to="/planets/mercury" />} />
          <Route
            path="/planets/:id"
            element={
              <MainComp
                handleSearchBar={handleSearchBar}
                setHeaderBar={setHeaderBar}
                headerBar={headerBar}
              />
            }
          ></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
