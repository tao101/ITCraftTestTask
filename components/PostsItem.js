import React from 'react';

import {View, Text, StyleSheet, Platform, TouchableOpacity} from 'react-native';

export default function PostsItem(props) {
  const {title, body} = props;
  return (
    <TouchableOpacity style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  title: {
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    padding: 18,
    paddingBottom: 0,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  body: {
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    padding: 18,
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#382A2C',
    opacity: 0.54,
  },
});
