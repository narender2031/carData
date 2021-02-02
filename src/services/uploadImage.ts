import storage from '@react-native-firebase/storage';

type uploadImageParamsType = {
  filename: string,
  mime: string,
  path: string,
};

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
