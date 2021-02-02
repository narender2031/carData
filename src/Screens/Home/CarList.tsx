import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

type CarListProps = {
  item: {
    image: String,
    createdAt: Date,
    updatedAt: Date,
  };
};

const CarList: React.FunctionComponent<CarListProps> = ({item}) => {
  return (
    <Card style={styles.cardConatiner}>
      <Card.Cover source={{uri: item.image}} />
      <Card.Title subtitle={new Intl.DateTimeFormat('en-GB', { dateStyle: 'full', timeStyle: 'long' }).format(item.createdAt)} />
    </Card>
  );
};

const styles = StyleSheet.create({
  cardConatiner: {
    marginBottom: 15,
  },
});

export default CarList;
