import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import GradeHome from "../Grade10/Home";
import Units from "../Grade10/units";
import Lycée from "../Grade10/duex";
import Vivresain from "../Grade10/une";
import Reader from "../Grade10/notebook";
import SignOut from "../SignOut/signOut";

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
          component={Lycée}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="unit2"
          component={Vivresain}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideosUnits"
          component={Reader}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LogOut"
          component={SignOut}
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
