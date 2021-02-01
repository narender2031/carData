import * as React from 'react';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {TextInput, Card, Button} from 'react-native-paper';

type AddCarPropsType = {};

const AddCar: React.FunctionComponent<AddCarPropsType> = () => {
  const [title, setTitle] = React.useState<string>('');
  console.log(title, 'hjk');
  return (
    <SafeAreaView>
      <View style={styles.conatiner}>
        <Card>
          <Card.Content>
            <View style={styles.filed}>
              <TextInput
                label="Title"
                value={title}
                mode="outlined"
                onChangeText={(text) => setTitle(text)}
              />
            </View>
            <View style={styles.filed}>
              <Button onPress={() => console.log('Pressed')}>Add Car</Button>
            </View>
          </Card.Content>
        </Card>
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
