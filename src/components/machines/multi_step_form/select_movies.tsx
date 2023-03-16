import {formatDate} from "@/lib/utils/date"
import {cn} from "@/lib/utils/styles"
import {Context, Movie} from "@/machines/multi_step_form/machine"

interface Props {
  context: Context
  movies: readonly Movie[]
  // eslint-disable-next-line no-unused-vars
  selectMovie: (movie: Movie) => void
}
export default function SelectMovies({context, movies, selectMovie}: Props) {
  return (
    <div>
      <ul className="flex flex-wrap gap-5">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className={cn(
              "flex flex-col gap-3 rounded-lg border border-slate-800 p-2 shadow-md transition-all duration-200 hover:shadow-lg",
              context.movie !== null &&
                context.movie.id === movie.id &&
                "bg-blue-100 shadow-xl"
            )}
          >
            <button
              type="button"
              className="flex justify-start"
              onClick={() => {
                selectMovie(movie)
              }}
            >
              <span className="inline-block border-b-2 border-slate-900 transition-all hover:border-blue-500 hover:font-bold">
                {movie.title}
              </span>
            </button>
            <p>
              Released:{" "}
              <span className="font-bold">
                {formatDate(movie.release_date)}
              </span>
            </p>
            <p>
              Rating: <span className="font-bold">{movie.vote_average}</span>/10
            </p>
          </li>
        ))}
      </ul>
    </div>
  )
}
