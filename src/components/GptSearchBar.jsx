import { useSelector } from 'react-redux'
import langConstants from '../utils/langConstants'
import lang from '../utils/langConstants'

const GptSearchBar = () => {
  let langKey = useSelector(state => state.appConfig.lang)
  console.log(langKey, 'langKeyddd')
  const langKeyMap = { en: 'English', hn: 'Hindi', sp: 'Spanish' }
  langKey = langKeyMap[langKey] || langKey

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12">
        <input
          type="text"
          className="p-4 m-4 border-l-gray-50  col-span-8"
          placeholder={langConstants[langKey].gptSerachPlacholder}
        ></input>
        <button className="py-2 px-4  m-4rounded-lg bg-red-600 text-white col-span-4">
          {lang[langKey].search}
        </button>
      </form>
    </div>
  )
}

export default GptSearchBar
