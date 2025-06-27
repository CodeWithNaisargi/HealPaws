import { View, Text, Button, Image } from 'react-native';
import React from 'react';
import { useUser, useAuth } from '@clerk/clerk-expo';
import { useRouter } from 'expo-router';

export default function Profile() {
  const { user } = useUser();
  const { signOut } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    await signOut();
    router.replace('/home');
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f7fafc', alignItems: 'center', padding: 32 }}>
      <Image
        source={require('../assets/images/HealPawLogo.png')}
        style={{ width: 100, height: 100, borderRadius: 50, marginBottom: 16, backgroundColor: '#eee' }}
      />
      <Text style={{ fontSize: 26, fontWeight: 'bold', color: '#dd7973', marginBottom: 4 }}>Your Profile</Text>
      {user ? (
        <>
          <Text style={{ fontSize: 18, color: '#555', marginBottom: 8 }}>{user.firstName || user.username || user.id}</Text>
          <Text style={{ fontSize: 16, color: '#888', marginBottom: 16 }}>{user.primaryEmailAddress?.emailAddress}</Text>
          <View style={{ flexDirection: 'row', marginBottom: 24 }}>
            <View style={{ alignItems: 'center', marginRight: 32 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#b6c5ca' }}>0</Text>
              <Text style={{ color: '#888' }}>Adopted</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#b6c5ca' }}>0</Text>
              <Text style={{ color: '#888' }}>Favorites</Text>
            </View>
          </View>
        </>
      ) : (
        <Text style={{ fontSize: 18, color: '#888', marginBottom: 24 }}>No user info available.</Text>
      )}
      <Button title="Sign Out" onPress={handleSignOut} color="#dd7973" />
    </View>
  );
} 