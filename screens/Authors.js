import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import AuthorsItem from '../components/AuthorsItem';

const API_USR_URL = 'https://jsonplaceholder.typicode.com/users';
const API_POST_URL = 'https://jsonplaceholder.typicode.com/posts';

export default function Authors() {
  const [loading, setLoading] = useState(true);
  const [authors, setAuthors] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    // Run! Like go get some data from an API.
    fetch(API_USR_URL)
      .then((data) => data.json())
      .then((res) => {
       
        fetch(API_POST_URL).then((res)=>res.json()).then(posts=>{
            for (var i = 0; i < res.length; i++) {
          
                var item = {};
                item.id = res[i].id;
                item.name = res[i].name;
                item.email = res[i].email;
                var initials = res[i].name.match(/\b\w/g) || [];
                initials = ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
                item.nameAb=initials;
      
                console.log(item);
              }
        })

        
      });
  }, []);

  return (
    <View style={styles.container}>
      <AuthorsItem
        nameAb="JS"
        name="James Smith"
        email="johndoe@gmail.com"
        numPosts={5}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 70,
  },
});
