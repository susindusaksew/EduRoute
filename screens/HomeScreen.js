import { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';
import { ROUTE_DATA } from '../data/routesData';

export default function HomeScreen({ navigation }) {
  
  const { isDarkMode } = useContext(SettingsContext);
  
  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  const filteredRoutes = ROUTE_DATA.filter((item) =>
    item.routeName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.stops.some(stop => stop.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const renderRouteItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.card,
        { 
          backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
          borderColor: isDarkMode ? '#555555' : '#000000' 
        }
      ]}
      onPress={() => navigation.navigate('Detail', { routeDetail: item })}
    >
      <Text style={[styles.cardTitle, { color: isDarkMode ? '#64b5f6' : '#0d47a1' }]}>
        {item.routeName}
      </Text>
      <Text style={[styles.cardSub, { color: isDarkMode ? '#cccccc' : '#222222' }]}>
        Departure: {item.departureTime}
      </Text>
      <Text style={[styles.cardFee, { color: isDarkMode ? '#81c784' : '#1b5e20' }]}>
        Fee: {item.monthlyFee}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
      <TextInput
        style={[
          styles.searchInput,
          { 
            backgroundColor: isDarkMode ? '#1e1e1e' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            borderColor: isDarkMode ? '#444444' : '#dddddd'
          }
        ]}
        placeholder="Search route or stop name..."
        placeholderTextColor={isDarkMode ? '#aaaaaa' : '#888888'}
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />

      <FlatList
        data={filteredRoutes}
        keyExtractor={(item) => item.id}
        renderItem={renderRouteItem}
        ListEmptyComponent={
          <Text style={[styles.emptyText, { color: isDarkMode ? '#aaaaaa' : '#888888' }]}>
            No routes found.
          </Text>
        }
      />

      <View style={styles.buttonContainer}>
        {/* Profile Button */}
        <TouchableOpacity
          style={[styles.btn, styles.profileBtn]}
          onPress={() => navigation.navigate('Profile')}
        >
          <Text style={styles.btnText}>👤 Profile</Text>
        </TouchableOpacity>

        {/* Settings Button */}
        <TouchableOpacity
          style={[styles.btn, styles.settingsBtn]}
          onPress={() => navigation.navigate('Settings')}
        >
          <Text style={styles.btnText}>⚙️ Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 16 
  },
  searchInput: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 16,
  },
  card: {
    padding: 16,
    borderRadius: 8,
    marginBottom: 12,
    elevation: 2,
    borderWidth: 1,
  },
  cardTitle: { 
    fontSize: 16, 
    fontWeight: 'bold' 
  },
  cardSub: { 
    fontSize: 14, 
    fontWeight: '600', 
    marginTop: 4 
  },
  cardFee: { 
    fontSize: 14, 
    fontWeight: 'bold', 
    marginTop: 4 
  },
  emptyText: { 
    textAlign: 'center', 
    marginTop: 20 
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    gap: 10,
  },
  btn: {
    flex: 1,
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  profileBtn: { 
    backgroundColor: '#1a73e8' 
  },
  settingsBtn: { 
    backgroundColor: '#333333' 
  },
  btnText: { 
    color: '#ffffff', 
    fontWeight: 'bold', 
    fontSize: 15 
  },
});