import { useDispatch, useSelector } from 'react-redux'
import langConstants from '../utils/langConstants'
import lang from '../utils/langConstants'
import { useRef } from 'react'
import openai from '../utils/openai'
import { setGptMovieSearch } from '../utils/gptMovieSearchSlice'

const GptSearchBar = () => {
  let langKey = useSelector(state => state.appConfig.lang)
  const langKeyMap = { en: 'English', hn: 'Hindi', sp: 'Spanish' }
  langKey = langKeyMap[langKey] || langKey

  const searchText = useRef(null)
  const searchMovieTMBD = async movie => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization:
          'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTdiZWYzYjA5MTUwM2RkN2YxYzQyYjZjNGIyYzY5MCIsIm5iZiI6MTczOTUyMjE5MC40MzYsInN1YiI6IjY3YWYwMDhlZjEyY2VjNmUzMDFjYjZkMyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.4r5-UiIlz0CqXPvv0SkocSGdF1rbOGJHWOGtpHPvjkk'
      }
    }

    const data = await fetch(url, options)
    const json = await data.json()
    return json.results
  }

  const dispatch = useDispatch()
  const handleGptSearchClick = async () => {
    // const text = searchText.current.value
    // const gptQuery =
    //   'Act as Movie Recommendation sys and suggest some movies quey : ' +
    //   text +
    //;('. only give me names of 5 movies comma seperated like the example result given a head example : Chava, Pushpa2,sky force, stree2, bhool bhulaiyaa3')
    // const GptResult = await openai.chat.completions.create({
    //   messages: [{ role: 'user', content: gptQuery }],
    //   model: 'gpt-3.5-turbo',
    //   max_tokens: 100
    // })
    const getMovies = [
      'Sniper: The Last Stand',
      'Gladiator II',
      'Paddington in Peru',
      'Sonic the Hedgehog 3',
      'My Fault: London',
      'Amaran',
      'Panda Plan'
    ]
    //use TMDB api
    //line 50 returns 5 promises not result
    const promiseArr = getMovies.map(m => searchMovieTMBD(m))
    const tmdbResults = await Promise.all(promiseArr)
    dispatch(
      setGptMovieSearch({ movieNames: getMovies, movieResults: tmdbResults })
    )
  }
  return (
    <div className="pt-[35%] md:pt-[10%] md:p-0 flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={e => e.preventDefault()}
      >
        <input
          type="text"
          ref={searchText}
          className="p-4 m-4 border-l-gray-50  col-span-8"
          placeholder={langConstants[langKey].gptSerachPlacholder}
        ></input>
        <button
          className="py-2 px-4  m-4rounded-lg bg-red-600 text-white col-span-4"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
