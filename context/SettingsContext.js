import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useEffect, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMiles, setIsMiles] = useState(false);

  // Student Profile State (Default Values)
  const [userProfile, setUserProfile] = useState({
    name: "Susindu Saksew",
    studentId: "80001370",
    phone: "0771234567",
    email: "susindu@student.edu",
    route: "Route 01 - Kandy to Campus",
    busStop: "Peradeniya Junction",
    gender: "Male"
  });

  
  useEffect(() => {
    loadSavedProfile();
  }, []);

  const loadSavedProfile = async () => {
    try {
      const savedData = await AsyncStorage.getItem('@user_profile');
      if (savedData !== null) {
        setUserProfile(JSON.parse(savedData));
      }
    } catch (error) {
      console.error('Failed to load profile from AsyncStorage:', error);
    }
  };

  
  const updateUserProfile = async (updatedData) => {
    try {
      setUserProfile(updatedData);
      await AsyncStorage.setItem('@user_profile', JSON.stringify(updatedData));
    } catch (error) {
      console.error('Failed to save profile to AsyncStorage:', error);
    }
  };

  return (
    <SettingsContext.Provider value={{ 
      isDarkMode, 
      setIsDarkMode, 
      isMiles, 
      setIsMiles, 
      userProfile, 
      updateUserProfile 
    }}>
      {children}
    </SettingsContext.Provider>
  );
};