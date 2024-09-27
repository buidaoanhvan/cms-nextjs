import Image from "next/image";

export default function ItemMovies({ movie }: { movie: any }) {
  const blurDataURL = `data:image/svg+xml;base64,${Buffer.from(
    `<svg width="400" height="600" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="600" fill="#CCCCCC"/>
      <text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24" fill="#666666">
        ${movie.title}
      </text>
    </svg>`
  ).toString('base64')}`;

  return (
    <div
      className="border rounded-md w-full mx-auto opacity-0 scale-95 animate-[fadeIn_0.5s_ease-out_forwards]"
      style={{ animationDelay: `100ms` }}
    >
      <Image
        src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
        alt={movie.title}
        width={500}
        height={320}
        priority
        placeholder="blur"
        blurDataURL={blurDataURL}
        className="w-full h-auto aspect-[2/3] object-cover rounded-t-md"
      />
      <div className="p-4">
        <h1 className="text-lg font-bold line-clamp-1">{movie.title}</h1>
        <p className="line-clamp-3">{movie.overview}</p>
      </div>
    </div>
  );
}
