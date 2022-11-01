import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Something Went Wrong! Please hit the "Return Home" button to return to Articles.</h1>
      <Link to="/" style={{ textDecoration: "none" }}>
        <button>Return Home</button>
      </Link>
    </div>
  )
}

export default ErrorPage
