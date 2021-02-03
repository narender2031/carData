import storage from '@react-native-firebase/storage';

type uploadImageParamsType = {
  filename: string,
  mime: string,
  path: string,
};

/**
 * This function is used to upload images to firebase storage.
 * It returns the string URL.
 * 
 * @param image
 * 
 * @function
 * 
 * @return {url} 
 * 
 */

export default async function uploadImage(image: uploadImageParamsType) {
  try {
    const fileName = image.filename ? image.filename : `IMG-${new Date()}`;
    const reference = await storage().ref(fileName);
    await reference.putFile(image.path);
    let url = await storage().ref(fileName).getDownloadURL()

    console.info('Image is uploaded :)')
    return url;
  } catch (e) {
    throw new Error('Failed to upload file')
  }
};
