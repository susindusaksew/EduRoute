import { useContext, useState } from 'react';
import { Alert, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SettingsContext } from '../context/SettingsContext';

export default function ProfileScreen() {
  const { isDarkMode, userProfile, updateUserProfile } = useContext(SettingsContext);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({ 
    phone: '0771234567',
    ...userProfile 
  });

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
    <ScrollView 
      style={{ flex: 1, backgroundColor: isDarkMode ? '#121212' : '#f5f5f5' }}
      contentContainerStyle={styles.scrollContent}
    >
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

      {/* 💳 Digital Bus Pass Status Banner */}
      <View style={[styles.passCard, { backgroundColor: isDarkMode ? '#1b3a20' : '#e8f5e9', borderColor: isDarkMode ? '#2e7d32' : '#a5d6a7' }]}>
        <View style={styles.passHeader}>
          <Text style={[styles.passTitle, { color: isDarkMode ? '#81c784' : '#2e7d32' }]}>🚌 Digital Bus Pass</Text>
          <View style={styles.activeBadge}>
            <Text style={styles.activeBadgeText}>ACTIVE ✅</Text>
          </View>
        </View>
        <Text style={[styles.passSub, { color: isDarkMode ? '#c8e6c9' : '#1b5e20' }]}>
          Monthly Pass Fee: <Text style={{ fontWeight: 'bold' }}>PAID</Text> (Aug 2026)
        </Text>
      </View>

      {/* 📊 Quick Stats Row */}
      <View style={styles.statsContainer}>
        <View style={[styles.statBox, { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', borderColor: isDarkMode ? '#333' : '#e0e0e0' }]}>
          <Text style={styles.statIcon}>⚡</Text>
          <Text style={[styles.statValue, { color: isDarkMode ? '#fff' : '#000' }]}>95%</Text>
          <Text style={[styles.statLabel, labelColor]}>Attendance</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', borderColor: isDarkMode ? '#333' : '#e0e0e0' }]}>
          <Text style={styles.statIcon}>🚌</Text>
          <Text style={[styles.statValue, { color: isDarkMode ? '#fff' : '#000' }]}>42</Text>
          <Text style={[styles.statLabel, labelColor]}>Trips Taken</Text>
        </View>
        <View style={[styles.statBox, { backgroundColor: isDarkMode ? '#1e1e1e' : '#fff', borderColor: isDarkMode ? '#333' : '#e0e0e0' }]}>
          <Text style={styles.statIcon}>⭐</Text>
          <Text style={[styles.statValue, { color: isDarkMode ? '#fff' : '#000' }]}>Verified</Text>
          <Text style={[styles.statLabel, labelColor]}>Status</Text>
        </View>
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

        {/* 📞 Phone Number */}
        <View style={[styles.infoRow, { borderBottomColor: isDarkMode ? '#333' : '#eee' }]}>
          <Text style={[styles.label, labelColor]}>Phone:</Text>
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
              value={formData.phone}
              onChangeText={(text) => handleChange('phone', text)}
              keyboardType="phone-pad"
              placeholder="07XXXXXXXX"
              placeholderTextColor={isDarkMode ? '#888' : '#aaa'}
            />
          ) : (
            <Text style={[styles.value, textColor]}>{userProfile.phone || formData.phone}</Text>
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
            setFormData({ phone: '0771234567', ...userProfile }); 
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
  // ScrollView inner padding & extra bottom space to fix scroll issue
  scrollContent: {
    padding: 20,
    paddingBottom: 80,
  },
  header: { alignItems: 'center', marginTop: 10, marginBottom: 15 },
  
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

  /* Pass Card Styles */
  passCard: {
    padding: 14,
    borderRadius: 12,
    borderWidth: 1,
    marginBottom: 15,
  },
  passHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  passTitle: { fontSize: 15, fontWeight: 'bold' },
  activeBadge: {
    backgroundColor: '#2e7d32',
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
  },
  activeBadgeText: { color: '#fff', fontSize: 11, fontWeight: 'bold' },
  passSub: { fontSize: 13, marginTop: 6 },

  /* Quick Stats Styles */
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 20,
  },
  statBox: {
    flex: 1,
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },
  statIcon: { fontSize: 18, marginBottom: 4 },
  statValue: { fontSize: 15, fontWeight: 'bold' },
  statLabel: { fontSize: 11, marginTop: 2 },

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

  editButton: { backgroundColor: '#007AFF', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 10, marginBottom: 10 },
  saveButton: { backgroundColor: '#2e7d32', padding: 14, borderRadius: 10, alignItems: 'center', marginTop: 10, marginBottom: 10 },
  btnText: { color: '#fff', fontWeight: 'bold', fontSize: 16 }
});