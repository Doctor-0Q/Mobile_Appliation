import { View, Text } from "react-native";
import React from "react";
import Chat from "./Chat";
import Videocall from "./Videocall";


const Messages = () => {
  return (
    <View>
      <Chat />
      <Videocall/>
    </View>
  );
};

export default Messages;
