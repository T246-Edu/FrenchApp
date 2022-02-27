import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import AppBtn from "../components/AppButton";
import CustomText from "../components/CustomText";
import Colors from "../config/Colors";

export default function GradeHome() {
  const [grade, setGrade] = useState(10);
  const getData = async () => {
    try {
      const grade = await AsyncStorage.getItem("@grade");
      if (grade != null) {
        setGrade(grade);
      }
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    setTimeout(() => getData(), 1000);
  }, [grade]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: Colors.primary }}>
      <View style={styles.mainContainer}>
        <CustomText text={`Grade, ${grade}`} style="bold medium" />
        <AppBtn
          text={"Materials"}
          style={{ marginBottom: 10, marginTop: 10 }}
        />
        <AppBtn text={"explantion"} />
      </View>
      <View style={{ marginLeft: 10 }}>
        <CustomText
          text={"Developed By: \nTawfiq Bhyry\nYousef Fathy"}
          color={Colors.secondary}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
