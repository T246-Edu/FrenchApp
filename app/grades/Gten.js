import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Vivresain from "../Grade12/cinq";
import GradeHome from "../Grade12/Home";
import Units from "../Grade12/units";
import notebook from "../Grade12/notebook";
import six from "../Grade12/six";

export default function Gten() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Units"
          component={Units}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit1"
          component={Vivresain}
          options={{
            animationEnabled: false,
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit2"
          component={six}
          options={{
            animationEnabled: false,
          }}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="VideosUnits"
          component={notebook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit1V"
          component={GradeHome}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="unit2V"
          component={GradeHome}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.primary,
  },
});

//<YT Vid_Id={"84WIaK3bl_s"} />
//https://drive.google.com/file/d/1cbAIAWmaFfUJgxPzSjy8bbr_fg-CoWxT/view?usp=sharing
