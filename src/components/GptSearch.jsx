import { BGURL } from '../utils/constants'
import GptMovieSuggessions from './GptMovieSuggessions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BGURL}
          className="h-screen object-cover md:h-auto md:object-contain"
        ></img>
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggessions />
      </div>
    </>
  )
}

export default GptSearch
