import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface LoadingScreenProps {
  navigation: any; 
}

export default function LoadingScreen({ navigation }: LoadingScreenProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Home');  
    }, 2500);  

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>FuelHUB</Text>
      <Text style={styles.slogan}>Travel smart</Text>
      <Text style={styles.version}>v2025.0.1</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff',
  },
  title: {
    fontSize: 32, fontWeight: 'bold', marginBottom: 10,
  },
  slogan: {
    fontSize: 16, fontStyle: 'italic', marginBottom: 20,
  },
  version: {
    fontSize: 14, color: '#999',
  },
});
