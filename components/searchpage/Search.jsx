import { View, Text, TextInput } from 'react-native'
import React from 'react'
import {
  AntDesign,
} from "@expo/vector-icons";
const Search = () => {
  return (
    <View className="mt-4 relative">
      <TextInput
        placeholder="Search..."
        className=" p-2 px-4 mx-4 rounded-lg text-[#004D6C] bg-[#ffffff] border-none outline-none"
      />
      <View className="absolute right-6 top-2">
        <AntDesign name="search1" size={24} color="black" />
      </View>
    </View>
  )
}

export default Search