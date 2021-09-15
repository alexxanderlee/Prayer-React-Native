import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { PrayerItem } from '../../components';
import { Button } from '../../components/UI';
import { AppNavParamsList } from '../../navigation/types';
import { IPrayer } from '../../interfaces';

const prayers: IPrayer[] = [
  {
    id: 0,
    columnId: 1,
    title: 'Subscribed Prayer item one',
    description: '',
    checked: false,
  },
  {
    id: 1,
    columnId: 1,
    title: 'Subscribed Prayer item two',
    description: '',
    checked: false,
  },
  {
    id: 2,
    columnId: 0,
    title: 'Subscribed Prayer item three',
    description: '',
    checked: false,
  },
  {
    id: 3,
    columnId: 0,
    title: 'Subscribed Prayer item four',
    description: '',
    checked: false,
  },
];

interface SubPrayersListProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayersList'>;
}

const SubPrayersList: React.FC<SubPrayersListProps> = ({ navigation }) => {
  return (
    <FlatList
      data={prayers}
      renderItem={({ item }) => <PrayerItem navigation={navigation} prayer={item} />}
      keyExtractor={item => item.id.toString()}
      contentContainerStyle={styles.content}
      style={styles.flatlist}
      ListFooterComponent={(
        <View style={styles.buttonWrapper}>
          <Button
            text="Show answered prayers"
            customStyle={styles.button}
            customTextStyle={styles.buttonText}
          />
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  flatlist: {
    backgroundColor: '#FFFFFF',
  },
  content: {
    padding: 15,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    marginTop: 20,
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: '#BFB393',
    borderRadius: 15,
    shadowColor: '#424e75',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 15,
  },
  buttonText: {
    color: '#FFFFFF',
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 14,
  },
});

export default SubPrayersList;
