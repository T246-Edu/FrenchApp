import { Text, View } from "react-native";
import { useEffect, useState } from "react";
import Gten from "./Gten";
import Gtweleve from "./Gtwelve";
import Gteleven from "./Geleven";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function MainHome() {
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
    getData();
  }, []);

  if (grade == 10) {
    return <Gten />;
  } else if (grade == 11) {
    return <Gteleven />;
  } else if (grade == 12) {
    return <Gtweleve />;
  }
  return (
    <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
      <Text></Text>
    </View>
  );
}
