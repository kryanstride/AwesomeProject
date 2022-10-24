import { StatusBar } from 'expo-status-bar';
import {StyleSheet, Text, ScrollView, Image, TextInput, Pressable, View, Modal, Alert} from 'react-native';
import Cats from "./src/Cats/cats"
import {useState} from "react";

export default function App() {
    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Text>THIS IS MY CAT APP</Text>
        <Cats />
      <Image
          source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }}
          style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible);
            }}
        >
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <Text style={styles.modalText}>Learn to speak cat!</Text>
                    <Pressable
                        style={[styles.button, styles.buttonClose]}
                        onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.textStyle}>Hide Modal</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
        <Pressable
            style={[styles.button, styles.buttonOpen]}
            onPress={() => setModalVisible(true)}
        >
            <Text style={styles.textStyle}>Show Modal</Text>
        </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: "#F194FF",
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
