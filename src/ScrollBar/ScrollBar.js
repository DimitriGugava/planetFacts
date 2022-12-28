import scroll from "../icons/scroll.svg";
import "../App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
} from "react-router-dom";
import MainComp from "../Main";
const ScrollBar = (props) => {
  return (
    <div className="toShowAll">
      <header className="headerContainer">
        <h1 className="headerText">THE PLANETS</h1>
        <img
          src={scroll}
          className="headerScroll"
          onClick={props.handleSearchBar}
        />
      </header>
      <div className="fordesktopandtablet">
        <Link to="/planets/mercury">
          <h1 className="planetName">MERCURY</h1>
        </Link>
        <Link to="/planets/venus" className="planetName">
          VENUS
        </Link>
        <Link to="/planets/earth" className="planetName">
          EARTH
        </Link>
        <Link to="/planets/mars" className="planetName">
          MARS
        </Link>
        <Link to="/planets/jupiter" className="planetName">
          JUPITER
        </Link>
        <Link to="/planets/saturn" className="planetName">
          SATURN
        </Link>
        <Link to="/planets/uranus" className="planetName">
          URANUS
        </Link>
        <Link to="/planets/neptune" className="planetName">
          NEPTUNE
        </Link>
      </div>
      <div className="breakLine"></div>
    </div>
  );
};

export default ScrollBar;
