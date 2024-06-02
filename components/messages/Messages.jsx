import { View, Text, ScrollView } from "react-native";
import React from "react";
import Chat from "./Chat";
import Videocall from "./Videocall";


const Messages = () => {
  return (
    <ScrollView>
      <View>
        <Chat />
        <Videocall />
      </View>
    </ScrollView>
  );
};

export default Messages;
