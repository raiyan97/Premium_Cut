import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import colors from "../theme/colors";
import { moderateScale, scale } from "../theme/scaling";

type SignInProps = {
  title?: string;
  value?:string;
  onChangeText:(text: string) => void;
    placeholder?: string;
      secureTextEntry?: boolean;

};

const InputFill: React.FC<SignInProps> = ({
 title = "PHONE/EMAIL",
  value,
  onChangeText,
  placeholder = "meatOmeat@gmail.com",
  secureTextEntry = false,

 }) => {
 
  return (
    <View style={styles.container}>
       <Text style={styles.label}>{title}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        // keyboardType={keyboardType}
        autoCapitalize="none"
        autoCorrect={false}
      />
      </View>

  );
};

export default InputFill;

const styles = StyleSheet.create({
  container: {
width:moderateScale(330),
paddingRight:moderateScale(20)
    },
    label:{
    fontSize:scale( 14),
    fontFamily:"DancingScript",
    fontWeight: "700",
    left:moderateScale(4),
    color:colors.HIGHLIGHTEDRED
    },
    input:{
  borderBottomWidth:0.6,
    borderColor:colors.HIGHLIGHTEDRED,
    borderRadius: 8,
    fontSize: scale(16),
    color:colors.DARKTEXT,
    bottom:moderateScale(5)
    }
});
