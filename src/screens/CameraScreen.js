import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Camera } from 'expo-camera';
import { FontAwesome } from '@expo/vector-icons';

export default function CameraScreen({ navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [photo, setPhoto] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const photo = await cameraRef.takePictureAsync();
      setPhoto(photo.uri);
    }
  };

  return (
    <View style={styles.container}>
      {hasPermission === null ? (
        <Text>Requesting for camera permission</Text>
      ) : hasPermission === false ? (
        <Text>No access to camera</Text>
      ) : (
        <View style={styles.cameraContainer}>
          <Camera style={styles.camera} ref={(ref) => setCameraRef(ref)}>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.captureButton} onPress={takePicture}>
                <FontAwesome name="camera" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )}
      {photo && (
        <View style={styles.photoContainer}>
          <Image source={{ uri: photo }} style={styles.photo} />
          <Text style={styles.label}>Can: Lon Nước</Text>
          <TouchableOpacity style={styles.closeButton} onPress={() => navigation.goBack()}>
            <Text style={styles.closeButtonText}>Close</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  cameraContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  captureButton: {
    flex: 0,
    backgroundColor: 'red',
    borderRadius: 5,
    padding: 10,
    margin: 40,
  },
  photoContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  photo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  label: {
    color: 'white',
    fontSize: 18,
    margin: 10,
  },
  closeButton: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
  },
  closeButtonText: {
    color: 'white',
  },
});
