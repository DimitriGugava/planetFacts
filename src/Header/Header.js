import ReactDOM from "react-dom";
import arrow from "../icons/arrow.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
const HeaderComp = (props) => {
  return (
    <div>
      <div className="mainContainer">
        {props.headerBar ? (
          <div className="allPlanetList">
            <div className="planetSearchBarCont">
              <div className="planetColorBall"></div>
              <Link to="/planets/mercury">
                <h1 className="planetName">MERCURY</h1>
              </Link>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallVenus"></div>
              <Link to="/planets/venus" className="planetName">
                VENUS
              </Link>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallEarth"></div>
              <Link to="/planets/earth" className="planetName">
                EARTH
              </Link>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallMars"></div>
              <Link to="/planets/mars" className="planetName">
                MARS
              </Link>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallJupiter"></div>
              <Link to="/planets/jupiter" className="planetName">
                JUPITER
              </Link>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallSaturn"></div>
              <h1 className="planetName">SATURN </h1>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallUranus"></div>
              <h1 className="planetName">URANUS </h1>
              <img src={arrow} className="arrow" />
            </div>
            <div className="planetSearchBarCont">
              <div className="planetColorBallNeptune"></div>
              <h1 className="planetName">NEPTUNE </h1>
              <img src={arrow} className="arrow" />
            </div>
          </div>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
export default HeaderComp;
