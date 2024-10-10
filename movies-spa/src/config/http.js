import axios from "axios";

export const moviesApis = axios.create({
	baseURL: "https://api.themoviedb.org/3/",
	headers: {
		Authorization:
			"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzODVjOWIzYTAwM2QwNjlhODQwNTJjMTk4YWQ0NTgwNiIsIm5iZiI6MTcyODYwNDAxMC44NTE2MTcsInN1YiI6IjVlNDMzOTQ5MGMyNzEwMDAxNTgyN2I4YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yqKRRialJ3n3ZsBOpos2xfX9be13ra9zVOtqHBHekDw",
	},
});
