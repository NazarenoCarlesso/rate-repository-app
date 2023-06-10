import React from 'react'
import { Text, StyleSheet } from 'react-native'
import theme from '../theme'

export const StyledText = ({ children, color, fontSize, fontWeight, style, ...restOfProps }) => {
  const textStyles = [
    styles.text,
    color === 'primary' && styles.colorPrimary,
    color === 'secondary' && styles.colorSecondary,
    fontSize === 'subheading' && styles.subheading,
    fontWeight === 'bold' && styles.bold
  ]

  return (
    <Text style={textStyles} {...restOfProps}>
      {children}
    </Text>
  )
}

const styles = StyleSheet.create({
  text: {
    fontSize: theme.fontSizes.body,
    color: theme.colors.textPrimary,
    fontWeight: theme.fontWeights.normal,
    fontFamily: theme.fonts.main
  },
  bold: {
    fontWeight: theme.fontWeights.bold
  },
  subheading: {
    fontSize: theme.fontSizes.subheading
  },
  colorSecondary: {
    color: theme.colors.textSecondary
  },
  // !! asi es como no va:
  small: {
    fontSize: 10
  }
})
