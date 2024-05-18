import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import {
  View,
  Text,
  TouchableOpacity,
  Icon,
  Button,
  Pressable,
  Modal,
  FlatList,
  Platform,
} from "react-native";
import { TextInput, ScrollView, Image } from "react-native";

function CustomDropdown({ options, value, onSelect }) {
  const [visible, setVisible] = useState(false);

  const handleSelect = (option) => {
    onSelect(option);
    setVisible(false);
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => setVisible(true)}
        className="p-2 border border-gray-300 rounded"
      >
        <Text>{value || "Select Gender"}</Text>
      </TouchableOpacity>
      <Modal visible={visible} animationType="slide">
        <View className="flex-1 justify-center items-center">
          {options.map((option) => (
            <TouchableOpacity
              key={option.value}
              onPress={() => handleSelect(option.value)}
              className="p-2"
            >
              <Text>{option.label}</Text>
            </TouchableOpacity>
          ))}
          //{" "}
          <TouchableOpacity
            onPress={() => setVisible(false)}
            className="mt-4 p-2 bg-gray-300 rounded"
          >
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
const handleSelectGender = (gender) => {
  setGenderValue(gender);
};

export default function AddPatients() {
  const [dateOfBirth, setDateOfBirth] = useState("");

  const initialPatientInfo = {
    firstName: "",
    surName: "",
    diagnosis: "",
    phoneNumber: "",
    recordNumber: "",
    notes: "",

    dateOfBirth: new Date(),
  };
  const [selectedValue, setSelectedValue] = useState(null);
  const options = ["Male", "Female", "Other"];

  const [selectedSex, setSelectedSex] = useState(null);

  const [patientInfo, setPatientInfo] = useState(initialPatientInfo);

  const [showTextInput, setShowTextInput] = useState(false);

  const [genderValue, setGenderValue] = useState(null);

  const [selectedDate, setSelectedDate] = useState(new Date());

  const handleChange = (field, value) => {
    setPatientInfo({
      ...patientInfo,
      [field]: value,
    });
  };

  const handleSelectSex = (sex) => {
    setSelectedSex(sex);
    setPatientInfo({
      ...patientInfo,
      selectedSex: sex,
    });
    console.log(sex);
  };

  const handleCancelSurname = () => {
    handleChange("surName", "");
  };
  const handleCancelFirstName = () => {
    handleChange("firstName", "");
  };
  const handleCancel = () => {
    console.log("Cancelled");
    setSelectedSex(null);
    setPatientInfo(initialPatientInfo);
    // setErrors({});
    setShowTextInput(false);
    setDateOfBirth(null);
    // setGenderValue("Select Gender");
    setSelectedValue("Select Gender");
  };

  const handleRecordNumber = () => {
    return console.log("handleRecordNumber Called...");
  };

  const handleValidateAndSubmit = () => {
    console.log("validate and then handle submit");
  };
  const Dropdown = ({ options, onSelect, selectedValue }) => {
    const [visible, setVisible] = useState(false);
    const [tempSelectedValue, setTempSelectedValue] = useState(selectedValue);

    const handleSelect = (option) => {
      onSelect(option);
      setVisible(false);
    };
    const openDropdown = () => {
      setTempSelectedValue(selectedValue);
      setVisible(true);
    };

    const closeDropdown = () => {
      setTempSelectedValue(null);
      setVisible(false);
    };

    return (
      <View className="mb-3 mt-5 ">
        <TouchableOpacity
          className="flex-row items-center justify-between p-2 border-2  border-gray-300 rounded-md  w-full relative"
          onPress={() => setVisible(!visible)}
        >
          <View className="flex flex-row gap-[155]">
            <Text className="text-black">
              {selectedValue ? selectedValue : "Select Gender"}
            </Text>
            <Text className=" w-4/6 text-black">{visible ? "▲" : "▼"}</Text>
          </View>
        </TouchableOpacity>

        {visible && (
          <Modal
            transparent={true}
            visible={visible}
            animationType="none"
            onRequestClose={closeDropdown}
            // {() => setVisible(false)}
          >
            <TouchableOpacity
              className="flex-1"
              onPress={closeDropdown}
              // {() => setVisible(false)}
              activeOpacity={1}
            >
              <View className="absolute bottom-[275]  right-7 bg-white border border-gray-300 rounded-sm w-[245] px-2 ">
                <FlatList
                  data={options}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      className="p-2 border-b border-gray-300 "
                      onPress={() => handleSelect(item)}
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </TouchableOpacity>
          </Modal>
        )}
      </View>
    );
  };

  return (
    <SafeAreaView className="h-full">
      {/* <ScrollView> */}
      <View className="    min-h-[90vh] w-full  py-3">
        <View className="  flex-row justify-between px-2 py-2  w-[90vw]  mx-auto  ">
          <Text className="text-[15px] font-medium">Add New Patient</Text>
          <View className=" buttonContainer  flex-row gap-8 mx-auto ">
            <TouchableOpacity
              className=" cancelBtn px-2 py-2 rounded border border-[#0000AC] bg-gray-100"
              onPress={handleCancel}
            >
              <Text className="  text-[#0000AC] font-semibold">Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              className="saveBtn px-3 py-2 rounded bg-[#0000AC]"
              onPress={handleValidateAndSubmit}
            >
              <Text className="text-white font-semibold ">Save</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className=" formContainer w-[95vw] bg-[#F9F9F9] p-4 rounded-md  mt-5 mx-auto ">
          <View className=" recordNumberContainer  mt-5 flex-row gap-4  ">
            <Text className="text-base text-[#4F4F4F]">Record Number</Text>
            <View className="recordNumberContainer mb-5">
              <Text className="mx-auto">Record number will be assigned </Text>
              <Text>automatically when you save.</Text>
              <TouchableOpacity className=" py-2 border-2 border-[#E0E0E0] w-2/3 rounded-md items-center mt-3 mb-3">
                <Text className="text-black font-semibold  ">
                  Assign manually
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View className=" firstNameContainer flex-row items-center  mb-5 ">
            <Text className="w-2/6 text-base text-[#4F4F4F] ">Firstname</Text>
            <View className="iconWrap   relative  flex-row   w-full">
              <TextInput
                className="w-4/6 p-1 px-3  bg-white  border-2 border-[#E0E0E0] rounded-md"
                value={patientInfo.firstName}
                onChangeText={(value) => handleChange("firstName", value)}
              />
              <View className="absolute  left-[210]  top-3 transform -translate-y-1/2">
                <Pressable
                  className="font-extrabold"
                  onPress={handleCancelFirstName}
                >
                  <AntDesign name="close" size={20} color="black" />
                </Pressable>
              </View>
            </View>
          </View>

          <View className=" surnameContainer flex-row items-center  mb-5 ">
            <Text className="w-2/6 text-base text-[#4F4F4F] ">Surname</Text>
            <View className="iconWrap   relative  flex-row   w-full">
              <TextInput
                className="w-4/6 p-1 px-3 bg-white  border-2 border-[#E0E0E0] rounded-md"
                value={patientInfo.surName}
                onChangeText={(value) => handleChange("surName", value)}
              />
              <View className="absolute font-extrabold left-[210]  top-3 transform -translate-y-1/2">
                <Pressable className="" onPress={handleCancelSurname}>
                  <AntDesign name="close" size={20} color="black" />
                </Pressable>
              </View>
            </View>
          </View>

          <View className="dateContainer flex-row  items-center">
            <Text className="w-1/6 text-base text-[#4F4F4F]">D.O.B</Text>

            <FontAwesome5 name="calendar-alt" size={25} color="black" />

            <TextInput
              className="w-4/6 p-1 px-3  ml-10  bg-white  border-2 border-[#E0E0E0] rounded-md"
              value={patientInfo.dateOfBirth}
              onChangeText={(value) => handleChange("dateOfBirth", value)}
              placeholder="dd-mm-yyyy"
              keyboardType="numeric"
            />
          </View>
          <View>
            <View className="genderContainer flex-row mt-2 mb-5 items-center">
              <Text className="w-2/6 text-base text-[#4F4F4F]">Gender</Text>
              <View className="w-4/6">
                <Dropdown
                  options={options}
                  selectedValue={selectedValue}
                  onSelect={setSelectedValue}
                />
              </View>
            </View>
          </View>

          <View className=" diagnosisContainer flex-row items-center  mb-5">
            <Text className="w-2/6  text-base text-[#4F4F4F]">Diagnosis</Text>
            <TextInput
              className="w-4/6 p-1 px-3 bg-white border-2 border-[#E0E0E0] rounded-md"
              value={patientInfo.diagnosis}
              onChangeText={(value) => handleChange("diagnosis", value)}
            />
          </View>

          <View className=" phoneNumberContainer flex-row items-center  mb-5">
            <Text className="w-2/6 text-[#4F4F4F]">Phone Number</Text>

            <TextInput
              className="w-4/6 p-1 px-3 bg-white border-2 border-[#E0E0E0] rounded-md "
              value={patientInfo.phoneNumber}
              onChangeText={(value) => handleChange("phoneNumber", value)}
              keyboardType="number-pad"
            />
          </View>
          <View className="notesContainer flex-row  items-center mb-5">
            <Text className="w-2/6 text-base  text-[#4F4F4F]">Notes</Text>
            <TextInput
              className="w-4/6 p-3 px-3 bg-white h-20 border-2 border-[#E0E0E0] rounded-md   "
              multiline={true}
              textAlignVertical="top"
              value={patientInfo.notes}
              onChangeText={(value) => handleChange("notes", value)}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
