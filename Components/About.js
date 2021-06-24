import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import NavBar from "./NavBar";
import Home from "./Home";
import MapView from "react-native-maps";

const About = ({ navigation }) => {
  return (
    <View>
      <NavBar navigation={navigation}></NavBar>
      <ScrollView>
        <View style={styles.titleSection}>
          <Text style={styles.title}>About Us</Text>
          <View
            style={{
              height: 1,
              width: "80%",
              backgroundColor: "blue",
              left: "10%",
            }}
          ></View>
          <Text style={styles.description}>
            It is a long established fact that a reader will be distracted by
            the readable
          </Text>
        </View>
        <View style={styles.aboutSection}>
          <Text
            style={{
              color: "#fff",
              fontSize: 25,
              fontWeight: "900",
              marginBottom: 0,
            }}
          >
            ABOUT OUR GYM
          </Text>
          <Text style={{ color: "#fff", fontSize: 15 }}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and webIt is a long established fact that a reader will be
            distracted by the readable content of a page when looking at its
            layout. The point of using Lorem Ipsum is that it has a more-or-less
            normal distribution of letters, as opposed to using 'Content here,
            content here', making it look like readable English. Many desktop
            publishing packages and web
          </Text>
        </View>
        <Image
          source={require("../assets/images/about-bg.png")}
          style={{
            height: 500,
            width: "100%",
            resizeMode: "center",
            position: "relative",
            top: -70,
          }}
        />
        <View
          style={{
            width: Dimensions.get("screen").width,
            height: 500,
            zIndex: 1000,
          }}
        >
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: 35.8581259,
              longitude: 10.5990591,
              latitudeDelta: 0.003,
              longitudeDelta: 0.003,
            }}
          >
            <MapView.Marker
              coordinate={{ latitude: 35.8581259, longitude: 10.5990591 }}
            />
          </MapView>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  titleSection: {
    width: "100%",
    height: 250,
    backgroundColor: "#fff",
    paddingHorizontal: 30,
    paddingVertical: 60,
  },
  title: {
    color: "#0b0e13",
    fontWeight: "900",
    fontSize: 30,
    textAlign: "center",
  },
  description: {
    marginTop: 40,
    color: "#040403",
    fontSize: 14,
  },
  aboutSection: {
    backgroundColor: "#000",
    //width:"100%",
    height: 400,
    padding: 30,
  },
  map: {
    width: Dimensions.get("window").width,
    height: 500,
  },
});
export default About;
