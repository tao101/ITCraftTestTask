import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView, FlatList} from 'react-native';

import AuthorsItem from '../components/AuthorsItem';

const API_USR_URL = 'https://jsonplaceholder.typicode.com/users';
const API_POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Authors(props) {
  const [loading, setLoading] = useState(true);
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
      <SafeAreaView style={styles.container}>
        <Text>Loading...</Text>
      </SafeAreaView>
    );
  }
  if (error) {
    return (
      <SafeAreaView style={styles.container}>
        <Text>There was an Error...</Text>
        <Text>{error}</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
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
    
  },
});
