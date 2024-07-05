import React, { useState, useEffect } from "react";

import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  MaterialCommunityIcons,
  Ionicons,
  Feather,
  AntDesign,
} from "@expo/vector-icons";
import API_URL from "../../config";
import axios from "axios";
import { Toast } from "toastify-react-native";

const Patients = () => {
  const [page, setPage] = useState(0);
  const itemsPerPage = 5;
  const [data, setData] = useState([]);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const paginate = (data) => {
    const start = page * itemsPerPage;
    const end = start + itemsPerPage;
    return data.slice(start, end);
  };

  const [patients, setPatients] = useState(null);

  const getPatients = async () => {
    try {
      const res = await axios.post(`${API_URL}/api/patientslist`, {
        docId: "2FZilBl6rlRI5IsPYMmyMtbFJrG2",
      });
      let datas = await res.data;
      datas = datas.filter(data => data.status)
      setData(datas);
      Toast.success(`Total patients: ${datas.length}`);
      setPatients(paginate(datas));
    } catch (error) {
      console.error(error);
      return;
    }
  };

  useEffect(() => {
    getPatients();
  }, []);
  
  const prev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const next = () => {
    if (page < totalPages - 1) {
      setPage(page + 1);
    }
  };

  const renderPageNumbers = () => (
    <View className="flex-row space-around space-x-3">
      {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (pageNumber) => (
          <TouchableOpacity
            key={pageNumber}
            onPress={() => setPage(pageNumber - 1)}
            disabled={page === pageNumber - 1}
            className={`${
              page === pageNumber - 1 ? "bg-blue-500" : "bg-transparent"
            } px-5 py-2 rounded`}
          >
            <Text
              className={`text-${page === pageNumber - 1 ? "white" : "black"}`}
            >
              {pageNumber}
            </Text>
          </TouchableOpacity>
        )
      )}
    </View>
  );

  const renderItem = ({ item }) => (
    <View className="bg-white px-4 py-2 my-2 rounded">
      <View className="Name  flex-row  items-center w-full py-1">
        <Text className="w-2/6">Name </Text>
        <Text className="w-4/6 ml-20 font-bold">{item.name}</Text>
      </View>
      <View className="Diagnosis  flex-row  items-center w-full py-1">
        <Text className="w-2/6 ">Diagnosis</Text>
        <Text className="w-4/6 ml-20 font-bold"> {item.diagnosis}</Text>
      </View>
      <View className="Status  flex-row  items-center w-full py-1">
        <Text className="w-2/6">Status</Text>

        <Text
          className={`${getStatusBg(
            item.status
          )} w-auto  px-3  rounded-lg py-1  ml-20 font-bold`}
        >
          {item.status}
        </Text>
      </View>
      <View className="Status  flex-row  items-center w-full py-1">
        <Text>Last Appointment</Text>
        <Text className=" ml-20 font-bold">{item.lastAppointment}</Text>
      </View>
      <View className="Status  flex-row  items-center w-full py-1">
        <Text>Next Appointment</Text>
        <Text className=" ml-20 font-bold">{item.nextAppointment}</Text>
      </View>
      <View className="Options flex-row  items-center w-full py-1">
        <Text className="w-2/6 ">Options </Text>
        <TouchableOpacity className="w-4/6 ml-20 font-bold">
          <MaterialCommunityIcons
            name="dots-horizontal"
            size={24}
            color="black"
            style={{ marginLeft: 5 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
  const getStatusBg = (status) => {
    switch (status) {
      case "Recovered":
        return "bg-emerald-200";
      case "Awaiting":
        return "bg-blue-200";
      default:
        return "bg-red-200";
    }
  };
  const handleAddPatients = () => {
    console.log("addpatients routing");
    // navigation.navigate("test");
  };
  const HeaderComponent = ({ totalPatients }) => (
    <View className="px- ml-1">
      <View className="flex-row justify-between items-center my-1   px-2 py-2 bg-white rounded">
        <View className="flex-row items-left">
          <Text>Total Patients</Text>
          <Text className="text-gray-600 font-bold"> ({data.length})</Text>
        </View>
        <View className=" icons flex-row items-center space-x-8 ">
          <TouchableOpacity
          // onPress={handleAddPatients}
          >
            <MaterialCommunityIcons name="plus" size={26} color="black" />
          </TouchableOpacity>
          {/* </Link> */}

          <TouchableOpacity>
            <Ionicons name="search" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="filter" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <AntDesign name="questioncircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <SafeAreaView className="flex-1">
      <View className="flex-1 mt-10 bg-gray-100 p-3">
        <HeaderComponent />
        <FlatList
          data={patients}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
        />
        <FooterComponent
          prev={prev}
          next={next}
          renderPageNumbers={renderPageNumbers}
        />
      </View>
    </SafeAreaView>
  );
};

const FooterComponent = ({ prev, next, renderPageNumbers }) => (
  <View className="flex-row justify-between items-center p-2 bg-white space-x-3">
    <TouchableOpacity onPress={prev}>
      <MaterialCommunityIcons name="arrow-left" size={24} color="black" />
    </TouchableOpacity>
    {renderPageNumbers()}
    <TouchableOpacity onPress={next}>
      <MaterialCommunityIcons name="arrow-right" size={24} color="black" />
    </TouchableOpacity>
  </View>
);

export default Patients;
