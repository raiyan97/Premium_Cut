import CustomButton from "@/src/components/Button";
import InputFill from "@/src/components/Input";
import colors from "@/src/theme/colors";
import { moderateScale, scale } from "@/src/theme/scaling";
import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

type SignInProps = {
  title?: string;
};

const SignIn: React.FC<SignInProps> = ({ title = "Sign In" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(30),
        marginTop: moderateScale(70),
      }}
    >
      <View style={styles.container}>
        <Text style={styles.SignText}>{title}</Text>
        <Text style={styles.describe}>
          To your<Text style={styles.meatText}> MeatOmarket</Text> account
        </Text>

        <View style={styles.inputFild}>
          <InputFill
            title="PHONE/EMAIL"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
        </View>
        <View style={styles.inputFild2}>
          <InputFill
            title="PASSWORD"
            value={email}
            onChangeText={setEmail}
            placeholder="******************"
            keyboardType="password"
            secureTextEntry
          />
        </View>
        <Text style={styles.forgetText}>Forget Password?</Text>
        <View>
          <CustomButton
            title="Login"
            color={colors.HIGHLIGHTEDRED}
            onPress={() => router.push("/(tabs)")}
          />
          <View style={styles.userConatin}>
           <TouchableOpacity onPress={()=> router.push("/(auth)/signUp")}>
            <Text style={styles.userText}>
              New User? <Text style={styles.uptext}>Sign Up</Text>
            </Text>
            </TouchableOpacity>
          </View>
          <View>
            <CustomButton
              title="Sign In With Facebook"
              color={colors.FACEBOOKBTN}
              onPress={() => router.push("/(tabs)")}
            />
          </View>
          <View style={styles.googlebtn}>
            <CustomButton
              title="Sign In With Google"
              color={colors.GOOGLEBTN}
              onPress={() => router.push("/(tabs)")}
            />
          </View>
        </View>

        {/* <Link href={{ pathname: "/profile", params: { name: "Bacon" } }}>
          Go to Details
        </Link> */}
      </View>
    </SafeAreaView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: "flex-start",
  },

  SignText: {
    fontSize: scale(30),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.ACCENTRED,
  },
  describe: {
    fontSize: scale(23),
    color: colors.DARKTEXT,
    fontFamily: "DancingScript",
    fontWeight: "600",
  },
  meatText: {
    fontSize: scale(23),
    color: colors.ACCENTRED,
    fontFamily: "DancingScript",
    fontWeight: "700",
  },
  inputFild: {
    marginTop: moderateScale(50),
  },
  inputFild2: {
    marginTop: moderateScale(30),
  },
  forgetText: {
    fontSize: scale(14),
    fontFamily: "DancingScript",
    fontWeight: "600",
    top: moderateScale(10),
  },
  googlebtn: {
    bottom: moderateScale(40),
  },
  userConatin: {
    top: moderateScale(26),
  },
  userText: {
    fontSize: scale(15),
    fontFamily: "DancingScript",
    fontWeight: "600",
    textAlign: "center",
  },
  uptext: {
    fontSize: scale(16),
    color: colors.ACCENTRED,
  },
});
