import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card} from 'react-native-paper';

type CarListProps = {
  item: {
    title: String;
    id: String;
  };
};

const CarList: React.FunctionComponent<CarListProps> = ({item}) => {
  return (
    <Card style={styles.cardConatiner}>
      <Card.Cover source={{uri: 'https://picsum.photos/700'}} />
      <Card.Title title={item.title} subtitle="Card Subtitle" />
    </Card>
  );
};

const styles = StyleSheet.create({
  cardConatiner: {
    marginBottom: 15,
  },
});

export default CarList;
