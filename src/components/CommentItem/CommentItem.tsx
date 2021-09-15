import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IComment } from '../../interfaces';

dayjs.extend(relativeTime);

interface CommentItemProps {
  comment: IComment;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment }) => {
  const time = dayjs().to(dayjs(comment.created));
  const avatar = comment.avatar ?? require('../../assets/images/noavatar.png');

  return (
    <View style={styles.comment}>
      <Image style={styles.avatar} source={avatar} />
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.username}>{comment.author}</Text>
          <Text style={styles.time}>{time}</Text>
        </View>
        <Text style={styles.text}>{comment.text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#E5E5E5',
    flexDirection: 'row',
  },
  avatar: {
    marginRight: 12,
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  content: {
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'flex-end',
  },
  username: {
    marginRight: 6,
    color: '#514D47',
    fontSize: 17,
    fontWeight: '500',
    lineHeight: 20,
  },
  time: {
    color: '#9C9C9C',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
  },
  text: {
    marginTop: 2,
    color: '#514D47',
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
});

export default CommentItem;
