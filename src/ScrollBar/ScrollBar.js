import scroll from "../icons/scroll.svg";
import "../App.css";
const ScrollBar = (props) => {
  return (
    <div>
      <header className="headerContainer">
        <h1 className="headerText">THE PLANETS</h1>
        <img
          src={scroll}
          className="headerScroll"
          onClick={props.handleSearchBar}
        />
      </header>
      <div className="breakLine"></div>
    </div>
  );
};

export default ScrollBar;
