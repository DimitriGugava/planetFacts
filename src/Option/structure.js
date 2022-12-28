import "../App.css";
import link from "../icons/link.svg";
const Structure = (props) => {
  return (
    <>
      <img className="planetImage" src={props.planet.images.internal} />
      <h1 className="headerTextPlanet">{props.planet.name}</h1>
      <p className="contentText">{props.planet.structure.content}</p>

      <div className="sourceBox">
        <a className="sourceText">Source:</a>
        <a
          target="_blank"
          href={props.planet.structure.source}
          className="wikipediaText"
        >
          Wikipedia
        </a>
        <a target="_blank">
          <img
            src={link}
            href={props.planet.structure.source}
            className="linkIcon"
          />
        </a>
      </div>
    </>
  );
};
export default Structure;
