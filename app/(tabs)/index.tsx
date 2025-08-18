import imagepath from "@/src/constants/imagePath";
import colors from "@/src/theme/colors";
import { height, moderateScale, scale } from "@/src/theme/scaling";
import { useState } from "react";
import { Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Tab() {
  const [search, setSearch] = useState("");
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.LIGHTTEXT }}>
      <View style={styles.container}>
        <Text style={styles.headText}>Michigan</Text>
        <Image style={styles.bucketIMG} source={imagepath.bucket} />
      </View>
      <View style={styles.inputFild}>
      <TouchableOpacity>
    <View style={{flexDirection:"row",
    justifyContent:"space-between",
    paddingHorizontal:moderateScale(20),alignItems:"center",marginTop:moderateScale(19)}}>
        <Text style={styles.searcText}>Search MeatOmarket Products</Text>
        <Image
        style={styles.searchIMG}
         source={imagepath.seacrh}/>
      </View>
      </TouchableOpacity>
      </View>
<View style={styles.containImage}>   
    <Image 
      style={styles.meatIMG}
      source={imagepath.meatPng01}/>
  <View style={styles.textContain}> 
  <Text style={styles.ImgText}>"Poultry at it's <Text style={styles.boldText}>best</Text></Text>
  <View style={styles.instantContainer}>
    <Image 
    style={styles.imgYes}
    source={imagepath.yesPNG}/>
<Text style={styles.instantText}>Instant delivery availabel</Text>
  </View>
      </View>
      
      </View>
    <View style={{backgroundColor:colors.WHITE, bottom:moderateScale(66),padding:5, }}>
        <Text style={styles.cateText}>Categories</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height / 7,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: moderateScale(30),
    backgroundColor: colors.ACCENTRED,
  },
  headText: {
    fontSize: scale(23),
    fontFamily: "DancingScript",
    fontWeight: "700",
    color: colors.WHITE,
  },
  bucketIMG: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: colors.WHITE,
  },
  inputFild: {
    width: "90%",
    height: moderateScale(60),
    alignSelf: "center",
    backgroundColor: colors.WHITE,
    borderRadius: 10,
    position: "relative",
    right: 0,
    left: 0,
    bottom: 0,
    top: -30,
  },
  searcText:{
    fontSize:scale(16),
    fontFamily:"DancingScript",
    fontWeight:"500",
    color:colors.GREYPOWDER
  },
  searchIMG:{
    width:moderateScale(20),
    height:moderateScale(20),
    tintColor:colors.GREYPOWDER
    
  },
  containImage:{
   alignSelf:"center",
bottom:13,

  },
  meatIMG:{
    width:moderateScale(400),
    height:moderateScale(150),


  },
  ImgText:{
 fontSize:scale(23),
    fontFamily:"DancingScript",
    fontWeight:"600",
    color:colors.DARKTEXT
  },
  boldText:{
    fontSize:scale(22),
    fontFamily:"DancingScript",
    fontWeight:"700",
    color:colors.DARKTEXT

  },
  textContain:{
alignItems:"center",
bottom:moderateScale(90)
  },
  cateText:{
     fontSize:scale(15),
    fontFamily:"DancingScript",
    fontWeight:"700",
    color:colors.PRIMARYRED
  },
  instantContainer:{
    flexDirection:"row",
    justifyContent:"space-evenly",
alignItems:"center",
    width:moderateScale(200),
    height:moderateScale(30),
    borderRadius:20,
    backgroundColor:colors.LIGHTTEXT,


  },
  instantText:{
      fontSize:scale(12),
    fontFamily:"DancingScript",
    fontWeight:"700",
    color:colors.PRIMARYRED,
// right: 3,
  },
  imgYes:{
    width:moderateScale(23),
    height:moderateScale(23),    
  }
});
