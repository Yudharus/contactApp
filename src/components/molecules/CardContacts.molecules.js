import React from 'react'
import View from '../atoms/atoms/View.atom'
import Text from '../atoms/atoms/Text.atom'
import Image from '../atoms/atoms/Image.atom'
import { TouchableOpacity } from 'react-native'
import Tailwind from '../../libs/tailwind/Tailwind.lib'

const CardContacts = ({ firstName, lastName, age, pic, onPress, isDelete, onPressDelete }) => {
    return (
        <TouchableOpacity style={Tailwind`p-4`} onPress={onPress} testID="card-contact">
            <View className={`flex-row items-center ${isDelete == true ? "justify-between" : null}`}>
                <View className="flex-row items-center">
                    <View className="bg-gray--2 h-14 w-14 rounded-full">
                        <Image source={{ uri: `${pic}` }} className="w-14 h-14 rounded-full" testID="contact-pic" />
                    </View>
                    <View className="flex-col ml-6">
                        <Text className="font-medium text-black-2 text-base">{firstName} {lastName}</Text>
                        <Text className="font-normal text-black-2 text-xs mt-1">{age} Years Old</Text>
                    </View>
                </View>
                {
                    isDelete == true ?
                        <TouchableOpacity onPress={onPressDelete} testID="delete-button">
                            <Image source={require("../../assets/delete.png")} className="w-8 h-8 mt-2" />
                        </TouchableOpacity> :
                        null
                }
            </View>
            <View className="h-px w-full bg-gray--2 mt-4" />
        </TouchableOpacity>
    )
}

export default CardContacts