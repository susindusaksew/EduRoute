import { createContext, useState } from 'react';

export const SettingsContext = createContext();

export const SettingsProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMiles, setIsMiles] = useState(false);

  // Student Profile State (Updated with Default Student Details)
  const [userProfile, setUserProfile] = useState({
    name: "Susindu Saksew",
    studentId: "80001370",
    email: "susindu@student.edu",
    route: "Route 01 - Kandy to Campus",
    busStop: "Peradeniya Junction",
    gender: "Male"
  });

  const updateUserProfile = (updatedData) => {
    setUserProfile(updatedData);
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