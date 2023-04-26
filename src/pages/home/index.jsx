import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function loadMovies() {
      const response = await api.get("movie/now_playing", {
        params: {
          api_key: "4aea5aea253fc563265bdd3d7cab46c1",
          language: "en-US",
          pages: [1, 2],
        },
      });
      setMovies(response.data.results);
    }
    loadMovies();
  }, []);
  console.log(movies);
  return (
    <div className="container">
      <div className="lista-filmes">
        {movies.map((movie) => {
          return (
            <article key={movie.id}>
              <strong>{movie.title}</strong>
              <img
                src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                alt={movie.title}
              />
              <Link to={`/movies/${movie.id}`}>Acess Movie</Link>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
