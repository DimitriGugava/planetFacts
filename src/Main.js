import { useState, useTransition } from "react";
import data from "./data.json";
import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import Overview from "./Option/overview";
import Structure from "./Option/structure";
import Surface from "./Option/surface";
import React from "react";
import HeaderComp from "./Header/Header";
import ScrollBar from "./ScrollBar/ScrollBar";

const MainComp = (props) => {
  const [hideOverview, setHideOverview] = useState(true);
  const [hideStructure, setHideStructure] = useState(true);
  const [hideSurface, setHideSurface] = useState(true);

  const { id } = useParams();
  const planet = data.find(
    (element) => element.name.toLowerCase() === id.toLowerCase()
  );

  console.log(id);

  const showHide = () => {
    setHideOverview(true);
    setHideStructure(false);
    setHideSurface(false);
  };
  const showHideStr = () => {
    setHideOverview(false);
    setHideStructure(true);
    setHideSurface(false);
  };
  const showHideSurf = () => {
    setHideOverview(false);
    setHideStructure(false);
    setHideSurface(true);
  };
  return (
    <div>
      <div className="mainContainer">
        {!props.headerBar ? (
          <div>
            <div className="planetInfoOption">
              <a onClick={showHide} className="optionText">
                OVERVIEW
              </a>
              <a className="optionText" onClick={showHideStr}>
                STRUCTURE
              </a>
              <a className="optionText" onClick={showHideSurf}>
                SURFACE
              </a>
            </div>
            <div className="breakLineUnderOption"></div>
            {hideOverview ? <Overview planet={planet} /> : ""}
            {hideStructure ? <Structure planet={planet} /> : " "}
            {hideSurface ? <Surface planet={planet} /> : " "}
            <div className="statisticInfoContainer">
              <div className="statisticBox">
                <h2 className="statText">ROTATION TIME</h2>
                <div className="statNumber">{planet.rotation}</div>
              </div>
              <div className="statisticBox">
                <h2 className="statText">REVOLUTION TIME</h2>
                <div className="statNumber">{planet.revolution}</div>
              </div>
              <div className="statisticBox">
                <h2 className="statText">RADIUS</h2>
                <div className="statNumber">{planet.radius}</div>
              </div>
              <div className="statisticBox">
                <h2 className="statText">AVERAGE TEMP.</h2>
                <div className="statNumber">{planet.temperature}</div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
export default MainComp;
