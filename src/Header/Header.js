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
          <>
            <div className="allPlanetList">
              <div className="planetSearchBarCont">
                <div className="planetColorBall"></div>
                <Link to="/planets/mercury" className="planetName">
                  MERCURY
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
                <Link to="/planets/saturn" className="planetName">
                  SATURN
                </Link>
                <img src={arrow} className="arrow" />
              </div>
              <div className="planetSearchBarCont">
                <div className="planetColorBallUranus"></div>
                <Link to="/planets/uranus" className="planetName">
                  URANUS
                </Link>
                <img src={arrow} className="arrow" />
              </div>
              <div className="planetSearchBarCont">
                <div className="planetColorBallNeptune"></div>
                <Link to="/planets/neptune" className="planetName">
                  NEPTUNE
                </Link>
                <img src={arrow} className="arrow" />
              </div>
            </div>
          </>
        ) : (
          " "
        )}
      </div>
    </div>
  );
};
export default HeaderComp;
