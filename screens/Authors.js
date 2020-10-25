import * as React from 'react';
import {View, Text,StyleSheet} from 'react-native';

import AuthorsItem from '../components/AuthorsItem';


export default function Authors() {
  return (
    <View style={styles.container}>
      <AuthorsItem/>
    </View>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      
      paddingTop:70,
      
    },
    
  });