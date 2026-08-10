import { useContext } from 'react';
import { StyleSheet, Switch, Text, View } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

export default function SettingsScreen() {
  const { isMiles, setIsMiles, isDarkMode, setIsDarkMode } = useContext(SettingsContext);

  return (
    <View style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#fff' }]}>
      <Text style={[styles.header, { color: isDarkMode ? '#fff' : '#000' }]}>
        Application Settings
      </Text>

      {/* 1. Distance Unit Setting */}
      <View style={[styles.settingRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
        <Text style={[styles.label, { color: isDarkMode ? '#ddd' : '#333' }]}>
          Use Miles instead of Kilometers
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#1a73e8' }}
          thumbColor={isMiles ? '#fff' : '#f4f3f4'}
          value={isMiles}
          onValueChange={(value) => setIsMiles(value)}
        />
      </View>

      {/* 2. Dark Theme Setting */}
      <View style={[styles.settingRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
        <Text style={[styles.label, { color: isDarkMode ? '#ddd' : '#333' }]}>
          Enable Dark Theme
        </Text>
        <Switch
          trackColor={{ false: '#767577', true: '#1a73e8' }}
          thumbColor={isDarkMode ? '#fff' : '#f4f3f4'}
          value={isDarkMode}
          onValueChange={(value) => setIsDarkMode(value)}
        />
      </View>

      {/* Status Info */}
      <Text style={[styles.statusText, { color: isDarkMode ? '#aaa' : '#666' }]}>
        Current Display Unit:{' '}
        <Text style={{ fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>
          {isMiles ? 'Miles (mi)' : 'Kilometers (km)'}
        </Text>
      </Text>

      <Text style={[styles.statusText, { color: isDarkMode ? '#aaa' : '#666', marginTop: 8 }]}>
        Active Theme:{' '}
        <Text style={{ fontWeight: 'bold', color: isDarkMode ? '#fff' : '#000' }}>
          {isDarkMode ? 'Dark Mode 🌙' : 'Light Mode ☀️'}
        </Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  header: { fontSize: 20, fontWeight: 'bold', marginBottom: 20 },
  settingRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  label: { fontSize: 15 },
  statusText: { marginTop: 16, fontSize: 14 },
});