import { useEffect, useState } from "react";
import "./favorite.css";
import { Link } from "react-router-dom";

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");

    setFavorite(JSON.parse(myList) || []);
  }, []);
  return (
    <div className="myMovies">
      <h1>My Movies</h1>
      <ul>
        {favorite.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.title}</span>
              <div>
                <Link to={`/movies/${item.id}`}>See details</Link>
                <button>delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorite;
