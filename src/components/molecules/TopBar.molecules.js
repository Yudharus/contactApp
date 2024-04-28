import React from 'react'
import View from '../atoms/atoms/View.atom'
import Text from '../atoms/atoms/Text.atom'

const TopBar = ({ text }) => {
    return (
        <View className="h-14 bg-white justify-center px-4">
            <Text className="font-bold text-lg text-black-3 text-center">{text}</Text>
        </View>
    )
}

export default TopBar