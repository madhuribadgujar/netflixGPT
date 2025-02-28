import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {
  const movies = useSelector(state => state.movies)
  
  return (
    movies?.nowPlayingMovies &&
    movies?.populerMovies && (
      <div className=" bg-black">
        <div className="-mt-20 rpl-10 elative z-10">
          <MovieList title={'Now Playing'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Tranding'} movies={movies.nowPlayingMovies} />
          <MovieList title={'Populer'} movies={movies.populerMovies} />
          <MovieList title={'Upcoming'} movies={movies.nowPlayingMovies} />
        </div>
      </div>
    )
  )
}

export default SecondaryContainer
