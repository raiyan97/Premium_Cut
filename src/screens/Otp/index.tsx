import CustomButton from "@/src/components/Button";
import imagepath from "@/src/constants/imagePath";
import colors from "@/src/theme/colors";
import { moderateScale } from "@/src/theme/scaling";
import { router } from "expo-router";
import { useRef, useState } from "react";
import styles from "./style";

import {
    Image,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function Otp() {
  const [code, setCode] = useState(["", "", "", ""]);
  const inputs = useRef<TextInput[]>([]);

  const handleChange = (value: string, index: number) => {
    let newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value && index < code.length - 1) {
      // move to next input
      inputs.current[index + 1]?.focus();
    }

    if (!value && index > 0) {
      // if backspace, move to previous
      inputs.current[index - 1]?.focus();
    }
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
             ref={(ref) => (inputs.current[index] = ref!)} 
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
          onPress={() => {
            const otp = code.join("");
            console.log("OTP:", otp);
            router.push("/");
          }}
        />
      </View>
    </View>
  );
}

