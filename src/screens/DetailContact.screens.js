import React, { useEffect, useState } from 'react'
import View from '../components/atoms/atoms/View.atom'
import Text from '../components/atoms/atoms/Text.atom'
import { Dimensions, TouchableOpacity, TextInput, ActivityIndicator } from 'react-native'
import TopBar from '../components/molecules/TopBar.molecules'
import Image from '../components/atoms/atoms/Image.atom'
import Tailwind from '../libs/tailwind/Tailwind.lib'
import { GetDetailContact, UpdateContact } from '../libs/fetchings/Contacts'


const DetailContact = ({ navigation, route }) => {
    const [isEdit, setIsEdit] = useState(false)
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [valueAge, setValueAge] = useState(0)
    const [photo, setPhoto] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const height = Dimensions.get('window').height
    const width = Dimensions.get('window').width
    const id = route.params.data.id

    useEffect(() => {
        const initData = async () => {
            try {
                const response = await GetDetailContact(id)
                setFirstName(response.firstName)
                setLastName(response.lastName)
                setValueAge(parseInt(response.age))
                setPhoto(response.photo)

            } catch (error) {
                console.log("detail", error)

            }
        }
        initData()
    }, [])

    const handleEdit = async () => {
        setIsLoading(true)
        try {
            const response = await UpdateContact(id, firstName, lastName, valueAge)
            if (response.status == 201) {
                setIsLoading(false)
                navigation.replace("Home")
            }
        } catch (error) {
            setIsLoading(false)

        }
    }

    return (
        <View testID="detail-contact" className="flex-1 bg-gray--2">
            <TopBar text="Detail Contact" />
            <View className="w-full h-full bg-white mt-1">
                <View className="items-center justify-center mt-4">
                    {/* <View className="w-26 h-26 rounded-full border-2 border-red--primary items-center justify-center"> */}
                    <Image source={{ uri: `${photo}` }} className="w-26 h-26 rounded-full border-2 border-red--primary" />
                    {/* </View> */}
                </View>
                <View className="px-4 mt-6 h-full">

                    <View className="flex-col">
                        <Text className="font-semibold text-black-3 text-lg" testID="first-name-label">First Name</Text>
                        {
                            isEdit == true ?
                                <TextInput testID="first-name-input" style={Tailwind`h-10 bg-gray--2 rounded-md mt-2 px-2`} value={firstName} onChangeText={v => setFirstName(v)} /> :
                                <Text className="font-medium text-black-3 text-sm" testID="first-name">{firstName}</Text>
                        }
                        <View className="h-px w-full bg-gray--2 mt-2" />
                    </View>
                    <View className="flex-col mt-6">
                        <Text className="font-semibold text-black-3 text-lg" testID="last-name-label">Last Name</Text>
                        {
                            isEdit == true ?
                                <TextInput testID="last-name-input" style={Tailwind`h-10 bg-gray--2 rounded-md mt-2 px-2`} value={lastName} onChangeText={v => setLastName(v)} /> :
                                <Text className="font-medium text-black-3 text-sm" testID="last-name">{lastName}</Text>
                        }
                        <View className="h-px w-full bg-gray--2 mt-2" />
                    </View>
                    <View className="flex-col mt-6">
                        <Text className="font-semibold text-black-3 text-lg" testID="age-label">Age</Text>
                        {
                            isEdit == true ?
                                <TextInput testID="age-input" style={Tailwind`h-10 bg-gray--2 rounded-md mt-2 px-2`} value={valueAge} onChangeText={v => setValueAge(parseInt(v))} keyboardType='number-pad' maxLength={2} /> :
                                <Text className="font-medium text-black-3 text-sm" testID="age">{valueAge}</Text>
                        }
                        <View className="h-px w-full bg-gray--2 mt-2" />
                    </View>
                    {
                        isEdit == true ? null :

                            <TouchableOpacity testID="edit-button" style={Tailwind`bg-red--primary w-full rounded-md h-14 items-center justify-center mt-8`} onPress={() => setIsEdit(!isEdit)}>
                                <Text className="font-medium text-white text-lg">Edit</Text>
                            </TouchableOpacity>
                    }
                    {
                        isEdit == true ?
                            <View className="flex-row items-center justify-between w-full mt-8" >
                                <TouchableOpacity testID="cancel-button" style={Tailwind`bg-red--primary w-${width * 0.1} rounded-md h-14 items-center justify-center`} onPress={() => setIsEdit(!isEdit)}>
                                    <Text className="font-medium text-white text-lg">Batal</Text>
                                </TouchableOpacity>
                                <TouchableOpacity testID="save-button" style={Tailwind`bg-red--primary w-${width * 0.1} rounded-md h-14 items-center justify-center ${isLoading == true ? "flex-row" : null}`} onPress={handleEdit}>
                                    <Text className="font-medium text-white text-lg mr-2">Save</Text>
                                    {
                                        isLoading == true ?
                                            <ActivityIndicator size={"small"} color={"#FFF"} /> :
                                            null
                                    }
                                </TouchableOpacity>
                            </View> :
                            null

                    }
                </View>
            </View>
        </View >
    )
}

export default DetailContact