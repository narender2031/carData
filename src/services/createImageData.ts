import firestore from '@react-native-firebase/firestore';
type paramsType = {
  image: string,
  createdAt: Date,
  updatedAt: Date,
}

/**
 * This function is used to add car image to firebase.
 * 
 * @param carData 
 * 
 * @function
 * 
 */
export default async function addCarData(carData: paramsType) {
  try {
    await firestore().collection('cars').add(carData);
  } catch (error) {
    throw new Error('Failed to create the record')
  }
}