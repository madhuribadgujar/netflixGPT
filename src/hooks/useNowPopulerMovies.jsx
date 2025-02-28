import { useDispatch } from 'react-redux'
import { API_OPTIONS } from '../utils/constants'
import { addPopulerMovies } from '../utils/movieSlice'
import { useEffect } from 'react'

const useNowPopulerMovies = () => {
  const dispatch = useDispatch()

  const getNowPopulerMovies = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',
      API_OPTIONS
    )
    const json = await data.json()
    console.log(json.results, 'jjjjj')
    dispatch(addPopulerMovies(json.results))
  }

  useEffect(() => {
    getNowPopulerMovies()
  }, [])
}

export default useNowPopulerMovies
