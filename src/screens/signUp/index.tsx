import CustomButton from "@/src/components/Button";
import InputFill from "@/src/components/Input";
import colors from "@/src/theme/colors";
import { moderateScale } from "@/src/theme/scaling";
import { router } from "expo-router";
import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from "react-native";
import styles from "./style";

type SignUpProps = {
  title?: string;
};

const SignUp: React.FC<SignUpProps> = ({ title = "Sign Up" }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <ScrollView>
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: moderateScale(30),
        marginTop: moderateScale(40),
      }}
    >
      <View style={styles.container}>
        <Text style={styles.SignText}>{title}</Text>
        <Text style={styles.describe}>
          To accees the freshest foods in<Text style={styles.meatText}> Mozambique</Text>
        </Text>

 <View style={styles.inputFild}>
          <InputFill
            title="PHONE"
            value={email}
            onChangeText={setEmail}
            placeholder="+91___636278638"
            keyboardType="phone-pad"
            maxlength={10}
            autoCapitilize="none"
            autoCorrect={false}
            returnKeyType="next"
            textContentType="telephonenumber"
          />
        </View>
    <View style={styles.inputFild}>
          <InputFill
            title="EMAIL(optional)"
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
          <View style={styles.inputFild2}>
          <InputFill
            title="PASSWORD"
            value={email}
            onChangeText={setEmail}
            placeholder="******************"
            keyboardType="password"
            secureTextEntry
          />
           <View style={styles.inputFild}>
          <InputFill
            title="REFERAL CODE (optional)"
            value={email}
            onChangeText={setEmail}
            placeholder="MO-0101"
            keyboardType="email-address"
          />
        </View>
        </View>
        <View>
          <CustomButton
            title="Sign Up"
            color={colors.HIGHLIGHTEDRED}
            onPress={() => router.push("/otp")}
          />
          <View style={styles.userConatin}>
           <TouchableOpacity onPress={()=> router.push("/(auth)/signUp")}>
            <Text style={styles.userText}>
              By proceeding. you agree? 
            </Text>
            <Text style={styles.uptext}>Privacy Policy</Text>
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
    </ScrollView>
  );
};


export default SignUp;
