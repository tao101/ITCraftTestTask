import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import ArrowRight from '../assets/arrow.png';

export default function AuthorsItem(props) {
  const {nameAb, name, email, posts} = props;

  const onAuthor = () => {
    props.navigation.navigate('Posts', {
      name: name,
      posts: posts,
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={onAuthor}>
      <View style={styles.circle}>
        <Text style={styles.nameAb}>{nameAb}</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.email}>{email}</Text>
      </View>
      <Text style={styles.numPosts}>
        {posts.length} {posts.length == 1 ? 'post' : 'posts'}
      </Text>
      <Image style={styles.right} source={ArrowRight} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 80,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#6FCF97',
    borderRadius: 99,
  },
  nameAb: {
    textAlign: 'center',
    color: '#382A2C',
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    fontWeight: '500',
    fontSize: 14,
    lineHeight: 24,
    letterSpacing: 0.1,
  },
  infoContainer: {
    flex: 2,
    paddingLeft: 16,
  },
  name: {
    flex: 1,
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  email: {
    flex: 1,
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    fontSize: 12,
    lineHeight: 16,
    letterSpacing: 0.4,
    color: '#382A2C',
    opacity: 0.54,
  },
  numPosts: {
    flex: 1,
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  right: {
    width: 12,
    height: 12,
  },
});
