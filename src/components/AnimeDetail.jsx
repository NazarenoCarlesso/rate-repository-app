import React, { useEffect, useState } from 'react'
import { Button, Image, Text, View } from 'react-native'
import { fetchAnimeById } from '../services/jikan'

export const AnimeDetail = () => {
  [id, setId] = useState(1)
  [anime, setAnime] = useState({})

  const getAnimeById = async () => {
    setAnime(await fetchAnimeById(id))
  }

  useEffect(() => {
    getAnimeById()
  }, [id])

  onNext = () => setId(state => state + 1)

  onPrev = () => setId(state => state - 1)

  return (
    <View>
      <Text>{anime.title}</Text>
      <Text>{anime.type}</Text>
      <Text>{anime.year}</Text>
      <Image
        style={{ width: 225, height: 335 }}
        source={{ uri: anime.images?.jpg.image_url }}
        alt={anime.title}
      />
      <Button title={'<'} onPress={() => onPrev()} />
      <Button title={'>'} onPress={() => onNext()} />
    </View>
  )
}
