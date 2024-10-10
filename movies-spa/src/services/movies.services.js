import { moviesApis } from "../config/http";

export function getPopularMovies() {
	return moviesApis.get("movie/popular");
}

export function getMovies(movieId) {
	return moviesApis.get(`movie/${movieId}`);
}
