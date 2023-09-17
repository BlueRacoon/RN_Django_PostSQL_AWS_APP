import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import BackButton from "../components/BackButton";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const ProductDetailsScreen = () => {
  const route = useRoute();
  const { id, name, price, image, description } = route.params;
  const [isLiked, setIsLiked] = useState(false);
  const [added, setAdded] = useState(false);

  return (
    <View className="bg-white flex-1 justify-between">
      <Image
        source={{ uri: image }}
        className="h-80 w-auto "
        resizeMode="cover"
      />
      <BackButton />
      <View className="bg-blue-100 rounded-2xl mx-5 p-3 my-4 flex-1">
        <View className="flex-row items-center justify-between my-5">
          <Text className="text-xl tracking-widest font-bold text-gray-700">
            {name}
          </Text>
          <Ionicons
            name={isLiked ? "heart-sharp" : "heart-outline"}
            size={24}
            color={isLiked ? "red" : "black"}
          />
        </View>
        <View className="mx-2 mb-5 ">
          <Text className="tracking-widest text-gray-700">{description}</Text>
        </View>
        <TouchableOpacity className="bg-indigo-500 mx-3 w-full rounded-md p-3 flex-row justify-between mb-5 bottom-0 absolute">
          <View className="flex-row space-x-1 items-center">
            <Ionicons name="cart-sharp" size={30} color="white" />
            <Text className="text-white font-normal text-lg">Add To Cart</Text>
          </View>

          <Text className="text-white font-extralight text-lg"> | </Text>
          <Text className="text-white font-normal text-lg"> $ {price}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetailsScreen;
