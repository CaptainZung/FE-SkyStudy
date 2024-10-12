import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Image, Alert } from 'react-native';

export default function NameInput({ navigation }) {
  const [name, setName] = useState('');

  const handleLogin = () => {
    if (name.trim()) {
      navigation.navigate('Home', { userName: name });
    } else {
      Alert.alert("Thông báo", "Vui lòng nhập tên của bạn!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/anhnenmain.png')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <TextInput
          style={styles.input}
          placeholder="Nhập tên của bạn"
          onChangeText={setName}
          value={name}
        />
        <Button title="Đăng Nhập" onPress={handleLogin} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    padding: 20,
    borderRadius: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: '80%',
  },
});
