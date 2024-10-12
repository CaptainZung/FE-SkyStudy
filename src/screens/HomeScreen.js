import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function HomeScreen({ route, navigation }) {
  const { userName } = route.params; // Lấy tên người dùng từ params

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/anhnenmain.png')} style={styles.backgroundImage} />
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello {userName}</Text>
        <Text style={styles.points}>1234 points</Text>
      </View>
      <View style={styles.days}>
        {['Mon', 'Tus', 'Wed', 'Thurs', 'Fri'].map(day => (
          <View key={day} style={styles.day}>
            <Text style={styles.dayText}>{day}</Text>
          </View>
        ))}
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>English by topic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Playing Game</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Your Dictionary</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity 
        style={styles.touchableRoundButton} 
        onPress={() => navigation.navigate('Camera')} // Chuyển tới màn hình camera
      >
        <View style={styles.roundButton}>
          <Image
            source={require('../component/icons/scanner.png')}
            style={styles.icon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87CEFA',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  header: {
    alignItems: 'center',
    marginTop: 40,
  },
  greeting: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  points: {
    color: 'white',
    fontSize: 18,
  },
  days: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    paddingVertical: 10,
  },
  day: {
    width: 48,
    height: 48,
    backgroundColor: '#D1D5DB',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dayText: {
    fontWeight: 'bold',
  },
  buttons: {
    padding: 20,
    width: '100%',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 15,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  touchableRoundButton: {
    position: 'absolute',
    bottom: 30,
    alignSelf: 'center',
    alignItems: 'center',
  },
  roundButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
  },
});
  