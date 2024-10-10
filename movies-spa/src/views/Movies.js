import { useEffect, useState } from "react";
import { getPopularMovies } from "../services/movies.services";

export function Movies() {
	const [movies, setMovies] = useState([]);

	useEffect(() => {
		getPopularMovies().then(({ data }) => {
			setMovies(data.results);
		});
	}, []);

	return (
		<>
			<section>
				<h1>Filmes populares</h1>
				{movies.map((movie) => (
					<li>{movie.title}</li>
				))}
			</section>
		</>
	);
}
