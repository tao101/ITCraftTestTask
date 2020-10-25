import * as React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Platform} from 'react-native';

import PostsItem from '../components/PostsItem';

export default function Posts({route, navigation}) {
  const {name, posts} = route.params;
  console.log(posts)
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>{name}'s Posts</Text>
      <PostsItem title={posts[2].title} body={posts[2].body} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
  },
  pageTitle: {
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    padding: 16,
  },
});
