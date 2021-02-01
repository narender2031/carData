import * as React from 'react';
import {View, Text, SafeAreaView, StyleSheet, FlatList} from 'react-native';
import {FAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {navigationRoute} from '../../constants/navigatiomn';

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
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <FlatList
          data={carImages}
          renderItem={({item}) => {
            return <CarList item={item} />;
          }}
          keyExtractor={(item) => item.id}
        />
        <FAB
          style={styles.fab}
          label={'Add'}
          small
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
