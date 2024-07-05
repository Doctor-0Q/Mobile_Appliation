import React from 'react';
import { View, FlatList, Text, StyleSheet, Image } from 'react-native';

import calendarTick from '../../assets/notifications/calendar-tick.png';
import calendarRemove from '../../assets/notifications/calendar-remove.png';
import calendarEdit from '../../assets/notifications/calendar-edit.png';

const data = [
  { id: 'header1', type: 'header', title: 'Today' },
  {
    id: '1',
    type: 'Appointment Success',
    time: '1h',
    message: 'You have successfully booked your appointment with Dr. Emily Walker.',
    image: calendarTick,
    color: '#4CAF50',
  },
  {
    id: '2',
    type: 'Appointment Cancelled',
    time: '2h',
    message: 'You have successfully cancelled your appointment with Dr. David Patel.',
    image: calendarRemove,
    color: '#F44336',
  },
  {
    id: '3',
    type: 'Scheduled Changed',
    time: '8h',
    message: 'You have successfully changed your appointment with Dr. Jesica Turner.',
    image: calendarEdit,
    color: '#9E9E9E',
  },
  { id: 'header2', type: 'header', title: 'Yesterday' },
  {
    id: '4',
    type: 'Appointment Success',
    time: '1d',
    message: 'You have successfully booked your appointment with Dr. David Patel.',
    image: calendarTick,
    color: '#4CAF50',
  },
  {
    id: '5',
    type: 'Appointment Success',
    time: '1d',
    message: 'You have successfully booked your appointment with Dr. David Patel.',
    image: calendarTick,
    color: '#4CAF50',
  },
  {
    id: '6',
    type: 'Appointment Success',
    time: '1d',
    message: 'You have successfully booked your appointment with Dr. David Patel.',
    image: calendarTick,
    color: '#4CAF50',
  },
];

const NotificationScreen = () => {
  const renderItem = ({ item }) => {
    if (item.type === 'header') {
      return (
        <View className=" flex flex-row px-2 justify-between ">
          <Text className="text-[#004D6C] font-normal text-xl" >{item.title}</Text>
          <Text className="text-[#004D6C] font-bold text-sm text-center ">Mark all as read</Text>
        </View>
      );
    }

    return (
      <View style={styles.notificationContainer} >
        <View style={[styles.iconContainer]} >
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textContainer} >
          <View style={styles.headerContainer}>
            <Text className="text-[#004D6C] font-bold text-lg">{item.type}</Text>
            <Text className="text-[#004D6C] font-normal text-sm">{item.time}</Text>
          </View>
          <Text className="text-[#004D6CCC] font-normal">{item.message}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 2,
    backgroundColor: '#fff',
  },
  notificationContainer: {
    flexDirection: 'row',
    padding: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    marginTop: 8
  },
  image: {
    width: 55,
    height: 55,
  },
  textContainer: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 2,
  },
  type: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 12,
    color: '#888',
    marginVertical: 4,
  },
  message: {
    fontSize: 14,
    color: '#444',
  },
  separator: {
    height: 1,
    backgroundColor: '#e0e0e0',
    marginVertical: 8,
  },
});

export default NotificationScreen;
