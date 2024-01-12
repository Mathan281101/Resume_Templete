import * as React from "react";
import { StyleSheet, View, Text, Linking } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { FontFamily, Color, FontSize, Border } from "../GlobalStyles";

const Register = () => {
  return (
    <View style={styles.register}>
      <View style={[styles.rectangleParent, styles.groupChildLayout1]}>
        <LinearGradient
          style={[styles.groupChild, styles.groupChildLayout1]}
          locations={[0, 1]}
          colors={["#08b3f1", "#066c92"]}
        />
        <Text style={[styles.signUp, styles.signUpTypo]}>Sign Up</Text>
      </View>
      <View style={styles.orParent}>
        <Text style={[styles.or, styles.textTypo]}>OR</Text>
        <View style={[styles.groupItem, styles.groupLayout]} />
        <View style={[styles.groupInner, styles.groupLayout]} />
      </View>
      <View style={styles.alreadyHaveAnAccountParent}>
        <Text
          style={[styles.alreadyHaveAn, styles.logInTypo]}
        >{`Already have an Account? `}</Text>
        <Text style={[styles.logIn, styles.logInTypo]}>Log In</Text>
      </View>
      <View style={[styles.registerChild, styles.registerChildBorder]} />
      <Text style={[styles.phone, styles.phoneLayout]}>
        <Text style={styles.phone1}>Phone</Text>
        <Text style={styles.text}>*</Text>
      </Text>
      <Text style={[styles.text1, styles.passwordTypo]}>+</Text>
      <View style={[styles.registerItem, styles.registerLayout]} />
      <View style={[styles.registerInner, styles.registerLayout]} />
      <Text style={[styles.password, styles.passwordTypo]}>
        <Text style={styles.phone1}>Password</Text>
        <Text style={styles.text}>*</Text>
      </Text>
      <Text style={[styles.confirmPassword, styles.passwordTypo]}>
        <Text style={styles.phone1}>Confirm Password</Text>
        <Text style={styles.text3}>*</Text>
      </Text>
      <View style={[styles.rectangleView, styles.rectangleViewLayout]} />
      <Text style={[styles.name, styles.passwordTypo]}>
        <Text style={styles.phone1}>Name</Text>
        <Text style={styles.text}>*</Text>
      </Text>
      <View style={[styles.registerChild1, styles.rectangleViewLayout]} />
      <Text style={[styles.eMail, styles.passwordTypo]}>
        <Text style={styles.phone1}>E-mail</Text>
        <Text style={styles.text}>*</Text>
      </Text>
      <Text style={[styles.register1, styles.signUpTypo]}>Register</Text>
      <Text style={styles.createYourNew}>Create your new account</Text>
      <Text style={[styles.bySigningUpContainer, styles.logInTypo]}>
        <Text style={styles.bySigningUp}>By signing up you agree to our</Text>
        <Text style={styles.text3}>
          <Text style={styles.textTypo}>{` `}</Text>
        </Text>
        <Text style={styles.text3}>
          <Text style={styles.textTypo}>
            <Text style={styles.termsConditions2}>{`Terms & Conditions`}</Text>
          </Text>
        </Text>
        <Text style={styles.text3}>
          <Text style={styles.text9}>{` `}</Text>
        </Text>
        <Text style={styles.text9}>
          <Text style={styles.and1}>and</Text>
        </Text>
        <Text style={[styles.text10, styles.textTypo]}>{` `}</Text>
        <Text style={[styles.text10, styles.textTypo]}>
          <Text style={styles.termsConditions2}>Privacy Policy</Text>
        </Text>
      </Text>
      <View style={styles.groupParent}>
        <Image
          style={[styles.groupIcon, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-19.png")}
        />
        <Image
          style={[styles.groupChild1, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-20.png")}
        />
        <Image
          style={[styles.groupChild2, styles.groupChildLayout]}
          contentFit="cover"
          source={require("../assets/group-21.png")}
        />
      </View>
      <Image
        style={styles.vectorIcon}
        contentFit="cover"
        source={require("../assets/vector-426.png")}
      />
      <View style={[styles.registerChild2, styles.registerChildBorder]} />
      <Image
        style={[styles.antDesigneyeInvisibleFilleIcon, styles.antIconLayout]}
        contentFit="cover"
        source={require("../assets/antdesigneyeinvisiblefilled.png")}
      />
      <Image
        style={[styles.antDesigneyeInvisibleFilleIcon1, styles.antIconLayout]}
        contentFit="cover"
        source={require("../assets/antdesigneyeinvisiblefilled.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  groupChildLayout1: {
    height: 50,
    width: 300,
    position: "absolute",
  },
  signUpTypo: {
    fontFamily: FontFamily.poppinsBold,
    fontWeight: "700",
    textAlign: "left",
    position: "absolute",
  },
  textTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  groupLayout: {
    height: 1,
    width: 121,
    borderTopWidth: 1,
    borderColor: Color.colorDarkorange,
    borderStyle: "solid",
    top: 15,
    position: "absolute",
  },
  logInTypo: {
    fontSize: FontSize.size_xs,
    position: "absolute",
  },
  registerChildBorder: {
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderStyle: "solid",
    position: "absolute",
  },
  phoneLayout: {
    height: 16,
    width: 57,
  },
  passwordTypo: {
    left: 45,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    position: "absolute",
  },
  registerLayout: {
    width: 295,
    left: 36,
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    position: "absolute",
  },
  rectangleViewLayout: {
    left: 31,
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
    borderRadius: Border.br_3xs,
    borderStyle: "solid",
    width: 300,
    position: "absolute",
  },
  groupChildLayout: {
    width: 32,
    height: 32,
    top: 0,
    position: "absolute",
  },
  antIconLayout: {
    height: 17,
    width: 19,
    left: 300,
    position: "absolute",
    overflow: "hidden",
  },
  groupChild: {
    borderRadius: Border.br_mini,
    backgroundColor: "transparent",
    left: 0,
    top: 0,
  },
  signUp: {
    top: 10,
    left: 111,
    color: Color.colorWhite,
    textAlign: "left",
    fontSize: FontSize.size_xl,
  },
  rectangleParent: {
    top: 578,
    left: 30,
  },
  or: {
    left: 130,
    color: Color.colorBlack,
    textAlign: "left",
    fontSize: FontSize.size_xl,
    top: 0,
    position: "absolute",
  },
  groupItem: {
    left: 169,
  },
  groupInner: {
    left: 0,
  },
  orParent: {
    top: 642,
    left: 37,
    width: 289,
    height: 30,
    position: "absolute",
  },
  alreadyHaveAn: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    left: 0,
    top: 0,
  },
  logIn: {
    left: 161,
    opacity: 0.75,
    color: Color.colorDarkorange,
    fontFamily: FontFamily.poppinsRegular,
    textAlign: "left",
    top: 0,
  },
  alreadyHaveAnAccountParent: {
    top: 752,
    left: 82,
    width: 196,
    height: 18,
    position: "absolute",
  },
  registerChild: {
    top: 365,
    left: 106,
    width: 225,
    borderRadius: Border.br_3xs,
    height: 43,
    borderWidth: 1,
    borderColor: Color.colorGray_100,
  },
  phone1: {
    color: Color.colorGray_100,
  },
  text: {
    color: Color.colorTomato,
  },
  phone: {
    top: 378,
    left: 117,
    fontFamily: FontFamily.poppinsRegular,
    fontSize: FontSize.size_xs,
    position: "absolute",
    textAlign: "left",
  },
  text1: {
    top: 377,
    color: Color.colorGray_100,
    height: 16,
    width: 57,
  },
  registerItem: {
    top: 420,
  },
  registerInner: {
    top: 476,
  },
  password: {
    top: 433,
  },
  text3: {
    color: Color.colorDarkorange,
  },
  confirmPassword: {
    top: 489,
  },
  rectangleView: {
    top: 247,
  },
  name: {
    top: 258,
  },
  registerChild1: {
    top: 306,
  },
  eMail: {
    top: 320,
  },
  register1: {
    top: 147,
    left: 116,
    fontSize: FontSize.size_11xl,
    color: Color.colorBlack,
    textAlign: "left",
  },
  createYourNew: {
    top: 192,
    left: 66,
    fontSize: FontSize.size_lg,
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
    textAlign: "left",
    position: "absolute",
  },
  bySigningUp: {
    fontFamily: FontFamily.poppinsRegular,
    color: Color.colorBlack,
  },
  termsConditions2: {
    textDecoration: "underline",
  },
  text9: {
    fontFamily: FontFamily.poppinsRegular,
  },
  and1: {
    color: Color.colorBlack,
  },
  text10: {
    color: Color.colorDarkorange,
  },
  bySigningUpContainer: {
    top: 533,
    left: 25,
    textAlign: "center",
    width: 311,
  },
  groupIcon: {
    left: 0,
  },
  groupChild1: {
    left: 62,
  },
  groupChild2: {
    left: 124,
  },
  groupParent: {
    top: 691,
    left: 102,
    width: 156,
    height: 32,
    position: "absolute",
  },
  vectorIcon: {
    top: -119,
    width: 360,
    height: 275,
    left: 0,
    position: "absolute",
  },
  registerChild2: {
    top: 364,
    left: 34,
    borderRadius: Border.br_8xs,
    width: 59,
  },
  antDesigneyeInvisibleFilleIcon: {
    top: 435,
  },
  antDesigneyeInvisibleFilleIcon1: {
    top: 489,
  },
  register: {
    borderRadius: Border.br_6xl,
    backgroundColor: Color.colorWhite,
    flex: 1,
    width: "100%",
    height: 800,
    overflow: "hidden",
  },
});

export default Register;
