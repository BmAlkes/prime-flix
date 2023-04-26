import { useEffect, useState } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";
import "./styles.css";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
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
      setLoading(false);
    }
    loadMovies();
  }, []);
  console.log(movies);
  if (loading) {
    return (
      <div className="loading">
        <h2>Loading....</h2>
      </div>
    );
  }

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
