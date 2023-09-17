import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  RefreshControl,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  Feather,
  MaterialIcons,
  SimpleLineIcons,
  Entypo,
  FontAwesome,
} from "@expo/vector-icons";
import { useFonts, Inter_400Regular } from "@expo-google-fonts/inter";
import ProductsList from "../../ProductsList.json";
import { useNavigation } from "@react-navigation/native";

export default HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selected, setSelected] = useState("smartphone");
  const [products, setProducts] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const [networkError, setNetworkError] = useState(false);

  const navigation = useNavigation();

  // console.log({ ProductsList });

  useEffect(() => {
    setSelected("smartphone");
    setProducts(ProductsList);
  }, []);

  let [fontsLoaded, fontError] = useFonts({
    Inter_400Regular,
  });

  if (!fontsLoaded) {
    return null;
  }

  // const renderItem = ({ item }) => {
  //   return (
  //     <View>
  //       {item[0] && (
  //         <View>
  //           <TouchableOpacity>
  //             <Image
  //               srsource={{ uri: item[0].image }}
  //               className="h-64 w-full rounded-t-2xl"
  //               resizeMode="contain"
  //             />
  //             <View>
  //               <Text>{item[0].name}</Text>
  //               <Text>{item[0].price}</Text>
  //             </View>
  //           </TouchableOpacity>
  //         </View>
  //       )}
  //     </View>
  //   );
  // };

  const handleRefresh = () => {};

  return (
    <SafeAreaView className="mx-2 flex-1">
      {/* TITLE */}
      <View>
        <Text
          style={{
            fontFamily: "Inter_400Regular",
            fontSize: 30,
            color: "gray",
          }}
        >
          ElectroMart
        </Text>
        {/* Categories */}
        <View className="flex-row space-x-5 mx-3 my-3">
          <View className="px-3 flex-row border border-gray-400 rounded-2xl flex-1 space-x-5 items-center">
            <Feather name="search" size={24} color="gray" />
            <TextInput
              placeholder="Search"
              className="py-2 flex-1"
              autoFocus={false}
              value={searchQuery}
              onChangeText={(text) => setSearchQuery(text)}
            />
            <TouchableOpacity>
              <Feather name="send" size={24} color="#6366f1" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className="flex-row mt-2 justify-evenly my-2">
        <TouchableOpacity
          className={`rounded-full h-16 w-16 items-center justify-center ${
            selected === "smartphone" ? "bg-indigo-500" : "bg-white"
          }`}
          onPress={() => setSelected("smartphone")}
        >
          <SimpleLineIcons
            name="screen-smartphone"
            size={35}
            color={`${selected === "smartphone" ? "white" : "black"}`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-full h-16 w-16 items-center justify-center ${
            selected === "computer" ? "bg-indigo-500" : "bg-white"
          }`}
          onPress={() => setSelected("computer")}
        >
          <MaterialIcons
            name="computer"
            size={24}
            color={`${selected === "computer" ? "white" : "black"}`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-full h-16 w-16 items-center justify-center ${
            selected === "game" ? "bg-indigo-500" : "bg-white"
          }`}
          onPress={() => setSelected("game")}
        >
          <Entypo
            name="game-controller"
            size={24}
            color={`${selected === "game" ? "white" : "black"}`}
          />
        </TouchableOpacity>
        <TouchableOpacity
          className={`rounded-full h-16 w-16 items-center justify-center ${
            selected === "tv" ? "bg-indigo-500" : "bg-white"
          }`}
          onPress={() => setSelected("tv")}
        >
          <FontAwesome
            name="tv"
            size={24}
            color={`${selected === "tv" ? "white" : "black"}`}
          />
        </TouchableOpacity>
      </View>
      {/* Products */}
      <View style={{ flex: 1, marginTop: 12 }}>
        <FlatList
          data={products.filter(
            (item) =>
              item.category.toLowerCase() === selected &&
              (item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                item.category.toLowerCase().includes(searchQuery.toLowerCase()))
          )}
          keyExtractor={(index) => index}
          renderItem={({ item }) => {
            return (
              <View className="bg-white shadow-sm shadow-black rounded-lg w-40">
                {item && (
                  <View className="h-auto">
                    <TouchableOpacity
                      onPress={() => {
                        navigation.navigate("DetailScreen", {
                          id: item.id,
                          name: item.name,
                          image: item.image,
                          description: item.description,
                          price: item.price,
                        });
                      }}
                    >
                      <Image
                        source={{ uri: item.image }}
                        className="h-52 rounded-lg"
                        resizeMode="cover"
                      />
                      <View className="items-center my-2">
                        <Text className="text-base">
                          {item.name.length > 16
                            ? item.name.slice(0, 16)
                            : item.name}
                        </Text>
                        <Text className="text-base text-indigo-500 font-semibold">
                          {item.price}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                )}
              </View>
            );
          }}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={handleRefresh} />
          }
          ListEmptyComponent={
            <View>
              <Text
                style={{
                  fontFamily: "Inter_400Regular",
                  fontSize: 30,
                  color: "gray",
                }}
                className="text-center"
              >
                No Products Found!
              </Text>
            </View>
          }
          // numColumns={2}
          contentContainerStyle={{
            justifyContent: "space-around",
            alignItems: "center",
            flexDirection: "row",
            height: "full",
          }}
        />
      </View>
    </SafeAreaView>
  );
};
