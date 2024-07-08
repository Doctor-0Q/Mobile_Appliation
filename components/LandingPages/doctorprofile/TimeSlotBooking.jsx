import React, { useState } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import DatePicker from "react-native-datepicker";
import { tailwind } from "nativewind";

const TimeSlotBooking = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedSlot, setSelectedSlot] = useState(null);

  const slots = [
    "10 - 11 AM",
    "11 - 12 PM",
    "12 - 01 PM",
    "01 - 02 PM",
    "02 - 03 PM",
    "03 - 04 PM",
    "04 - 05 PM",
    "05 - 06 PM",
  ];

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  return (
    <View className="p-4">
      <View className="flex-row justify-between items-center mb-4">
        <TouchableOpacity className="p-2 border border-black rounded">
          <Text className="text-lg">TODAY</Text>
          <Text className="text-green-500">8 slots available</Text>
        </TouchableOpacity>
        <TouchableOpacity className="p-2 border border-black rounded">
          <Text className="text-lg">TOMORROW</Text>
          <Text className="text-green-500">8 slots available</Text>
        </TouchableOpacity>
        <DatePicker
          style={{ width: 200 }}
          date={selectedDate}
          mode="date"
          placeholder="dd-mm-yyyy"
          format="DD-MM-YYYY"
          confirmBtnText="Confirm"
          cancelBtnText="Cancel"
          customStyles={{
            dateIcon: {
              position: "absolute",
              right: 0,
              top: 4,
              marginLeft: 0,
            },
            dateInput: {
              marginLeft: 36,
            },
          }}
          onDateChange={(date) => {
            setSelectedDate(date);
          }}
        />
      </View>
      <ScrollView className="flex   border w-full ">
        {slots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            className={` m-2 border rounded w-[30%]  ${
              selectedSlot === slot ? "border-blue-500" : "border-gray-300"
            }`}
            onPress={() => handleSlotSelect(slot)}
          >
            <Text className="text-[20px] text-center">{slot}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity
        className="bg-blue-500 p-4 rounded mt-4"
        onPress={() => console.log("Booked slot:", selectedSlot)}
      >
        <Text className="text-white text-center text-lg">Book</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TimeSlotBooking;
