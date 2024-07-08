import { View, Text, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Toast } from "toastify-react-native";
import { showLocation } from "../../utils/functions";

const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");
  const handleSearch = async (e) => {
    e.preventDefault();

    if (!search || search === "") {
      Toast.warn("Please enter a valid query!");
      return;
    }

    const data = await showLocation(null, search, null);
    if (data) {
      navigation.navigate("Home");
    }
  };
  return (
    <View className="mt-4 relative">
      <TextInput
        placeholder="Search..."
        className=" p-2 px-4 mx-4 rounded-lg text-[#004D6C] bg-[#ffffff] border-none outline-none"
        value={search}
        onChangeText={(text) => setSearch(text)}
        onSubmitEditing={handleSearch}
      />
      <View className="absolute right-6 top-2">
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  );
};

export default Search;
