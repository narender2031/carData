import firestore from '@react-native-firebase/firestore';
type paramsType = {
  image: string,
  createdAt: Date,
  updatedAt: Date,
}
export default async function addCarData(carData: paramsType) {
  try {
    await firestore().collection('cars').add(carData);
  } catch (error) {
    throw new Error('Failed to create the record')
  }
}