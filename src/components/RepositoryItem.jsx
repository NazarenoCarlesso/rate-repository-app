import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { StyledText } from './StyledText'

export const RepositoryItem = (props) => {
  return (
    <View style={styles.container}>
      <StyledText fontSize='subheading' fontWeight='bold'>
        {props.fullName}
      </StyledText>
      <StyledText fontWeight='bold'>
        {props.description}
      </StyledText>
      <StyledText color='secondary'>
        {props.language}
      </StyledText>
      <StyledText>
        Stars: {props.stargazersCount}
      </StyledText>
      <StyledText>
        Forks: {props.forksCount}
      </StyledText>
      <StyledText>
        Review: {props.reviewCount}
      </StyledText>
      <StyledText>
        Rating: {props.ratingAverage}
      </StyledText>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5
  },
  strong: {
    color: '#09f',
    fontWeight: 'bold',
    marginBottom: 5
  }
})
