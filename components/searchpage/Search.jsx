import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import data from "../../utils/data.json";

const Search = () => {
  const navigation = useNavigation();
  const [search, setSearch] = useState("");

  const filteredData = data.filter((item) => {
    return search.toLowerCase() === ""
      ? true
      : item.Name.toLowerCase().includes(search.toLowerCase());
  });

  const navigateToProfile = (item) => {
    navigation.navigate("Doctorprofile", { item });
  };

  return (
    <View style={{ marginTop: 20, position: "relative" }}>
      <TextInput
        placeholder="Search ..."
        style={{
          padding: 10,
          paddingHorizontal: 20,
          borderRadius: 10,
          color: "#004D6C",
          backgroundColor: "#ffffff",
          borderWidth: 0,
          outline: "none",
        }}
        value={search}
        onChangeText={(text) => setSearch(text)}
      />
      <View style={{ position: "absolute", right: 20, top: 10 }}>
        <AntDesign name="search1" size={24} color="black" />
      </View>
      <ScrollView>
        {filteredData.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => navigateToProfile(item)}>
            <View
              style={{
                padding: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#ccc",
                marginVertical: 5,
                marginLeft: 20,
              }}
            >
              <Text style={{ fontSize: 20 }}>{item.Name}</Text>
              <Text style={{ color: "#777", fontSize: 16 }}>
                {item.Diagnosis}
              </Text>
              <Text style={{ color: "#777", fontSize: 16 }}>{item.Status}</Text>
              <Text style={{ color: "#777", fontSize: 16 }}>
                Last Appointment: {item["Last Appointment"]}
              </Text>
              <Text style={{ color: "#777", fontSize: 16 }}>
                Next Appointment: {item["Next Appointment"]}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Search;
