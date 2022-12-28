import "../App.css";
import link from "../icons/link.svg";
const Surface = (props) => {
  return (
    <>
      <img className="planetImage" src={props.planet.images.internal} />
      <img className="planetImageGeo" src={props.planet.images.geology} />
      <h1 className="headerTextPlanet">{props.planet.name}</h1>
      <p className="contentText">{props.planet.geology.content}</p>

      <div className="sourceBox">
        <a className="sourceText">Source:</a>
        <a
          target="_blank"
          className="wikipediaText"
          href={props.planet.geology.source}
        >
          Wikipedia
        </a>
        <a target="_blank">
          <img
            src={link}
            className="linkIcon"
            href={props.planet.geology.source}
          />
        </a>
      </div>
    </>
  );
};

export default Surface;
