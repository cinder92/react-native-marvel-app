import React from 'react'
import { StyleSheet, View } from 'react-native'
import { measures } from '../settings'

const TriangleRight = () => {
      return (
        <View style={styles.triangleRight} />
      )
}

const styles = StyleSheet.create({

  triangleRight : {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: measures.widthPercentageToDP("2%"),
    borderRightWidth: measures.widthPercentageToDP("2%"),
    borderBottomWidth: measures.widthPercentageToDP("2%") * 2,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'white',
    left : measures.widthPercentageToDP("3%"),
    top : measures.heightPercentageToDP("1.5%"),
    transform: [
        {rotate: '90deg'}
      ]
  }
})

export default TriangleRight