import { Link } from "react-router-dom";
import "./styles.css";

const Header = () => {
  return (
    <header>
      <Link className="logo" to="/">
        Prime Flix
      </Link>
      <Link className="favorite" to="/favorite">
        Favorite
      </Link>
      <form>
        <input type="text" placeholder="search movie" />
        <button>Search</button>
      </form>
    </header>
  );
};

export default Header;
