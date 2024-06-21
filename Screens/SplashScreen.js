import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('HomeScreen');
    }, 1500);
  }, []);
  return (
    <View style={styles.logoContainer}>
      <Image
        source={require('../assets/logo.png')}
        style={{marginTop: '50%'}}
      />
      <Text style={{fontSize: 24, color: '#000', fontWeight: '700'}}>
        Notes App
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  logoContainer: {
    alignItems: 'center',
  },
});
