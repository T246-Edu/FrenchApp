import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Colors from "../config/Colors";
import CustomText from "./CustomText";
const YT = ({ Vid_Id }) => {
  const controlRef = useRef();
  return (
    <View style={styles.maincontain}>
      <YoutubePlayer
        height={189}
        ref={controlRef}
        videoId={Vid_Id}
        forceAndroidAutoplay={true}
      />
      <CustomText
        text={"some info about the video"}
        style="small bold"
        otherStyle={{ marginLeft: 5 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  maincontain: {
    margin: 10,
    marginTop: 50,
    borderColor: Colors.secondary,
    borderRadius: 7,
    borderWidth: 2,
  },
});
export default YT;
