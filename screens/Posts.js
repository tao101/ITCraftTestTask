import * as React from 'react';
import {View, Text} from 'react-native';

export default function Posts({route, navigation}) {
  const {name, posts} = route.params;
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Posts Screen : {name}</Text>
    </View>
  );
}
