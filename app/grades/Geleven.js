import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet } from "react-native";
import Vivresain from "../Grade11/duex";
import GradeHome from "../Grade11/Home";
import Units from "../Grade11/units";
import notebook from "../Grade11/notebook";
import Materials from "../Grade11/Materials";
import Lycée from "../Grade11/duex";
import SignOut from "../SignOut/signOut";

export default function Geleven() {
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
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="unit2"
          component={Lycée}
          options={{
            animationEnabled: false,
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="VideosUnits"
          component={notebook}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Materials"
          component={Materials}
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
