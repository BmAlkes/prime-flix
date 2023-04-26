import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import api from "../../services/api";
import "./styles.css";

const MoviesDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState();
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    async function loadMovies() {
      await api
        .get(`/movie/${id}`, {
          params: {
            api_key: "4aea5aea253fc563265bdd3d7cab46c1",
            language: "en-US",
          },
        })
        .then((response) => {
          setMovie(response.data);
          setLoading(false);
        })
        .catch(() => {
          navigate("/");
        });
    }
    loadMovies();
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <h2>Loading detail movie...</h2>
      </div>
    );
  }

  return (
    <div className="movie-info">
      <h1>{movie.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
      />
      <h3>Overview</h3>
      <p>{movie.overview}</p>
      <strong>Rating: {movie.vote_average} / 10</strong>
      <div className="area-button">
        <button>Save</button>
        <button> Trailer</button>
      </div>
    </div>
  );
};

export default MoviesDetails;
