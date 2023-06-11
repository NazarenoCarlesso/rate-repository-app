import axios from 'axios'

export const fetchAnimeById = async (id) => {
  return await axios.get(`https://api.jikan.moe/v4/anime/${id}`)
    .then(response => response.data)
    .catch(error => console.log(error))
    .then(anime => anime.data)
}
