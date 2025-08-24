import imagepath from "@/src/constants/imagePath";
import colors from "@/src/theme/colors";
import { height, moderateScale, scale } from "@/src/theme/scaling";
import React from "react";
import { FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const ProductItem = ({
  name,
  weight,
  inStock,
  originalPrice,
  discountedPrice,
  quantity,
  onIncrease,
  onDecrease,
}: {
  name: string;
  weight: string;
  inStock: boolean;
  originalPrice: string;
  discountedPrice: string;
  quantity: number;
  onIncrease: () => void;
  onDecrease: () => void;
}) => {
  const stockStatus = inStock ? "In Stock" : "Out of Stock";
  const stockColor = inStock ? colors.DARKTEXT : colors.ACCENTRED;

  return (
    <View style={styles.productContainer}>
      <Image
        source={imagepath.meatPng03} 
        style={styles.productImage}
      />
      <View style={styles.productDetails}>
        <Text style={styles.productName}>{name}</Text>
        <Text style={[styles.stockStatus, { color: stockColor }]}>
          {weight} | {stockStatus}
        </Text>
        <View style={styles.priceContainer}>
          <Text style={styles.originalPrice}>{originalPrice}</Text>
          <Text style={styles.discountedPrice}>{discountedPrice}</Text>
        </View>
        <View style={styles.quantityContainer}>
          <TouchableOpacity onPress={onDecrease} style={styles.quantityButton}>
            <Text style={styles.quantityText}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{quantity}</Text>
          <TouchableOpacity onPress={onIncrease} style={styles.quantityButton}>
            <Text style={styles.quantityText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.heartIcon}>
<Image 
style={styles.heartText}
source={imagepath.favourite}/>
      </TouchableOpacity>
    </View>
  );
};

const List = () => {
  const [activeTab, setActiveTab] = React.useState("Chicken");

const categories = [
    { id: "1", name: "Chicken", icon: imagepath.steak},
    { id: "2", name: "Mutton", icon: imagepath.steak },
    { id: "3", name: "Eggs", icon:imagepath.eggIcon },
  ];

  const products = [
    {
      name: "Chicken Leg/Chest",
      weight: "500 grams",
      inStock: true,
      originalPrice: "$12.00",
      discountedPrice: "$10.00",
      quantity: 1,
    },
    {
      name: "Chicken Whole",
      weight: "500 grams",
      inStock: true,
      originalPrice: "$12.00",
      discountedPrice: "$10.00",
      quantity: 1,
    },
    {
      name: "Chicken Broiler",
      weight: "500 grams",
      inStock: true,
      originalPrice: "$12.00",
      discountedPrice: "$10.00",
      quantity: 3,
    },
    {
      name: "Chicken Chest",
      weight: "500 grams",
      inStock: false,
      originalPrice: "$12.00",
      discountedPrice: "$10.00",
      quantity: 1,
    },
    {
      name: "Chicken Wings",
      weight: "500 grams",
      inStock: false,
      originalPrice: "$12.00",
      discountedPrice: "$10.00",
      quantity: 1,
    },
  ];

  const handleIncrease = () => {};
  const handleDecrease = () => {};


       const renderItem = ({ item }) => (
         <TouchableOpacity
      style={[styles.tab, activeTab === item.name && styles.activeTab]}
      onPress={() => setActiveTab(item.name)}
    >
      <Text style={styles.tabText}>{item.name}</Text>
      {item.icon && (
        <Image
          source={item.icon}
          style={{ width: 20, height: 20, marginLeft: 5 }}
        />
      )}
    </TouchableOpacity>
  );


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Products</Text>
      <View style={styles.iconContain}>
        <Image 
        style={styles.searchIcon}
        source={imagepath.seacrh} />
        <Image 
        style={styles.bucketIcon}
        source={imagepath.bucket} />
        </View>
      </View>
   
    <View style={{position:"absolute", marginTop:moderateScale(70),alignSelf:"center"  }}>
      <FlatList
        data={categories}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        horizontal
        initialNumToRender={5}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10 }}
      />
    </View>

     <View style={styles.categoryHeader}>
            <Text style={styles.cateText}>Showing Products (22)</Text>
            <Image
            style={styles.updownIcon}
            source={imagepath.updown}/>
          </View>
      {products.map((product, index) => (
        <ProductItem
          key={index}
          name={product.name}
          weight={product.weight}
          inStock={product.inStock}
          originalPrice={product.originalPrice}
          discountedPrice={product.discountedPrice}
          quantity={product.quantity}
          onIncrease={handleIncrease}
          onDecrease={handleDecrease}
        />
      ))}
      <TouchableOpacity style={styles.filterButton}>
    <Image 
    style={{tintColor:colors.WHITE}}
    source={imagepath.filterIcon}/>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.LIGHTTEXT,
  },
  header: {
    paddingHorizontal: moderateScale(20),
    backgroundColor: colors.ACCENTRED,
    height: height / 6,
    flexDirection: "row",
justifyContent:"space-between",
  },
  headerText: {
    color: colors.WHITE,
    fontSize: scale(26),
    fontFamily: "DancingScript",
    fontWeight: "700",
marginTop:moderateScale(20)
  },
//   tabContainer: {
//     flexDirection: "row",
//     position:"absolute",
//     alignSelf:"center",
//    top:75,
//    gap:60
 
//   },
  tab: {
     paddingHorizontal:moderateScale( 18),
    paddingVertical: moderateScale(8),
    borderRadius: 20,
    backgroundColor: "#f2f2f2",
    marginRight:moderateScale( 10),
    flexDirection: "row",

  },
  activeTab: {
    backgroundColor:colors.GREYPOWDER,
  },
  tabText: {
    fontSize:scale( 16),
    fontFamily:"DancingScript",
    fontWeight:"500"
  },

  productContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.WHITE,
    margin:moderateScale(5),
    // padding: 10,
    borderRadius: 5,
    elevation: 2,
  },
  productImage: {
    width:moderateScale( 68),
    height: moderateScale(65),
resizeMode:"cover",
marginLeft:moderateScale(14)

  },
  productDetails: {
    flex: 1,
    marginLeft: 10,
  },
  productName: {
    fontSize: scale(18),
  fontFamily:"DancingScript",
     fontWeight:"700",
  },
  stockStatus: {
    fontSize: scale(10),
     fontFamily:"DancingScript",
     fontWeight:"700",
  },
  priceContainer: {
    flexDirection: "row",
    top:10
  },
  originalPrice: {
    fontSize:scale(14),
    textDecorationLine: "line-through",
    color: "#666",
    marginRight:moderateScale( 5),
  },
  discountedPrice: {
fontSize: scale(14),
     fontFamily:"DancingScript",
     fontWeight:"700",
    color:colors.ACCENTRED,

  },
  quantityContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent:"flex-end",
    
  },
  quantityButton: {
    backgroundColor: "#E0E0E0",
    width: moderateScale(20),
    height:moderateScale( 20),
alignItems:"center",
alignSelf:"center",
    borderRadius: 15,
bottom:10

  },
  quantityText: {
    fontSize:scale( 13),

  },
  quantity: {
    fontSize:scale (13),
    marginHorizontal:moderateScale( 5),
    bottom:10

  },
  heartIcon: {
marginBottom:moderateScale(50),
 right:18
  },
  heartText: {
  width:moderateScale( 15),
    height: moderateScale(15),
    
  },
  filterButton: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor:colors.ACCENTRED,
    width: moderateScale(50),
    height: moderateScale(50),
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
  },
  iconContain:{
flexDirection:"row",
marginTop:moderateScale(25)

  },
  searchIcon:{
    tintColor:colors.WHITE,
  width:moderateScale(24),
  height:moderateScale(24),
  right:10,
   
  },
  bucketIcon:{
    tintColor:colors.WHITE,
      width:moderateScale(26),
  height:moderateScale(26),
  },
  cateText: {
      fontSize: scale(14),
      fontFamily: "DancingScript",
      fontWeight: "700",
      color: colors.PRIMARYRED,
    },
  categoryHeader: {
    flexDirection:"row",
    justifyContent:"space-between",
      paddingHorizontal: moderateScale(20),
      paddingVertical: moderateScale(5),
      marginBottom:moderateScale(5),
      marginTop:moderateScale(10),
      backgroundColor: colors.WHITE,
    },
    updownIcon:{
        tintColor:colors.ACCENTRED,
        width:moderateScale(20),
        height:moderateScale(20)
    },
    grams:{

    }
  

});

export default List;
