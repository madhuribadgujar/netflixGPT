import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggessions = () => {
  const gptMovieSearch = useSelector(store => store.gptMovieSearch) || {} // Default to empty object

  const { movieResults, movieNames } = gptMovieSearch // ✅ Correct object destructuring

  //console.log(movieResults, movieNames)

  return (
    <div className="p-2 m-4 bg-black text-white bg-opacity-50">
      <div>
        {movieNames?.map((movieName, index) => (
          <MovieList
            key={movieName}
            title={movieName}
            movies={movieResults[index]}
          />
        ))}
      </div>
    </div>
  )
}

export default GptMovieSuggessions
