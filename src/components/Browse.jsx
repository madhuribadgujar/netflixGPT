import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  //Fetch data from TMDB api and update store
  useNowPlayingMovies()
  return (
    <div>
      <Header />
      <MainContainer />
      <SecondaryContainer />

      {/*
  - MainContainer
    - VideoBackground
    - VideoTitle
  - SecondaryContainer
    - MovieList *n
      - cards *n
      -
  */}
    </div>
  )
}

export default Browse
