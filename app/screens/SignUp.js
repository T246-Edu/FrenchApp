import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Airtable from "airtable";
import { Formik } from "formik";
import * as yup from "yup";

import AppBtn from "../components/AppButton";
import CustomText from "../components/CustomText";
import AppScreen from "../components/AppScreen";
import TextField from "../components/TextField";
import Colors from "../config/Colors";

function Register() {
  const navigation = useNavigation();
  const [messege, setmessege] = useState("Register!");
  async function register(mail, password, grade) {
    const base = new Airtable({ apiKey: "keygrEQRcmrlb0BxL" }).base(
      "appHtBfPVkbl5eWGK"
    );
    base("users")
      .select({
        view: "Grid view",
        filterByFormula: `AND(OR(SEARCH('${mail}',{Email})))`,
      })
      .eachPage(async (records, fetch) => {
        if (mail.includes("@") == false || mail.includes(".") == false) {
          setmessege("That email address is invalid!");
        } else if (records.length !== 0) {
          setmessege("That email address is already in use!");
        } else if (password.length < 6) {
          setmessege("That password must be at least 6 chars");
        } else {
          base("users").create(
            [
              {
                fields: {
                  Email: mail,
                  Password: password,
                  Grade: grade,
                },
              },
            ],
            function (err, records) {
              if (err) {
                setmessege(`${err}`);
              }
            }
          );
          await AsyncStorage.setItem("@grade", grade);
          await AsyncStorage.setItem("@user", "userData");
          setmessege("Success");
        }
      });
  }
  return (
    <AppScreen
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <CustomText
        text="Sign Up"
        style="bold head"
        otherStyle={{ marginTop: 100 }}
      />
      <View style={styles.hairline} />
      <Formik
        initialValues={{
          email: "",
          password: "",
          conirmPass: "",
          grade: 10,
        }}
        validationSchema={yup.object().shape({
          email: yup.string().email().required(),
          password: yup.string().required().min(6).max(16),
          conirmPass: yup
            .string()
            .required()
            .oneOf([yup.ref("password"), null], "passwords must match"),
          grade: yup
            .number()
            .required()
            .oneOf([10, 11, 12], "grade must be 10, 11, or 12"),
        })}
        onSubmit={(values) =>
          register(values.email, values.password, values.grade)
        }
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <View
            style={{
              width: "100%",
              alignItems: "center",
            }}
          >
            <TextField
              data="mail"
              onChangeText={handleChange("email")}
              onBlur={handleBlur("email")}
              value={values.email}
            />
            {errors.email && touched.email && (
              <CustomText text={errors.email} otherStyle={styles.error} />
            )}
            <TextField
              data="grade"
              onChangeText={handleChange("grade")}
              onBlur={handleBlur("grade")}
              value={values.grade}
            />
            {errors.grade && touched.grade && (
              <CustomText text={errors.grade} otherStyle={styles.error} />
            )}
            <TextField
              data="password"
              onChangeText={handleChange("password")}
              onBlur={handleBlur("password")}
              value={values.password}
            />
            {errors.password && touched.password && (
              <CustomText text={errors.password} otherStyle={styles.error} />
            )}
            <TextField
              data="password"
              onChangeText={handleChange("conirmPass")}
              onBlur={handleBlur("conirmPass")}
              value={values.conirmPass}
            />
            {errors.conirmPass && touched.conirmPass && (
              <CustomText text={errors.conirmPass} otherStyle={styles.error} />
            )}
            <AppBtn
              text={"Register"}
              onPress={handleSubmit}
              style={{ marginTop: 10 }}
            />
            <AppBtn
              text={"Return Login"}
              style={{
                backgroundColor: Colors.primary,
                width: "50%",
                marginTop: 60,
              }}
              onPress={() => navigation.navigate("Sign In")}
            />
            <CustomText
              text={messege}
              otherStyle={{ marginTop: 10 }}
              style="medium"
            />
          </View>
        )}
      </Formik>
    </AppScreen>
  );
}
const styles = StyleSheet.create({
  hairline: {
    backgroundColor: Colors.secondary,
    marginTop: 10,
    height: 2,
    width: "50%",
    marginBottom: 70,
  },
  error: {
    color: Colors.grey,
    fontSize: 14,
  },
});

export default Register;
