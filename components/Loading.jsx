import React from 'react'
import { Text, View } from 'react-native'

function Loading() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <Text className="text-center">Loading...</Text>
        </View>
    )
}

export default Loading;