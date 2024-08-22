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

const EditProfile = () => {
  const [name, setName] = useState("Philip James");
  const [phoneNumber, setPhoneNumber] = useState("+123 856479683");
  const [email, setEmail] = useState("johndoe@example.com");
  const [dob, setDob] = useState(new Date(1990, 0, 1));
  const [showDatePicker, setShowDatePicker] = useState(false);

  const navigation = useNavigation();

  const handleDateChange = (event, selectedDate) => {
    const currentDate = selectedDate || dob;
    setShowDatePicker(false);
    setDob(currentDate);
  };

  const formatDate = (date) => {
    return `${date.getDate().toString().padStart(2, "0")}/${(
      date.getMonth() + 1
    )
      .toString()
      .padStart(2, "0")}/${date.getFullYear()}`;
  };

  const handleSubmit = () => {
    navigation.navigate("NextPage"); 
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
        onPress={() => setShowDatePicker(true)}
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
            onPress={() => setShowDatePicker(true)}
          >
            <Ionicons name="calendar" size={24} color="#004D6C" />
          </TouchableOpacity>
        </View>
      </Pressable>

      {showDatePicker && (
        <DateTimePicker
          value={dob}
          mode="date"
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
    marginBottom: 50,
  },
  dateInputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    paddingBottom: 8,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    color: "#333",
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
    color: "#004D6C",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dobinput: {
    flex: 1,
    paddingVertical: 4,
    paddingHorizontal: 0,
    fontSize: 18,
    color: "#004D6C",
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

export default EditProfile;
