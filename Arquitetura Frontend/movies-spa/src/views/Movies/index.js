import { MovieItem } from "../../components/MovieItem";
import { useMovies } from "../../hooks/useMovies";
import styles from "./Movies.module.css";

export function Movies() {
	const movies = useMovies();
	return (
		<>
			<section className={styles.movies}>
				<h1>Filmes populares</h1>

				<div className={styles.movieList}>
					{movies.map((movie) => (
						<MovieItem key={movie.id} movie={movie} />
					))}
				</div>
			</section>
		</>
	);
}
