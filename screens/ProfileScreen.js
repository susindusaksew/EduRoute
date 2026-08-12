import { useContext, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

export default function ProfileScreen() {
  const { isDarkMode, userProfile, updateUserProfile } = useContext(SettingsContext);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({ ...userProfile });

  const handleChange = (key, value) => {
    setFormData(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    updateUserProfile(formData);
    setIsEditing(false);
    Alert.alert('Success 🎉', 'Profile details updated successfully!');
  };

  // Dynamic Styles
  const textColor = { color: isDarkMode ? '#e0e0e0' : '#333' };
  const labelColor = { color: isDarkMode ? '#aaa' : '#666' };

  return (
    <ScrollView style={[styles.container, { backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }]}>
      {/* Header Section */}
      <View style={styles.header}>
        <View style={[styles.avatarCircle, { backgroundColor: (isEditing ? formData.gender : userProfile.gender) === 'Male' ? '#1a73e8' : '#e91e63' }]}>
          <Text style={styles.avatarIcon}>
            {(isEditing ? formData.gender : userProfile.gender) === 'Male' ? '👨‍🎓' : '👩‍🎓'}
          </Text>
        </View>

        {/* Name Input/Text */}
        {isEditing ? (
          <TextInput
            style={[
              styles.nameInput, 
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', 
                color: isDarkMode ? '#fff' : '#000',
                borderColor: isDarkMode ? '#64b5f6' : '#007AFF'
              }
            ]}
            value={formData.name}
            onChangeText={(text) => handleChange('name', text)}
            placeholder="Name"
            placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
          />
        ) : (
          <Text style={[styles.name, { color: isDarkMode ? '#fff' : '#333' }]}>{userProfile.name}</Text>
        )}

        {/* Student ID Input/Text */}
        {isEditing ? (
          <TextInput
            style={[
              styles.studentIdInput, 
              { 
                backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', 
                color: isDarkMode ? '#fff' : '#000',
                borderColor: isDarkMode ? '#64b5f6' : '#007AFF'
              }
            ]}
            value={formData.studentId}
            onChangeText={(text) => handleChange('studentId', text)}
            placeholder="Student ID"
            placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
          />
        ) : (
          <Text style={[styles.studentId, labelColor]}>{userProfile.studentId}</Text>
        )}
      </View>

      {/* Info Section */}
      <View style={[
        styles.infoSection, 
        { 
          backgroundColor: isDarkMode ? '#1e1e1e' : '#fff',
          borderColor: isDarkMode ? '#555' : '#000'
        }
      ]}>
        <Text style={[styles.sectionTitle, { color: isDarkMode ? '#64b5f6' : '#007AFF' }]}>
          Student Information
        </Text>
        
        {/* Gender */}
        <View style={[styles.infoRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
          <Text style={[styles.label, labelColor]}>Gender:</Text>
          {isEditing ? (
            <View style={styles.genderContainer}>
              <TouchableOpacity
                style={[
                  styles.genderBtn, 
                  formData.gender === 'Male' && styles.genderBtnActiveMale,
                  { borderColor: isDarkMode ? '#555' : '#ccc' }
                ]}
                onPress={() => handleChange('gender', 'Male')}
              >
                <Text style={[styles.genderBtnText, formData.gender === 'Male' && { color: '#fff' }]}>👦 Boy</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[
                  styles.genderBtn, 
                  formData.gender === 'Female' && styles.genderBtnActiveFemale,
                  { borderColor: isDarkMode ? '#555' : '#ccc' }
                ]}
                onPress={() => handleChange('gender', 'Female')}
              >
                <Text style={[styles.genderBtnText, formData.gender === 'Female' && { color: '#fff' }]}>👧 Girl</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <Text style={[styles.value, textColor]}>
              {userProfile.gender === 'Male' ? '👦 Male' : '👧 Female'}
            </Text>
          )}
        </View>

        {/* Email */}
        <View style={[styles.infoRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
          <Text style={[styles.label, labelColor]}>Email:</Text>
          {isEditing ? (
            <TextInput
              style={[
                styles.input, 
                { 
                  backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff', 
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#64b5f6' : '#007AFF' 
                }
              ]}
              value={formData.email}
              onChangeText={(text) => handleChange('email', text)}
              keyboardType="email-address"
            />
          ) : (
            <Text style={[styles.value, textColor]}>{userProfile.email}</Text>
          )}
        </View>

        {/* Route */}
        <View style={[styles.infoRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
          <Text style={[styles.label, labelColor]}>Route:</Text>
          {isEditing ? (
            <TextInput
              style={[
                styles.input, 
                { 
                  backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff', 
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#64b5f6' : '#007AFF' 
                }
              ]}
              value={formData.route}
              onChangeText={(text) => handleChange('route', text)}
            />
          ) : (
            <Text style={[styles.value, textColor]}>{userProfile.route}</Text>
          )}
        </View>

        {/* Pickup Stop */}
        <View style={[styles.infoRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
          <Text style={[styles.label, labelColor]}>Pickup Stop:</Text>
          {isEditing ? (
            <TextInput
              style={[
                styles.input, 
                { 
                  backgroundColor: isDarkMode ? '#2c2c2c' : '#ffffff', 
                  color: isDarkMode ? '#fff' : '#000',
                  borderColor: isDarkMode ? '#64b5f6' : '#007AFF' 
                }
              ]}
              value={formData.busStop}
              onChangeText={(text) => handleChange('busStop', text)}
            />
          ) : (
            <Text style={[styles.value, textColor]}>{userProfile.busStop}</Text>
          )}
        </View>
      </View>

      {/* Action Buttons */}
      {isEditing ? (
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.btnText}>💾 Save Changes</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity 
          style={styles.editButton} 
          onPress={() => { 
            setFormData({ ...userProfile }); 
            setIsEditing(true); 
          }}
        >
          <Text style={styles.btnText}>✏️ Edit Profile</Text>
        </TouchableOpacity>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  header: { alignItems: 'center', marginVertical: 20 },
  
  avatarCircle: {
    width: 90,
    height: 90,
    borderRadius: 45,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    elevation: 3,
  },
  avatarIcon: { fontSize: 45 },

  name: { fontSize: 22, fontWeight: 'bold' },
  studentId: { fontSize: 14, marginTop: 4 },
  infoSection: { 
    borderRadius: 12, 
    padding: 16, 
    marginBottom: 20,
    borderWidth: 1,     
  },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', marginBottom: 12 },
  infoRow: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center',
    paddingVertical: 10, 
    borderBottomWidth: 1, 
  },
  label: { fontSize: 14 },
  value: { fontSize: 14, fontWeight: '600' },
  
  input: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1.5,
    fontSize: 14,
    minWidth: 180,
    textAlign: 'right',
  },
  nameInput: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1.5,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    minWidth: 200,
    marginVertical: 4,
  },
  studentIdInput: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1.5,
    fontSize: 14,
    textAlign: 'center',
    minWidth: 150,
    marginVertical: 4,
  },

  genderContainer: { flexDirection: 'row', gap: 6 },
  genderBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 6,
    borderWidth: 1,
  },
  genderBtnActiveMale: { backgroundColor: '#1a73e8', borderColor: '#1a73e8' },
  genderBtnActiveFemale: { backgroundColor: '#e91e63', borderColor: '#e91e63' },
  genderBtnText: { fontSize: 12, fontWeight: 'bold' },

  editButton: { backgroundColor: '#007AFF', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 30 },
  saveButton: { backgroundColor: '#2e7d32', padding: 14, borderRadius: 10, alignItems: 'center', marginBottom: 30 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});