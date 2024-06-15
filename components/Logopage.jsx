import { Image, Text, View } from 'react-native'
import React, { Component } from 'react'

export class Logopage extends Component {
    render() {
        return (
            <View className="justify-center items-center h-full bg-[#ffffff]">
                <Image
                    source={require("../assets/logo/logo.png")}
 className="h-20 w-[80%] m-auto"
                />
            </View>
        )
    }
}

export default Logopage