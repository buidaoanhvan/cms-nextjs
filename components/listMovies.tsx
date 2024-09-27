import Image from "next/image";

export default async function ListMovies() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYTI3OTZjZDIzYWRkOThkNmU1OTlmOWFmZDRhOGJkNyIsIm5iZiI6MTcyNzQwODc2OS42NDE2MjEsInN1YiI6IjY2ZjYyOTkwYmUzZjFjYWI0ZDcwYTE1OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytWTJsDztVmGntKcHbynlpVib2MwJ-y1niYyAkSNaUM",
    },
  };
  const movies = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
    options
  ).then(async (response) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return response.json();
  });

  return (
    <div className="grid-movies">
      {movies.results.map((movie: any, index: number) => (
        <div 
          key={movie.id} 
          className="border rounded-md w-full mx-auto opacity-0 scale-95 animate-[fadeIn_0.5s_ease-out_forwards]"
          style={{ animationDelay: `100ms` }}
        >
          <Image
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-t-md"
          />
          <div className="p-4">
            <h1 className="text-lg font-bold line-clamp-1">{movie.title}</h1>
            <p className="line-clamp-3">{movie.overview}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
