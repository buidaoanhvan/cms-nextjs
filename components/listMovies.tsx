import ItemMovies from "./itemMovies";
import CutPagination from "./cutPagination";

async function getMovies(page: number) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTI3OTZjZDIzYWRkOThkNmU1OTlmOWFmZDRhOGJkNyIsIm5iZiI6MTcyNzQwODc2OS42NDE2MjEsInN1YiI6IjY2ZjYyOTkwYmUzZjFjYWI0ZDcwYTE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytWTJsDztVmGntKcHbynlpVib2MwJ-y1niYyAkSNaUM",
    },
  };
  const movies = await fetch(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=${page}`,
    options
  ).then(async (response) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return response.json();
  });
  return movies;
}

export default async function ListMovies({ page }: { page: number }) {
  const movies = await getMovies(page);
  return (
    <>
      <div className="grid-movies">
        {movies.results.map((movie: any, index: number) => (
          <ItemMovies key={index} movie={movie} />
        ))}
      </div>
      <CutPagination page={page} total={movies.total_pages} />
    </>
  );
}
