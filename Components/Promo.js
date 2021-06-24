import React from "react";
import {
  View,
  StatusBar,
  ScrollView,
  Text,
  StyleSheet,
  Dimensions,
} from "react-native";
import NavBar from "./NavBar";
const Promo = ({ navigation }) => {
  return (
    <View>
      <StatusBar barStyle="auto"></StatusBar>
      <NavBar navigation={navigation}></NavBar>

      <ScrollView>
        <View style={[styles.promo, { backgroundColor: "#022431" }]}>
          <Text style={styles.title}>BEGINNER PLAN</Text>
          <Text style={styles.price}>$40</Text>
          <Text style={styles.description}>
            Unlimited access to the gym3 classes per weekOne Year
            membershipsFREE drinking package
          </Text>
          <Text style={{ color: "#fe6703", fontSize: 20 }}>
            1 Free personal training
          </Text>
        </View>
        <View style={[styles.promo, { backgroundColor: "#D3D3D3" }]}>
          <Text style={[styles.title, { color: "#000" }]}>Silver PLAN</Text>
          <Text style={[styles.price, { color: "#000" }]}>$40</Text>
          <Text style={[styles.description, { color: "#000" }]}>
            Unlimited access to the gym3 classes per weekOne Year
            membershipsFREE drinking package
          </Text>
          <Text style={{ color: "#fe6703", fontSize: 20 }}>
            1 Free personal training
          </Text>
        </View>
        <View
          style={[
            styles.promo,
            { backgroundColor: "#FFD700", marginBottom: 80 },
          ]}
        >
          <Text style={[styles.title, { color: "#000" }]}>Gold PLAN</Text>
          <Text style={[styles.price, { color: "#000" }]}>$40</Text>
          <Text style={[styles.description, { color: "#000" }]}>
            Unlimited access to the gym3 classes per weekOne Year
            membershipsFREE drinking package
          </Text>
          <Text style={{ color: "#fe6703", fontSize: 20 }}>
            1 Free personal training
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  promo: {
    height: Dimensions.get("screen").height * 0.6,
    width: Dimensions.get("screen").width * 0.8,
    backgroundColor: "#f32",
    borderRadius: 50,
    marginTop: 60,
    marginBottom: 0,
    marginLeft: Dimensions.get("screen").width * 0.1,
    display: "flex",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 30,
    marginVertical: 40,
  },
  price: { color: "#fff", fontSize: 28 },
  description: {
    color: "#fff",
    fontSize: 25,
    marginHorizontal: 60,
    marginVertical: 50,
  },
});
export default Promo;
