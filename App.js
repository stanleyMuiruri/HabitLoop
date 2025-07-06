import React, { useEffect } from 'react';
import "./global.css"
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppNavigator from './src/navigation/AppNavigator';
import { initDatabase } from './src/utils/initDatabase';

export default function App() {
    useEffect(() => {
    initDatabase();
  }, []);
  return (
    <SafeAreaProvider>
      <AppNavigator />
    </SafeAreaProvider>
  );
}


