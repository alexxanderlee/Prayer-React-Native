import React from 'react';
import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  StatusBar,
  FlatList,
  Image,
  TouchableOpacity,
  TextInput,
  Platform,
  ScrollView,
  RefreshControl,
} from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { AppNavParamsList } from '../../navigation/types';
import { Header, CommentItem } from '../../components';
import { PrayHandsSvg, PlusLgSvg, CommentIconSvg } from '../../components/svg';
import { ErrorMessage, MessageBox } from '../../components/UI';
import { IComment, IUser } from '../../interfaces';
import { useAppDispatch, useAppSelector } from '../../state/hooks';
import { commentsActions, commentsSelectors } from '../../state/features/comments';
import { userSelectors } from '../../state/features/user';

interface PrayerDetailsProps {
  navigation: NativeStackNavigationProp<AppNavParamsList, 'PrayerDetails'>;
  route: RouteProp<AppNavParamsList, 'PrayerDetails'>;
}

const members = [
  {
    id: 0,
    avatar: require('../../assets/images/avatar1.jpg'),
  },
  {
    id: 1,
    avatar: require('../../assets/images/avatar2.jpg'),
  },
  {
    id: 2,
    avatar: require('../../assets/images/avatar3.jpg'),
  },
];

const PrayerDetails: React.FunctionComponent<PrayerDetailsProps> = ({ navigation, route }) => {
  const { prayer } = route.params;
  const dispatch = useAppDispatch();

  const comments: IComment[] = useAppSelector(state => commentsSelectors.getCommentsByPrayerId(state, prayer.id));
  const isLoading: boolean = useAppSelector(commentsSelectors.isLoading);
  const error: string = useAppSelector(commentsSelectors.getError);
  const user: IUser = useAppSelector(userSelectors.getUserData);

  const [inputValue, setInputValue] = React.useState<string>('');
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    dispatch(commentsActions.getAllCommentsRequest());
  }, []);

  const onRefresh = React.useCallback(() => {
    dispatch(commentsActions.getAllCommentsRequest());
  }, []);

  function handleSubmit() {
    if (!inputValue.trim()) {
      return;
    }
    dispatch(commentsActions.createCommentRequest({
      body: inputValue,
      prayerId: prayer.id,
    }));
    setInputValue('');
    inputRef.current?.blur();
  }

  const HeaderComponent = (
    <>
      <View style={styles.lastPrayed}>
        <View style={styles.lastPrayedIndicator} />
        <Text style={styles.lastPrayedTitle}>Last prayed 8 min ago</Text>
      </View>
      <View style={styles.infoRow}>
        <View style={styles.infoCol}>
          <Text style={styles.infoDate}>July 25 2017</Text>
          <Text style={styles.infoText}>Date Added</Text>
          <Text style={styles.infoSecondText}>Opened for 4 days</Text>
        </View>
        <View style={styles.infoCol}>
          <Text style={styles.infoTitle}>123</Text>
          <Text style={styles.infoText}>Times Prayed Total</Text>
        </View>
      </View>
      <View style={styles.infoRow}>
        <View style={styles.infoCol}>
          <Text style={styles.infoTitle}>63</Text>
          <Text style={styles.infoText}>Times Prayed by Me</Text>
        </View>
        <View style={styles.infoCol}>
          <Text style={styles.infoTitle}>60</Text>
          <Text style={styles.infoText}>Times Prayed by Others</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Memebers</Text>
      <View style={styles.membersWrapper}>
        {members.map(member => (
          <Image key={member.id} style={styles.membersAvatar} source={member.avatar} />
        ))}
        <TouchableOpacity style={styles.addMemberBtn}>
          <PlusLgSvg color="#FFFFFF" size={16} />
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Comments</Text>
    </>
  );

  return (
    <>
      <SafeAreaView style={styles.statusBarBg} />
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <Header
          navigation={navigation}
          isBackBtnVisible={true}
          backgroundColor="#BFB393"
          borderShown={false}
          backBtnColor="#FFFFFF"
          rightBtnIcon={<PrayHandsSvg color="#FFFFFF" />}
        />
        <View style={styles.titleWrapper}>
          <Text style={styles.title}>{prayer.title}</Text>
        </View>

        {error
          ? <ScrollView
              style={styles.errMesWrapper}
              refreshControl={<RefreshControl refreshing={isLoading} onRefresh={onRefresh} />}
            >
              <ErrorMessage text={error} />
            </ScrollView>
          : <FlatList
              data={comments}
              renderItem={({ item }) => <CommentItem comment={item} username={user.name} /> }
              keyExtractor={item => `${item.id}`}
              refreshing={isLoading}
              onRefresh={onRefresh}
              ListHeaderComponent={HeaderComponent}
              ListEmptyComponent={<MessageBox text="There are no comments" />}
            />
        }

        <View style={styles.addComment}>
          <TouchableOpacity style={styles.addCommentBtn} onPress={handleSubmit}>
            <CommentIconSvg />
          </TouchableOpacity>
          <TextInput
            style={styles.addCommentInput}
            placeholder="Add a comment..."
            placeholderTextColor="#9C9C9C"
            multiline={true}
            value={inputValue}
            onChangeText={setInputValue}
            onSubmitEditing={handleSubmit}
            ref={inputRef}
          />
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  statusBarBg: {
    flex: 0,
    backgroundColor: '#BFB393',
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
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
  lastPrayedIndicator: {
    marginRight: 10,
    width: 3,
    height: 22,
    borderRadius: 10,
    backgroundColor: '#AC5253',
  },
  infoRow: {
    flexDirection: 'row',
  },
  intoBottomRow: {
    flexDirection: 'row',
  },
  infoCol: {
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
  infoSecondText: {
    marginTop: 0,
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '400',
  },
  sectionTitle: {
    paddingHorizontal: 15,
    paddingBottom: 15,
    paddingTop: 20,
    color: '#72A8BC',
    fontSize: 13,
    lineHeight: 15,
    fontWeight: '600',
    textTransform: 'uppercase',
  },
  membersWrapper: {
    paddingHorizontal: 15,
    flexDirection: 'row',
  },
  membersAvatar: {
    marginBottom: 10,
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
  },
  errMesWrapper: {
    padding: 15,
  },
  addComment: {
    paddingVertical: 5,
    borderTopColor: '#E5E5E5',
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  addCommentInput: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '400',
  },
  addCommentBtn: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PrayerDetails;
