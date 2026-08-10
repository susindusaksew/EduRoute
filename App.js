import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';

import { SettingsContext } from './context/SettingsContext';
import DetailScreen from './screens/DetailScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import SettingsScreen from './screens/SettingsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  const [isMiles, setIsMiles] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  const themeOptions = {
    headerStyle: {
      backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
    },
    headerTintColor: isDarkMode ? '#ffffff' : '#000000',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
    contentStyle: {
      backgroundColor: isDarkMode ? '#121212' : '#f5f5f5',
    },
  };

  return (
    <SettingsContext.Provider value={{ isMiles, setIsMiles, isDarkMode, setIsDarkMode }}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={themeOptions}>
          <Stack.Screen 
            name="Home" 
            component={HomeScreen} 
            options={{ title: 'EduRoute - Find Shuttles' }} 
          />
          <Stack.Screen 
            name="Detail" 
            component={DetailScreen} 
            options={{ title: 'Route Details' }} 
          />
          <Stack.Screen 
            name="Settings" 
            component={SettingsScreen} 
            options={{ title: 'App Settings' }} 
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{ title: 'Student Profile' }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SettingsContext.Provider>
  );
}