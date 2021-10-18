// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import AddTask from './components/AddTask/AddTask';
import Title from './components/Title/Title';

export default function App() {
  return (
    <View style={styles.container}>
      <Title />
      <AddTask />
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    color: "#000000"
  },
  
}
);
