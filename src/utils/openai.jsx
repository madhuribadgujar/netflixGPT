import OpenAI from 'openai'
import { GPT_OPENAI_SCREATE_KEY } from './constants'

const openai = new OpenAI({
  apiKey: GPT_OPENAI_SCREATE_KEY,
  dangerouslyAllowBrowser: true
})

export default openai
