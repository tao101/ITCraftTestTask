import * as React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import ArrowRight from '../assets/baseline_keyboard_arrow_right_black_36dp.png';

export default function Authors() {
  return (
    <View style={styles.container}>
      <View style={styles.circle}>
        <Text style={styles.nameAb}>JS</Text>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.name}>James Smith</Text>
        <Text style={styles.email}>johndoe@mail.com</Text>
      </View>
      <Text style={styles.numPosts}>5 posts</Text>
      <Image style={styles.right} source={ArrowRight} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 72,
    flexDirection: 'row',
    padding: 16,
    alignItems: 'center',
  },
  circle: {
    
    width:40,
    height:40,
    justifyContent:'center',
    backgroundColor:'#6FCF97',
    borderRadius:99,
    
    
  },
  nameAb: {
      textAlign:'center',
      color:'#382A2C',
      fontFamily:'Roboto'
  },
  infoContainer: {
    flex: 2,
    paddingLeft:16
  },
  name: {
    flex: 1,
  },
  email: {
    flex: 1,
  },
  numPosts: {
    flex: 1,
  },
  right: {
    width: 32,
    height: 32,
  },
});
