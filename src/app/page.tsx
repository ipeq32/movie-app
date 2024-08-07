import Image from "next/image";
import jwt from "jsonwebtoken";

const getMovies = async () => {
  const movies = await fetch(`${process.env.MOVIE_API_URL}/movie/top_rated`, {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.MOVIE_API_KEY}`,
    },
  }).then((res) => res.json());

  return movies;
};

const page = async () => {
  const movies = await getMovies();

  return (
    <main className="flex flex-col items-center justify-between gap-5 p-24 min-h-screen">
      <h1 className="text-4xl font-bold text-center">Top Rated Movies</h1>
      <section className="grid grid-cols-3 gap-4 w-full z-0">
        {movies.results.map((movie: any) => (
          <section
            key={movie.id}
            className="relative flex items-center justify-center h-64 w-full rounded-md border border-emerald-400"
          >
            <Image
              fill
              className="object-cover rounded-md"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <div className="absolute z-10 backdrop-blur-md bottom-0">
              {movie.title} ({movie.vote_average})
            </div>
          </section>
        ))}
      </section>
    </main>
  );
};

export default page;
