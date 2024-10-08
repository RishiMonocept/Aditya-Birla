import { View, Text } from 'react-native'
import React from 'react'
import { borderRadius, sizeWithoutScale, spacingModerateScale } from '../../../res/dimension'
import { StyleSheet } from 'react-native'
import colors from '../../../res/theme/colors'
import { fontSize, fontWeight, lineHeight } from '../../../res/theme/fonts'

export default function filterCheckBoxAndText({title}) {
  return (
    <View style={{gap:spacingModerateScale.space_base}}>
      <View style={styles.checkboxContainer}/>
      <Text style={styles.filterText}>{filterText}</Text>
      
    </View>
  )
}
const styles=StyleSheet.create({
  checkboxContainer:{
    height:sizeWithoutScale.height16,
    width:sizeWithoutScale.width16,
    borderRadius:borderRadius.borderRadius4,
    borderColor:colors.primaryColors.grayGreen,
  },
  filterText:{
    fontSize:fontSize.font16,
    fontWeight:fontWeight.weight400,
    lineHeight:lineHeight.lineHeight17dot6,
    color:colors.primaryColors.black,
  }
})