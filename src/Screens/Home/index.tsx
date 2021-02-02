import * as React from 'react';
import {View, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {FAB, Colors} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {navigationRoute} from '../../constants/navigatiomn';
import firestore from '@react-native-firebase/firestore';
import CarList from './CarList';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

export default function Home() {
  const [carImages, setCarImages] = React.useState(DATA);
  const navigation = useNavigation();

  React.useEffect(() => {
    const subscriber = firestore().collection('cars').onSnapshot(documentSnapshot => {
      const list: any[] = [];

      documentSnapshot.forEach(data => {
        let finalResult = data.data();
        let formattedData = {
          image: finalResult.image,
          createdAt: finalResult.createdAt.toDate(),
          updatedAt: finalResult.updatedAt.toDate(),
        }
        list.push(formattedData)
      });

      setCarImages(list)
    })
    return () => subscriber();
  }, [])
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <FlatList
          data={carImages}
          renderItem={({item}) => {
            return <CarList item={item} />;
          }}
          keyExtractor={(_item, index) => `${index}`}
        />
        <FAB
          style={styles.fab}
          label={'Add'}
          icon="plus"
          small
          color={Colors.purple500}
          onPress={() => navigation.navigate(navigationRoute.ADD_CAR)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  conatiner: {
    padding: 15,
    height: '100%',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
  },
});
