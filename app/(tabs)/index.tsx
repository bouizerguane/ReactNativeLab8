import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';

import AppFooter from '../../components/AppFooter';
import AppHeader from '../../components/AppHeader';
import WelcomeScreen from '../../components/WelcomeScreen';

export default function HomeScreen() {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle="dark-content" />
      <AppHeader />
      
      <View style={styles.contentContainer}>
        <WelcomeScreen /> 
      </View>

      <AppFooter />
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#EDEFEE',
  },
  contentContainer: {
    flex: 1, 
  },
});