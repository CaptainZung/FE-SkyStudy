import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function LoginScreen({ navigation }) {
  const handleLogin = () => {
    navigation.navigate('NameInput'); // Chuyển tới màn hình nhập tên
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/anhnen.jpg')} style={styles.backgroundImage} />
      <View style={styles.overlay}>
        <Text style={styles.title}>SkyStudy</Text>
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>
        <Text style={styles.link}>Đăng nhập với tư cách là khách</Text>
        <Text style={styles.linkRed}>Tạo Tài Khoản Mới</Text>
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
  },
  title: {
    fontSize: 36,
    fontWeight: '700',
    color: 'white',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: '700',
  },
  link: {
    color: '#1E90FF',
    fontSize: 14,
    marginBottom: 20,
  },
  linkRed: {
    color: '#FF0000',
    fontSize: 14,
  },
});
