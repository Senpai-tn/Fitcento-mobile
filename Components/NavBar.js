import React, { useState } from "react";
import { Divider } from "react-native-paper";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Dimensions,
  Modal,
  Pressable,
} from "react-native";

const NavBar = ({ navigation }) => {
  const [state, setstate] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate("Home");
        }}
        style={{
          //backgroundColor: "red",
          height: 50,
          width: Dimensions.get("screen").width * 0.8,
          left: 0,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/logo.png")}
          style={styles.logo}
        />
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          //navigation.navigate("About");
          setstate(true);
        }}
        style={{
          backgroundColor: "red",
          height: 50,
          width: Dimensions.get("screen").width * 0.2,
          right: 0,
          position: "absolute",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          source={require("../assets/images/toggle.png")}
          style={styles.toggle}
        />
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={state}
        onRequestClose={() => {
          setstate(!state);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Hello </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setstate(!state);
                navigation.navigate("About");
              }}
            >
              <Text style={styles.textStyle}>About</Text>
            </Pressable>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 10,
              }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {
                setstate(!state);
                navigation.navigate("Promo");
              }}
            >
              <Text style={styles.textStyle}>Promo</Text>
            </Pressable>
            <View
              style={{
                borderBottomColor: "black",
                borderBottomWidth: 10,
              }}
            />
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setstate(!state)}
            >
              <Text style={styles.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "100%",
    backgroundColor: "#03164c",
  },
  logo: {
    height: 50,
    width: 200,
    position: "absolute",
    top: 0,
    left: 30,
    resizeMode: "contain",
  },
  toggle: {
    height: 100,
    width: 100,
    resizeMode: "center",
    display: "flex",
  },
  modalView: {
    margin: 20,
    backgroundColor: "#fff6",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
});

export default NavBar;
