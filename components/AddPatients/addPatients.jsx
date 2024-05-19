import { SafeAreaView } from "react-native-safe-area-context";
// import EvilClose from "react-native-vector-icons/EvilIcons";
// import Calendar from "react-native-vector-icons/EvilIcons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import { Picker } from "@react-native-picker/picker";
// import { Select } from "nativewind";

import {
  View,
  Text,
  TouchableOpacity,
  Icon,
  Button,
  Pressable,
  Platform,
} from "react-native";
import { TextInput, ScrollView, Image } from "react-native";

import DateTimePicker from "@react-native-community/datetimepicker";

export default function AddPatients() {
  const initialPatientInfo = {
    firstName: "",
    surName: "",
    diagnosis: "",
    phoneNumber: "",
    recordNumber: "",
    notes: "",
    selectedSex: "Select Sex",
  };
  const [touchedFields, setTouchedFields] = useState({});

  const [isPressed, setIsPressed] = useState(false);
  const [selectedSex, setSelectedSex] = useState(null);

  const [patientInfo, setPatientInfo] = useState(initialPatientInfo);

  const [errors, setErrors] = useState({});

  const [showTextInput, setShowTextInput] = useState(false);
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (field, value) => {
    setPatientInfo({
      ...patientInfo,
      [field]: value,
    });

    // setErrors({
    //   ...errors,
    //   [field]: "",
    // });
  };

  const handleSelectSex = (sex) => {
    // setErrors({ ...errors, selectedSex: setSelectedSex("") });
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
  };
  const handleRecordNumber = () => {
    return console.log("handleRecordNumber Called...");
  };

  const handleValidateAndSubmit = () => {
    console.log("i will validate and thhe handle submit");
  };
  const toggleDatePicker = () => {
    setShowPicker(!showPicker);
  };

  const onChangeDate = ({ type }, selectedDate) => {
    if (type === "set") {
      const currentDate = selectedDate;
      setDate(currentDate);
      setDateOfBirth(formatDate(currentDate));
      if (Platform.OS === "android") {
        toggleDatePicker();
      }
    } else {
      toggleDatePicker();
    }
  };

  const formatDate = (date) => {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    return `${day < 10 ? "0" + day : day}-${
      month < 10 ? "0" + month : month
    }-${year}`;
  };

  return (
    <SafeAreaView className="h-full">
      <ScrollView>
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
                    {/* <EvilClose name="close" size={25} className="pr-30" /> */}
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

            <View className="datePickerContainer flex-row  items-center">
              <Text className="w-1/6 text-base text-[#4F4F4F]">D.O.B</Text>

              <FontAwesome5
                name="calendar-alt"
                size={25}
                color="black"
                // className="mr-2"
              />
              {showPicker && (
                <DateTimePicker
                  mode="date"
                  display="spinner"
                  value={date}
                  onChange={onChangeDate}
                  className="mr-2"
                />
              )}

              {showPicker && Platform.OS === "ios" && (
                <View className="flex flex-row justify-around">
                  <TouchableOpacity onPress={toggleDatePicker}>
                    <Text className="bg-blue-500 w-2/6 rounded-lg border-2 border-red-300 text-center p-2">
                      Cancel
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={toggleDatePicker}>
                    <Text className="bg-blue-500 w-2/6 rounded-lg border-2 border-green-300 text-center p-2">
                      Ok
                    </Text>
                  </TouchableOpacity>
                </View>
              )}
              {!showPicker && (
                <Pressable onPress={toggleDatePicker}>
                  <TextInput
                    className="w-[240] p-1 px-3 bg-white  border-2 border-[#E0E0E0] rounded-md text-black font-bold ml-10"
                    placeholderTextColor="black"
                    editable={false}
                    value={dateOfBirth}
                  />
                </Pressable>
              )}
            </View>

            <View className="genderContainer flex-row mt-2 mb-5 items-center">
              <Text className="w-2/6 text-base text-[#4F4F4F]">Gender</Text>
              <Picker
                style={{ flex: 1, height: 30 }}
                // className=" flex-1 h-30 hover:bg-gray-400 rounded-sm"
                selectedValue={selectedSex}
                onValueChange={(itemValue) => handleSelectSex(itemValue)}
              >
                <Picker.Item label="Select Gender" value={null} />
                <Picker.Item label="Male" value="male" />
                <Picker.Item label="Female" value="female" />
                <Picker.Item label="Other" value="other" />
              </Picker>
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
      </ScrollView>
    </SafeAreaView>
  );
}
