import "./NavBar.css";
import Form from "../Form/Form";
// import { Link } from "react-router-dom";

const NavBar = ({ articles, setSection }) => {
  return (
    <div className="nav-container">
      {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        <h1 className="title-text">NY Times News Reader</h1>
      {/* </Link> */}
      <Form articles={articles} setSection={setSection}/>
    </div>
  );
};

export default NavBar;
