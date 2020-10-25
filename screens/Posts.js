import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Platform,
  Image,
  TextInput,
} from 'react-native';

import PostsItem from '../components/PostsItem';

import search from '../assets/search.png';

export default function Posts({route, navigation}) {
  
  const {name, posts} = route.params;
  const [costumPosts, setCostumPosts] = useState(posts);
  const [input, setInput] = useState('');
  const onInputChange = (txt) => {
    txt = txt.toLowerCase();
    console.log('********Started********');
    console.log(txt);
    var res = posts.filter((item) => {
      if (
        item.title.toLowerCase().includes(txt) ||
        item.body.toLowerCase().includes(txt)
      ) {
        console.log('title ' + item.title);
        console.log('body' + item.body);
        return true;
      }
      return false;
    });
    console.log('********END********');
    setCostumPosts(res);
    setInput(input);
  };
  
  const renderItem = ({item}) => (
    <PostsItem title={item.title} body={item.body} />
  );
  const data = input == '' ? posts : costumPosts;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>{name}'s Posts</Text>
      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={search} />
        <TextInput
          style={styles.search}
          placeholder="Search"
          onChangeText={onInputChange}
        />
      </View>
      <FlatList
        data={costumPosts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
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
  searchContainer: {
    backgroundColor: 'rgba(62,38,42,0.24)',
    margin: 16,
    flexDirection: 'row',
    height: 40,
    borderRadius: 4,
    alignItems: 'center',
  },
  search: {
    flex: 1,
    fontFamily: Platform.OS == 'ios' ? 'Arial' : 'Roboto',
    fontSize: 16,
    letterSpacing: 0.44,
    color: '#382A2C',
  },
  searchIcon: {
    width: 17.5,
    height: 17.5,
    margin: 16,
  },
});
