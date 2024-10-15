import { useState, useEffect } from "react";
import { getPopularMovies, getMovie } from "../services/movies.services";

export function useMovies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopularMovies().then(({ data }) => {
			setMovies(data.results);
		});
	}, []);

	return movies;
}

export function useMovie(movieId) {
	const [movie, setMovie] = useState([]);

	useEffect(() => {
		getMovie(movieId).then(({ data }) => {
			setMovie(data);
		});
	}, [movieId]);

	return movie;
}
