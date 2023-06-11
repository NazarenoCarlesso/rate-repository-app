import React from 'react'
import { Image, View } from 'react-native'
import { StyledText } from './StyledText'
import { styles } from './RepositoryItem'

export const RepositoryItemHeader = ({ ownerAvatarUrl, language, fullName, description }) => {
  return (
    <View style={{ flexDirection: 'row', paddingBottom: 2 }}>
      <View style={{ paddingRight: 10 }}>
        <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
      </View>
      <View style={{ flex: 1 }}>
        <StyledText fontSize='subheading' fontWeight='bold'>{fullName}</StyledText>
        <StyledText color='secondary'>{description}</StyledText>
        <StyledText style={styles.language}>{language}</StyledText>
      </View>
    </View>
  )
}
