import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView } from "react-native";
import AddPatients from "./components/AddPatients/addPatients";
import Dashboard from "./components/Dashboard/Dashboard";
import Messages from "./components/messages/Messages";
import SettingPage from "./components/settings/SettingPage";

export default function App() {
  return (
    <ScrollView className="bg-[#F9F9F9] ">
      {/* <Dashboard /> */}
      {/* <SettingPage/> */}
      {/* <Messages/>*/}
      <AddPatients />
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
