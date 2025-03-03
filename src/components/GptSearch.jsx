import { BGURL } from '../utils/constants'
import GptMovieSuggessions from './GptMovieSuggessions'
import GptSearchBar from './GptSearchBar'

const GptSearch = () => {
  return (
    <div>
      <div className="fixed -z-10">
        <img src={BGURL}></img>
      </div>
      <GptSearchBar />
      <GptMovieSuggessions />
    </div>
  )
}

export default GptSearch
