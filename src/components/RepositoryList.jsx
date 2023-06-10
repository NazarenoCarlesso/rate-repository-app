import React from 'react'
import { Text } from 'react-native'
import { FlatList } from 'react-native'
import { RepositoryItem } from './RepositoryItem'
// Mocks
import repositories from '../data/repositories'

export const RepositoryList = () => {
  return (
    <FlatList
      data={repositories}
      ItemSeparatorComponent={() => <Text />}
      renderItem={({ item: repo }) => (
        <RepositoryItem key={repo.id} {...repo} />
      )}
    />
  )
}
