import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import { colors } from '../../constants/colors'
import ImagePlaceHolder from './ImagePlaceholder';

type UploadedImageProps = {
  image: {
    mime: string,
    data: string,
  } | undefined
}

const UploadedImage: React.FunctionComponent<UploadedImageProps> = ({
  image
}) => {

  if (!image) {
    return <ImagePlaceHolder />
  };

  return (
    <>
      <Image source={{uri: `data:${image.mime};base64,${image.data}`}}  style={styles.container}/>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  }
})

export default UploadedImage;
