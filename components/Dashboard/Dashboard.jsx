import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView,SafeAreaView } from 'react-native';
import ThreeTabs from './ThreeTabs';
import Tasks from './Tasks';
import UpcomingSchedule from './UpComingSchduele';


export default function Dashboard() {
  return (
    <View >
  <ThreeTabs/>
  <Tasks/>
  <UpcomingSchedule/>
  </View>
  )
}

const styles = StyleSheet.create({})