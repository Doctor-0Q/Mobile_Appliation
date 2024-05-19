import { View, Text, TextInput } from 'react-native'
import React, { useState } from 'react'
import {
    SimpleLineIcons,
    Fontisto,
    Ionicons,
    Octicons,
    AntDesign,
    Entypo,
} from "@expo/vector-icons";

const SearchBar = () => {
    const [search, setsearch] = useState(false);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (text) => {
        setInputValue(text);
    };

    const handleSubmit = () => {
        console.log("Form submitted with value:", inputValue);
        setInputValue("");
    };
    return (
        <>
            {search && (
                <View className="bg-[#000000ba] h-[1500px] border z-10 w-[100vw] absolute">
                    <View className="bg-white h-8 rounded-3xl flex flex-row items-center  p-1 w-60 m-auto">
                        <View>
                            <AntDesign name="search1" size={20} color="#828282" />
                        </View>
                        <TextInput className=" w-48"
                            placeholder="search..."
                            value={inputValue}
                            onChangeText={handleInputChange}
                            onSubmitEditing={handleSubmit}
                        />
                        <View className="">
                            <Entypo name="cross" size={20} color="#828282" onPress={() => setsearch((previousState) => !previousState)} />
                        </View>
                    </View>
                </View>
            )}
            <View className=" mr-4 ">
                <AntDesign
                    name="search1"
                    size={24}
                    color="#828282"
                    onPress={() => setsearch((previousState) => !previousState)}
                />
            </View>
        </>
    )
}

export default SearchBar