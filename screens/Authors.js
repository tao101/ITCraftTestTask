import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  TextInput,
  Image,
  Platform,
} from 'react-native';

import AuthorsItem from '../components/AuthorsItem';

import search from '../assets/search.png';

const API_USR_URL = 'https://jsonplaceholder.typicode.com/users';
const API_POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Authors(props) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Run! Like go get some data from an API.

    fetch(API_USR_URL)
      .then((data) => data.json())
      .then((res) => {
        fetch(API_POST_URL)
          .then((res) => res.json())
          .then((posts) => {
            const items = [];
            for (var i = 0; i < res.length; i++) {
              var item = {};
              item.id = res[i].id;
              item.name = res[i].name;
              item.email = res[i].email;
              var initials = res[i].name.match(/\b\w/g) || [];
              initials = (
                (initials.shift() || '') + (initials.pop() || '')
              ).toUpperCase();
              item.nameAb = initials;
              var p = posts.filter((post) => {
                if (post.userId == res[i].id) {
                  return true;
                }
                return false;
              });
              item.posts = p;

              items.push(item);
            }
            setAuthors(items);
            setLoading(false);
          })
          .catch((error) => {
            setError(error);
            setLoading(false);
          });
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  

  const renderItem = ({item}) => (
    <AuthorsItem
      nameAb={item.nameAb}
      name={item.name}
      email={item.email}
      posts={item.posts}
      navigation={props.navigation}
    />
  );

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loading}>Loading...</Text>
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text style={styles.loading}>There was an Error...</Text>
        <Text style={styles.loading}>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.pageTitle}>Authors</Text>
      <View style={styles.searchContainer}>
        <Image style={styles.searchIcon} source={search} />
        <TextInput style={styles.search} placeholder="Search" />
      </View>
      <FlatList
        data={authors}
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
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
