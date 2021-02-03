import * as React from 'react';
import {View, StyleSheet} from 'react-native';
import { colors } from '@/constants/colors'

const ImagePlaceholder = () => {
  return (
    <View style={styles.container} />
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    backgroundColor: colors.imagePlaceHolderColor
  }
})

export default ImagePlaceholder;
