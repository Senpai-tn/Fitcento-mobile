import React from "react";
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  ScrollView,
  Image,
} from "react-native";

const Landing = () => {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../assets/images/banner-bg.png")}
        style={styles.image}
      >
        <ScrollView
          horizontal={true}
          style={{
            marginTop: Dimensions.get("screen").height * 0.4,
            width: "100%",
          }}
        >
          <View style={styles.carrouselItem}>
            <Text style={styles.title}>FIND EVERYTHING YOU NEED</Text>
            <Text style={styles.description}>TO CRUSH YOUR FITNESS GOALS</Text>
            <Image
              source={require("../assets/images/arrow.png")}
              style={{
                zIndex: 100,
                height: 60,
                width: 60,
                position: "absolute",
                bottom: 20,
                right: 5,
              }}
            />
          </View>
          <View style={styles.carrouselItem}>
            <Image
              source={require("../assets/images/arrow-left.png")}
              style={{
                zIndex: 100,
                height: 60,
                width: 60,
                position: "absolute",
                bottom: 20,
                left: 5,
              }}
            />
            <Text style={styles.title}>Don't stop till you drop!</Text>
            <Image
              source={require("../assets/images/arrow.png")}
              style={{
                zIndex: 100,
                height: 60,
                width: 60,
                position: "absolute",
                bottom: 20,
                right: 5,
              }}
            />
          </View>
          <View style={styles.carrouselItem}>
            <Image
              source={require("../assets/images/arrow-left.png")}
              style={{
                zIndex: 100,
                height: 60,
                width: 60,
                position: "absolute",
                bottom: 20,
                left: 10,
              }}
            />
            <Text style={styles.title}>Dare to be great</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  image: {
    width: "100%",
    height: Dimensions.get("screen").height,
    resizeMode: "center",
  },
  carrouselItem: {
    height: 150,
    width: Dimensions.get("screen").width * 0.8,
    marginLeft: Dimensions.get("screen").width * 0.1,
    marginRight: Dimensions.get("screen").width * 0.1,
    backgroundColor: "#6c757d",
    borderRadius: 20,
    padding: 30,
  },
  title: {
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  description: {
    color: "#03164c",
    fontSize: 17,
  },
});
export default Landing;
