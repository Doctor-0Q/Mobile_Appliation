import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ScrollViewComponent } from "react-native";
import ThreeTabs from "./ThreeTabs";
import Tasks from "./Tasks";
import UpcomingSchedule from "./UpComingSchduele";

export default function Dashboard() {
  return (
    <ScrollView>
    <View>
      <ThreeTabs />
      <Tasks />
      <UpcomingSchedule />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
