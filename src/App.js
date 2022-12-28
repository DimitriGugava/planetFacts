import "./App.css";
import { useState, useTransition } from "react";
import ScrollBar from "./ScrollBar/ScrollBar";
import MainComp from "./Main";
import HeaderComp from "./Header/Header";
import { Routes, Route, Link, useParams, useNavigate } from "react-router-dom";
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
      <ScrollBar
        handleSearchBar={handleSearchBar}
        setHeaderBar={setHeaderBar}
      />
      {headerBar ? (
        <HeaderComp handleSearchBar={handleSearchBar} headerBar={headerBar} />
      ) : null}
      <Routes>
        <Route
          path="/planets/:id"
          element={
            <MainComp
              handleSearchBar={handleSearchBar}
              setHeaderBar={setHeaderBar}
              headerBar={headerBar}
            />
          }
        >
          {/* <Route path="/planets/:id" element={<Overview />} />
          <Route path="/planets/:id/structure" element={<Structure />} />
          <Route path="/planets/:id/surface" element={<Surface />} /> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
