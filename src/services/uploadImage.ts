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
    const reference = await storage().ref(image.filename);
    await reference.putFile(image.path);
    let url = await storage().ref(image.filename).getDownloadURL()

    return url;
  } catch (e) {
    throw new Error('Failed to upload file')
  }
};
