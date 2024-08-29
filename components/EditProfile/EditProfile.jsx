import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity,
  Platform,
  Pressable,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const EditProfileDoctor = () => {
  const [name, setName] = useState("Kelvin Mine");
  const [phoneNumber, setPhoneNumber] = useState("+123 856479683");
  const [email, setEmail] = useState("Kelvin.mine@gmail.com");
  const [dob, setDob] = useState(new Date(1990, 0, 1));
  const [openingTime, setOpeningTime] = useState(new Date());
  const [closingTime, setClosingTime] = useState(new Date());
  const [slotsAvailable, setSlotsAvailable] = useState("10");
  const [showDatePicker, setShowDatePicker] = useState(false);
  const [currentField, setCurrentField] = useState(null); 

  const navigation = useNavigation();

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false);

    if (currentField === "dob") {
      setDob(selectedDate || dob);
    } else if (currentField === "openingTime") {
      setOpeningTime(selectedDate || openingTime);
    } else if (currentField === "closingTime") {
      setClosingTime(selectedDate || closingTime);
    }
  };

  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  const formatTime = (date) => {
    return `${date.getHours().toString().padStart(2, "0")}:${date
      .getMinutes()
      .toString()
      .padStart(2, "0")}`;
  };

  const handleSubmit = () => {
    navigation.navigate("NextPage");
  };

  const handlePress = (field) => {
    setCurrentField(field);
    setShowDatePicker(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Name"
          style={styles.input}
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Name</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Phone Number"
          style={styles.input}
          value={phoneNumber}
          onChangeText={setPhoneNumber}
          keyboardType="phone-pad"
        />
        <Text style={styles.label}>Phone Number</Text>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email Address"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <Text style={styles.label}>Email Address</Text>
      </View>

      <Pressable
        style={styles.dateInputContainer}
        onPress={() => handlePress("dob")}
      >
        <Text style={styles.label}>Date of Birth</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Date of Birth"
            style={styles.dobinput}
            value={formatDate(dob)}
            editable={false}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handlePress("dob")}
          >
            <Ionicons name="calendar" size={24} color="#004D6C" />
          </TouchableOpacity>
        </View>
      </Pressable>

      <Pressable
        style={styles.dateInputContainer}
        onPress={() => handlePress("openingTime")}
      >
        <Text style={styles.label}>Opening Time</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Opening Time"
            style={styles.dobinput}
            value={formatTime(openingTime)}
            editable={false}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handlePress("openingTime")}
          >
            <Ionicons name="time-outline" size={24} color="#004D6C" />
          </TouchableOpacity>
        </View>
      </Pressable>

      <Pressable
        style={styles.dateInputContainer}
        onPress={() => handlePress("closingTime")}
      >
        <Text style={styles.label}>Closing Time</Text>
        <View style={styles.inputRow}>
          <TextInput
            placeholder="Closing Time"
            style={styles.dobinput}
            value={formatTime(closingTime)}
            editable={false}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={() => handlePress("closingTime")}
          >
            <Ionicons name="time-outline" size={24} color="#004D6C" />
          </TouchableOpacity>
        </View>
      </Pressable>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Slots Available"
          style={styles.input}
          value={slotsAvailable}
          onChangeText={setSlotsAvailable}
          keyboardType="number-pad"
        />
        <Text style={styles.label}>Slots Available</Text>
      </View>

      {showDatePicker && (
        <DateTimePicker
          value={currentField === "dob" ? dob : currentField === "openingTime" ? openingTime : closingTime}
          mode={currentField === "dob" ? "date" : "time"}
          display={Platform.OS === "ios" ? "spinner" : "default"}
          onChange={handleDateChange}
          style={{ width: "100%" }}
        />
      )}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  inputContainer: {
    marginBottom: 30,
  },
  dateInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
    marginBottom: 30,
  },
  label: {
    fontSize: 11,
    color: "#004D6C",
  },
  inputRow: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 8,
  },
  input: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 0,
    fontSize: 18,
    color: "#333",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dobinput: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 0,
    fontSize: 18,
    color: "#333",
  },
  iconContainer: {
    paddingLeft: 10,
  },
  submitButton: {
    backgroundColor: "#004D6C",
    paddingVertical: 15,
    alignItems: "center",
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default EditProfileDoctor;
