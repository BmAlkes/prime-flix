import { Link } from "react-router-dom";
import "./styles.css";

const Error = () => {
  return (
    <div className="loading">
      <h2>404</h2>
      <p>Page not found...</p>
      <Link className="notFound" to="/">
        See all movies
      </Link>
    </div>
  );
};

export default Error;
