/* eslint-disable */
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IList } from '../interfaces';

interface CardProps {
  list: IList;
}

const Card: React.FC<CardProps> = ({ list }) => {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.title}>{list.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    marginBottom: 10,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#E5E5E5',
    borderRadius: 4,
  },
  title: {
    color: '#514D47',
    fontSize: 17,
    lineHeight: 20,
    fontWeight: '600',
  },
});

export default Card;
