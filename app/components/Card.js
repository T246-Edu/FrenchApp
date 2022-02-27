import { Image, StyleSheet, TouchableOpacity, Linking } from "react-native";
import Colors from "../config/Colors";
import CustomText from "./CustomText";

export default function Card({ uri, header, text, link }) {
  return (
    <TouchableOpacity style={styles.Card} onPress={Linking.openURL(link)}>
      <Image
        uri={uri}
        resizeMode="contain"
        resizeMethod="resize"
        width={"100%"}
        height={"70%"}
      />
      <CustomText
        text={header}
        style="bold medium"
        color={Colors.primary}
        otherStyle={{ marginLeft: 5, marginBottom: 5 }}
      />
      <CustomText text={text} color={"white"} otherStyle={{ marginLeft: 5 }} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  Card: {
    margin: 10,
    borderWidth: 2,
    borderColor: Colors.primary,
    borderRadius: 10,
  },
});
