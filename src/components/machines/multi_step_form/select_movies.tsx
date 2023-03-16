import {formatDate} from "@/lib/utils/date"
import {Movie} from "@/machines/multi_step_form/machine"

interface Props {
  movies: readonly Movie[]
}
export default function SelectMovies({movies}: Props) {
  return (
    <div>
      <ul className="flex flex-wrap gap-5">
        {movies.map((movie) => (
          <li
            key={movie.id}
            className="flex flex-col gap-3 rounded-lg border border-slate-800 p-2 shadow-md transition-all duration-200 hover:shadow-lg"
          >
            <button type="button" className="flex justify-start">
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
