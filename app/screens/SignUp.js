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
  const [messege, setmessege] = useState("S'inscrire!");
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
          setmessege("Cette adresse email est invalide !");
        } else if (records.length !== 0) {
          setmessege("Cette adresse email est déjà utilisée!");
        } else if (password.length < 6) {
          setmessege("Ce mot de passe doit comporter au moins 6 caractères");
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
          setmessege("Succès");
        }
      });
  }
  return (
    <AppScreen
      style={{ alignItems: "center", justifyContent: "center", flex: 1 }}
    >
      <CustomText
        text="S'inscrire"
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
          email: yup
            .string("doit être une chaîne")
            .email("doit être un email valide")
            .required("Ce champ est requis"),
          password: yup
            .string("doit être une chaîne")
            .required("Ce champ est requis")
            .min(6, "le minimum est de 6 caractères")
            .max(16, "le maximum est de 16 caractères"),
          conirmPass: yup
            .string("doit être une chaîne")
            .required("Ce champ est requis")
            .oneOf(
              [yup.ref("password"), null],
              "les mots de passe doivent correspondre"
            ),
          grade: yup
            .number("doit être un nombre")
            .required("Ce champ est requis")
            .oneOf([10, 11, 12], "la note doit être 10, 11 ou 12"),
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
              text={"S'inscrire"}
              onPress={handleSubmit}
              style={{ marginTop: 10 }}
            />
            <AppBtn
              text={"Revenir à la connexion"}
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
