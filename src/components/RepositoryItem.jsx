import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { StyledText } from './StyledText'
import { RepositoryStats } from './RepositoryStats'
import theme from '../theme'
import { RepositoryItemHeader } from './RepositoryItemHeader'

export const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingVertical: 5
  },
  language: {
    padding: 4,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 4,
    overflow: 'hidden',
    marginVertical: 4
  },
  image: {
    height: 48,
    width: 48,
    borderRadius: 4
  }
})
