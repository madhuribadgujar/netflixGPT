import { useDispatch, useSelector } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addTrailerVideo } from '../utils/movieSlice'
import { useEffect } from 'react'

const useMovieTrailer = movieId => {
  console.log(movieId, 'movieId')
  const dispatch = useDispatch()
  // const trailerVideo = useSelector(store => store.movies?.trailerVideo)
  //feth trailer

  const getVideos = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/' + movieId + '/videos',
      API_OPTIONS
    )
    const json = await data.json()
    const filterData = json.results.filter(video => video.type === 'Trailer')
    const trailer =
      filterData.length === 0 ? json?.results?.[0] : filterData?.[0]
    //setTrailerId(trailer?.key)
    dispatch(addTrailerVideo(trailer))
  }
  useEffect(() => {
    getVideos()
  }, [])
}

export default useMovieTrailer
