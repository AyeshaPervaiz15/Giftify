
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, Image, SafeAreaView, Dimensions } from 'react-native';

const SavedScreen = () => {
 

  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;

  return (
   <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        padding: 10,
        alignItems: "center",
      }}
    >
      <Image source={require('../assets/G3.png')} 
      style={[styles.image, { width: windowWidth, height: windowHeight }]} 
      resizeMode="cover" />

      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff8c00',
    padding: 16,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5,
    marginBottom: 16,
    paddingHorizontal: 10,
  },
});

  
export default SavedScreen


