import { SafeAreaView, View } from "react-native";
import AppBtn from "../components/AppButton";
import CustomText from "../components/CustomText";

export default function GradeHome() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
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
