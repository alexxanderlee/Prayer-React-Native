import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { IComment } from '../../interfaces';
import { getRelativeTime } from '../../utils/time';

interface CommentItemProps {
  comment: IComment;
  username: string;
}

const CommentItem: React.FC<CommentItemProps> = ({ comment, username }) => {
  const relativeTime: string = getRelativeTime.to(comment.created);

  return (
    <View style={styles.comment}>
      <Image style={styles.avatar} source={require('../../assets/images/noavatar.png')} />
      <View style={styles.content}>
        <View style={styles.info}>
          <Text style={styles.username}>{username}</Text>
          <Text style={styles.time}>{relativeTime}</Text>
        </View>
        <Text style={styles.text}>{comment.body}</Text>
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
    fontSize: 16,
    fontWeight: '500',
    lineHeight: 18,
  },
  time: {
    color: '#9C9C9C',
    fontSize: 13,
    lineHeight: 16,
    fontWeight: '400',
  },
  text: {
    marginTop: 4,
    color: '#514D47',
    fontSize: 15,
    fontWeight: '400',
    lineHeight: 17,
  },
});

export default CommentItem;
