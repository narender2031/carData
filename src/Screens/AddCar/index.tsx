import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {Card, Button, ActivityIndicator, Colors} from 'react-native-paper';
import ImagePicker from 'react-native-image-crop-picker';
import UploadedImage from './UploadedImage';
import uploadimage from '../../services/uploadImage';
import ConfirmationDialog from './ConfirmationDialog';
import { useNavigation } from '@react-navigation/native';
import addCarData from '../../services/createImageData';

type AddCarPropsType = {};

const AddCar: React.FunctionComponent<AddCarPropsType> = () => {
  const [imagePath, setImagePath] = React.useState<object | undefined>(undefined);
  const [showDialog, setShowDialog] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string | undefined >(undefined);
  const [showLoader, setShowLoader] = React.useState<boolean>(false)
  const navigation  = useNavigation();

  const getImpage = async () => {
    try {
      const image  = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      });
      setImagePath(image)
    } catch(error) {
      console.log(error);
    }
  }

  const getImpageCamera = async () => {
    try {
      const image  = await ImagePicker.openCamera({
        width: 300,
        height: 400,
        cropping: true,
        includeBase64: true,
      });
      setImagePath(image)
    } catch(error) {
      console.log(error);
    }
  }

  const upload = async () => {
    try {
    setShowLoader(true)
     let url =  await uploadimage(imagePath)
      setImagePath(undefined);
      if (url) {
        let data = {
          image: url,
          createdAt: new Date(),
          updatedAt: new Date()
        };
        await addCarData(data);
        setShowLoader(false);
        setShowDialog(true);
        setMessage('Image is uploaded');
      }
    } catch (error) {
      setShowDialog(true);
      setMessage('Image is not uploaded! Please try Again :)');
      console.log(error)
    }
  }

  const hanldeClose = () => {
    setShowDialog(false);
    navigation.navigate('Home')
  }

  

  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Card>
          <Card.Content>
            <View style={styles.filed}>
              <UploadedImage image={imagePath} />
            </View>
            <View style={styles.filed}>
              <Button icon="folder" onPress={getImpage}>upload image form Gallery</Button>
              <Button icon="camera" onPress={getImpageCamera}>upload Image from camera</Button>
              <Button icon="upload" mode='contained' onPress={upload}>
                {showLoader ? (
                  <ActivityIndicator animating={true} color={Colors.white}/>
                ): 'Add Car'}
              </Button>
            </View>
          </Card.Content>
        </Card>
        <ConfirmationDialog success={showDialog} message={message} handleDismiss={hanldeClose} />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conatiner: {
    padding: 15,
    height: '100%',
  },
  filed: {
    marginBottom: 10,
  },
});

export default AddCar;
