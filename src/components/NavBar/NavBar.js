import "./NavBar.css";
// import Form from "../Form/Form";

const NavBar = ({ articles, setSection }) => {
  return (
    <div className="nav-container">
      <h1 className="title-text">NY Times News Reader</h1>
      {/* <Form articles={articles} setSection={setSection}/> */}
    </div>
  );
};

export default NavBar;
