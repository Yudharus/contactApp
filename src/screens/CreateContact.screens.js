import React, { useEffect, useState } from 'react'
import View from '../components/atoms/atoms/View.atom'
import Text from '../components/atoms/atoms/Text.atom'
import TopBar from '../components/molecules/TopBar.molecules'
import Image from '../components/atoms/atoms/Image.atom'
import { Dimensions, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import Tailwind from '../libs/tailwind/Tailwind.lib'
import { CreateNewContact } from '../libs/fetchings/Contacts'



const CreateContact = ({ navigation }) => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [valueAge, setValueAge] = useState(0)
    const [photo, setPhoto] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleCreateContact = async () => {
        setIsLoading(true)
        try {
            const response = await CreateNewContact(firstName, lastName, valueAge)

            if (response.status == 201) {
                setIsLoading(false)
                navigation.replace("Home")
            }
        } catch (error) {
            setIsLoading(false)
        }
    }
    return (
        <View className="flex-1 bg-gray--2">
            <TopBar text="Detail Contact" />
            <View className="w-full h-full bg-white mt-1">
                <View className="items-center justify-center mt-4">
                    {/* <View className="w-26 h-26 rounded-full border-2 border-red--primary items-center justify-center"> */}
                    <Image source={{ uri: `${photo}` }} className="w-26 h-26 rounded-full border-2 border-red--primary" />
                    {/* </View> */}
                </View>
                <View className="px-4 mt-6 h-full">

                    <View className="flex-col">
                        <Text className="font-semibold text-black-3 text-lg">First Name</Text>
                        <TextInput style={Tailwind`h-10 bg-gray--2 rounded-md mt-2 px-2`} value={firstName} onChangeText={v => setFirstName(v)} testID="first-name-input" />

                        <View className="h-px w-full bg-gray--2 mt-2" />
                    </View>
                    <View className="flex-col mt-6">
                        <Text className="font-semibold text-black-3 text-lg">Last Name</Text>

                        <TextInput style={Tailwind`h-10 bg-gray--2 rounded-md mt-2 px-2`} value={lastName} onChangeText={v => setLastName(v)} testID="last-name-input" />

                        <View className="h-px w-full bg-gray--2 mt-2" />
                    </View>
                    <View className="flex-col mt-6">
                        <Text className="font-semibold text-black-3 text-lg">Age</Text>
                        <TextInput style={Tailwind`h-10 bg-gray--2 rounded-md mt-2 px-2`} value={valueAge} onChangeText={v => setValueAge(parseInt(v))} testID="age-input" />

                        <View className="h-px w-full bg-gray--2 mt-2" />
                    </View>
                    <TouchableOpacity style={Tailwind`bg-red--primary w-full rounded-md h-14 items-center justify-center mt-8 ${isLoading == true ? "flex-row" : null}`} onPress={handleCreateContact}>
                        <Text className="font-medium text-white text-lg mr-2">Tambah</Text>
                        {
                            isLoading == true ?
                                <ActivityIndicator size={"small"} color={"#FFF"} /> :
                                null
                        }
                    </TouchableOpacity>
                </View>
            </View>
        </View >
    )
}

export default CreateContact