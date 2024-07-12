import React, { useEffect } from 'react'
import { Image, Text, View } from 'react-native'
import doctorprofile from "../../../assets/doctor/doctor profile pic.jpeg";

function ShowHeaderPage({ docData }) {
    return (
        <View
            style={{
                alignItems: "center",
                justifyContent: "center",
                paddingVertical: 10,
            }}
        >
            <View
                style={{
                    height: 100,
                    width: 100,
                    borderRadius: 50,
                    overflow: "hidden",
                }}
            >
                <Image
                    source={doctorprofile}
                    resizeMode="cover"
                    style={{ flex: 1, width: undefined, height: undefined }}
                />
            </View>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                {docData?.name}
            </Text>
            <Text
                style={{
                    fontSize: 20,
                    fontWeight: "bold",
                    color: "#fff",
                }}
            >
                {docData?.name}
            </Text>
            <Text style={{ color: "#777777", marginTop: 5 }}>
                {/* ENT Surgeon */}
                {docData?.specializations}
            </Text>
        </View>
    )
}

export default ShowHeaderPage;