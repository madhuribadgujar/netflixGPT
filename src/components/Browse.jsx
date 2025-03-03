import { useSelector } from 'react-redux'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import useNowPopulerMovies from '../hooks/useNowPopulerMovies'
import GptSearch from './GptSearch'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  const showGptSearch = useSelector(state => state.gpt.showGptSearch)
  // console.log(showGptSearch, 'showGptSearch')
  //Fetch data from TMDB api and update store
  useNowPlayingMovies()
  useNowPopulerMovies()
  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  )
}

export default Browse
