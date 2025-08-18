// import { Link, Stack, useLocalSearchParams, useRouter } from 'expo-router';
// import { StyleSheet, Text, View } from 'react-native';

// export default function Details() {
//   const router = useRouter();
//   const params = useLocalSearchParams();

//   return (
//     <View style={styles.container}>
//       <Stack.Screen
//         options={{
//           title: params.name,
//         }}
//       />
//       <Text
//         onPress={() => {
//           router.setParams({ name: 'Updated' });
//         }}>
//         Update the title
//       </Text>

//             <Link href={{ pathname: '/(tabs)/settings', params: { name: 'Bacon' } }}>Go to tabs</Link>
      
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });



import CustomButton from "@/src/components/Button";
import imagepath from "@/src/constants/imagePath";
import colors from "@/src/theme/colors";
import { moderateScale, scale } from "@/src/theme/scaling";
import { router } from "expo-router";
import { useState } from "react";
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Tab() {
    const [code, setCode] = useState(["", "", "", ""]);

    const handleChange = (value: string, index: number) => {
    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    };
  return (
    <View style={styles.container}>
      <Image style={styles.logoPNG} source={imagepath.logo} />
      <Text style={styles.logoText}>MeatOMarket</Text>
      <View style={{ marginTop: moderateScale(26) }}>
        <Text style={styles.veriftText}>Verification Code</Text>
      </View>
      <View>
        <Text style={styles.smsText}>SMS verification code has been</Text>
        <Text style={styles.sentText}>sent to: </Text>
        <View style={{ marginTop: moderateScale(30), alignSelf: "center" }}>
          <Text style={styles.numText}>+73 77 482 798</Text>
        </View>
        <View
          style={{
            marginTop: moderateScale(60),
            alignItems: "flex-start",
            right: moderateScale(50),
          }}
        >
          <Text style={styles.pinText}>PIN CODE</Text>
        </View>
      </View>
      <View style={styles.codeContainer}>
        {code.map((digit, index) => (
          <TextInput
            key={index}
            style={styles.codeInput}
            keyboardType="number-pad"
            maxLength={1}
            value={digit}
            onChangeText={(value) => handleChange(value, index)}
          />
        ))}
      </View>
<TouchableOpacity>
        <Text style={styles.resend}>↻ Resend</Text>
      </TouchableOpacity>
      <View style={styles.googlebtn}>
        <CustomButton
          title="Next"
          color={colors.ACCENTRED}
          onPress={() => router.push("/(tabs)/settings")}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    alignItems: "center",
    marginTop: moderateScale(50),
  },
  logoPNG: {
    width: moderateScale(100),
    height: moderateScale(100),
  },
  logoText: {
    fontSize: scale(17),
    fontFamily: "DancingScript",
    fontWeight: "600",
    color:colors.ACCENTRED
  },
  veriftText: {
    fontSize: scale(23),
    fontFamily: "DancingScript",
    fontWeight: "700",
  },
  smsText: {
    fontSize: scale(17),
    fontFamily: "DancingScript",
    fontWeight: "600",
  },
  sentText: {
    fontSize: scale(17),
    fontFamily: "DancingScript",
    fontWeight: "600",
    textAlign: "center",
  },
  numText: {
    fontSize: scale(22),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.ACCENTRED,
  },
  pinText: {
    fontSize: scale(16),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.ACCENTRED,
  },
  num: {
    fontSize: scale(28),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.DARKTEXT,
  },
  codeContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "70%",
    marginBottom: 15,
  },
  codeInput: {
    borderBottomWidth: 2,
    borderColor: "#ccc",
    fontSize: 22,
    textAlign: "center",
    width: 40,
    padding: 5,
  },
  googlebtn:{
    width:moderateScale(320)
  },

  resend: {
    fontSize:scale(16),
    color:colors.ACCENTRED,
     marginTop:moderateScale(10)
  },

})
