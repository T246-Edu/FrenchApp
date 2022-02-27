import { StyleSheet, Text, View } from "react-native";
import HomePageGrades from "../CommonGrades/Main";
import YT from "../components/YtVideo";

export default function Gt() {
  return (
    <View style={styles.container}>
      <HomePageGrades />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

//<YT Vid_Id={"84WIaK3bl_s"} />
