import { IMG_CDN } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
  console.log(posterPath, 'posterPath')
  return (
    <div className=" pr-4">
      <img
        alt="Movie Cart"
        src={IMG_CDN + posterPath}
        className="max-w-none w-[150px]"
      />
    </div>
  )
}

export default MovieCard
