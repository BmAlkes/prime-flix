import { useEffect, useState } from "react";
import "./favorite.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Favorite = () => {
  const [favorite, setFavorite] = useState([]);

  useEffect(() => {
    const myList = localStorage.getItem("@primeflix");

    setFavorite(JSON.parse(myList) || []);
  }, []);
  const handleRemoveMovie = (id) => {
    let filterMovies = favorite.filter((item) => item.id !== id);

    setFavorite(filterMovies);
    localStorage.setItem("@primeflix", JSON.stringify(filterMovies));
    toast.success("movie removed with sucess");
  };

  {
    favorite.length === 0 && <span>You dont have any movie save :()</span>;
  }
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
                <button onClick={() => handleRemoveMovie(item.id)}>
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Favorite;
