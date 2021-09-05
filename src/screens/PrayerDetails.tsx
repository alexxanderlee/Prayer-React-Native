/* eslint-disable */
import React from 'react';
import { Text, View, StyleSheet, StatusBar, FlatList, Image, TouchableOpacity } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavParamsList } from '../navigation/types';
import { Header } from '../components';
import { PrayHandsSvg, PlusSvg, PlusLgSvg } from '../components/svg';

interface PrayerDetailsProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayerDetails'>;
  route: RouteProp<AppNavParamsList, 'PrayerDetails'>;
}

const members = [
  {
    id: '0',
    avatar: require('../assets/images/avatar1.jpg'),
  },
  {
    id: '1',
    avatar: require('../assets/images/avatar2.jpg'),
  },
  {
    id: '2',
    avatar: require('../assets/images/avatar3.jpg'),
  },
];

const PrayerDetails: React.FunctionComponent<PrayerDetailsProps> = ({ navigation, route }) => {
  const { prayer } = route.params;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Header
        navigation={navigation}
        isBackBtnVisible={true}
        backgroundColor="#BFB393"
        borderShown={false}
        backBtnColor="#FFFFFF"
        rightBtnIcon={<PrayHandsSvg color="#FFFFFF" />}
      />
      <View style={styles.container}>
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{prayer.title}</Text>
        </View>

        <View style={styles.lastPrayed}>
          <View style={styles.indicator}></View>
          <Text style={styles.lastPrayedTitle}>
            Last prayed 8 min ago
          </Text>
        </View>

        <View style={styles.infoRow}>
          <View style={{ ...styles.infoItem, paddingBottom: 0 }}>
            <Text style={{ ...styles.infoDate } }>
              July 25 2017
            </Text>
            <Text style={styles.infoText}>
              Date Added
            </Text>
            <Text style={{ ... styles.infoText, color: '#72A8BC', marginTop: 0 }}>
              Opened for 4 days
            </Text>
          </View>
          <View style={{ ...styles.infoItem, borderRightWidth: 0 }}>
            <Text style={styles.infoTitle}>
              123
            </Text>
            <Text style={styles.infoText}>
              Times Prayed Total
            </Text>
          </View>
        </View>
        <View style={styles.infoRow}>
          <View style={styles.infoItem}>
            <Text style={styles.infoTitle}>
              63
            </Text>
            <Text style={styles.infoText}>
              Times Prayed by Me
            </Text>
          </View>
          <View style={{ ...styles.infoItem, borderRightWidth: 0 }}>
            <Text style={styles.infoTitle}>
              60
            </Text>
            <Text style={styles.infoText}>
              Times Prayed by Others
            </Text>
          </View>
        </View>

        <View style={styles.membersList}>
          <Text style={styles.sectionTitle}>Members</Text>
          <FlatList
            data={members}
            horizontal={true}
            renderItem={({ item }) => (
              <Image style={styles.membersAvatar} source={item.avatar} />
            )}
            keyExtractor={item => item.id}
            ListFooterComponent={(
              <TouchableOpacity style={styles.addMemberBtn}>
                <PlusLgSvg color="#FFFFFF" size={16} />
              </TouchableOpacity>
            )}
          />
        </View>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  titleWrapper: {
    paddingBottom: 23,
    paddingHorizontal: 15,
    backgroundColor: '#BFB393',
  },
  title: {
    fontSize: 17,
    fontWeight: '400',
    lineHeight: 27,
    color: '#FFFFFF',
  },
  lastPrayed: {
    padding: 13,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
  },
  lastPrayedTitle: {
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
    color: '#514D47',
  },
  indicator: {
    marginRight: 10,
    width: 3,
    height: 22,
    borderRadius: 10,
    backgroundColor: '#AC5253',
  },
  infoRow: {
    flexDirection: 'row',
  },
  infoItem: {
    flex: 1,
    paddingVertical: 26,
    paddingHorizontal: 15,
    borderBottomColor: '#E5E5E5',
    borderBottomWidth: 1,
    borderRightColor: '#E5E5E5',
    borderRightWidth: 1,
  },
  infoDate: {
    color: '#BFB393',
    fontSize: 22,
    lineHeight: 26,
    fontWeight: '400',
  },
  infoTitle: {
    color: '#BFB393',
    fontSize: 32,
    lineHeight: 37,
    fontWeight: '300',
  },
  infoText: {
    marginTop: 6,
    color: '#514D47',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '400',
  },
  sectionTitle: {
    paddingBottom: 15,
    paddingTop: 20,
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  membersList: {
    paddingHorizontal: 15,
    paddingBottom: 10,
  },
  membersAvatar: {
    marginRight: 7,
    width: 32,
    height: 32,
    borderRadius: 20,
  },
  addMemberBtn: {
    backgroundColor: '#BFB393',
    width: 32,
    height: 32,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default PrayerDetails;
