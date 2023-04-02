import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Box, StatusBar } from 'native-base'
import { COLORS } from '../../styles'
import LottieView from 'lottie-react-native'

const Welcome = () => {
  return (
    <Box bgColor={COLORS.SECONDARY} flex={'1'} >
      <StatusBar backgroundColor={COLORS.PRIMARY} />
      <Box
        width={'95%'}
        height={'40%'}
      >
        <LottieView
          source={{ uri: 'https://assets9.lottiefiles.com/packages/lf20_pm5qdb4j.json' }}
          autoPlay
          loop={true}
        />
      </Box>
    </Box>
  )
}

export default Welcome

const styles = StyleSheet.create({})