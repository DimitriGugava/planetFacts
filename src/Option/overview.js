import "../App.css";
import link from "../icons/link.svg";
const Overview = (props) => {
  return (
    <div>
      <img className="planetImage" src={props.planet.images.planet} />
      <h1 className="headerTextPlanet">{props.planet.name}</h1>
      <p className="contentText">{props.planet.overview.content}</p>

      <div className="sourceBox">
        <a className="sourceText">Source:</a>
        <a
          target="_blank"
          href={props.planet.overview.source}
          className="wikipediaText"
        >
          Wikipedia:
        </a>
        <a target="_blank">
          <img
            href={props.planet.overview.source}
            src={link}
            target="_blank"
            className="linkIcon"
          />
        </a>
      </div>
    </div>
  );
};

export default Overview;
