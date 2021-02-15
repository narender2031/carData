import * as React from 'react';
import {StyleSheet, ImageBackground, View, Text} from 'react-native';
import ImagePlaceHolder from './ImagePlaceholder';
import RNSketchCanvas from "@kichiyaki/react-native-sketch-canvas";

type UploadedImageProps = {
  image: {
    mime: string,
    data: string,
  } | undefined,
  onsaveImage: Function
}

const UploadedImage: React.FunctionComponent<UploadedImageProps> = ({
  image,
  onsaveImage
}) => {

  if (!image) {
    return <ImagePlaceHolder />
  };

  const loadImagePath = (success, path) => {
    if (success) {
      onsaveImage({
        path: path
      })
    }
  }

  return (
    <>
      <View style={styles.container}>
        <View style={{ flex: 1, flexDirection: "row" }}>
          <RNSketchCanvas
            containerStyle={{ backgroundColor: "transparent", flex: 1 }}
            canvasStyle={{ backgroundColor: "transparent", flex: 1 }}
            defaultStrokeIndex={0}
            defaultStrokeWidth={5}
            localSourceImage={{
              filename: image.path,
              directory: '',
              mode: 'ScaleToFill'
            }}
            onSketchSaved={loadImagePath}
            saveComponent={
              <View style={styles.functionButton}>
                <Text style={{ color: "white" }}>Save</Text>
              </View>
            }
            savePreference={() => {
              return {
                folder: "RNSketchCanvas",
                filename: String(Math.ceil(Math.random() * 100000000)),
                transparent: false,
                imageType: "png",
              };
            }}
          />
        </View>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  strokeColorButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
  },
  strokeWidthButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#39579A",
  },
  functionButton: {
    marginHorizontal: 2.5,
    marginVertical: 8,
    height: 30,
    width: 60,
    backgroundColor: "#39579A",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
})

export default UploadedImage;
