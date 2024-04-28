import React, { useEffect, useState } from 'react'
import View from '../components/atoms/atoms/View.atom'
import Text from '../components/atoms/atoms/Text.atom'
import TopBar from '../components/molecules/TopBar.molecules'
import { ActivityIndicator, ScrollView, TouchableOpacity } from 'react-native'
import CardContacts from '../components/molecules/CardContacts.molecules'
import { DeleteContact, GetContact } from '../libs/fetchings/Contacts'
import { connect, useSelector } from 'react-redux'
import Tailwind from '../libs/tailwind/Tailwind.lib'
import Image from '../components/atoms/atoms/Image.atom'

const Home = ({ navigation, changeDataContact }) => {
    const dataContact = useSelector((state) => state.dataContact)
    const [isDelete, setIsDelete] = useState(false)

    useEffect(() => {
        initData()
    }, [])


    const initData = async () => {
        try {
            changeDataContact([])
            const response = await GetContact()

            changeDataContact(response)
        } catch (error) {
            changeDataContact([])
            console.log(error)
        }
    }

    const handleDelete = async (id) => {
        try {
            const response = await DeleteContact(id)
            initData()

        } catch (error) {
            console.log(error)
        }
    }
    return (
        <View className="flex-1 bg-gray--2">
            <View className="h-16 bg-white justify-between px-4 py-2 flex-row">
                <View>
                    <Text className="font-bold text-lg text-black-3">Contacts</Text>
                    <Text className="font-bold text-xs text-gray--4">{dataContact.length} Contacts</Text>
                </View>
                <TouchableOpacity onPressOut={() => setIsDelete(!isDelete)}>
                    <Image source={require("../assets/delete.png")} className="w-8 h-8 mt-2" />
                </TouchableOpacity>
            </View>
            <View className="mt-1 bg-white h-full">
                <ScrollView>
                    {
                        dataContact.length == 0 ?
                            <View className="mt-12">
                                <ActivityIndicator size={"large"} color={"#D94367"} />
                            </View>
                            :
                            <>
                                {
                                    dataContact.map(v => {
                                        return (
                                            <CardContacts
                                                key={v.id}
                                                firstName={v.firstName}
                                                lastName={v.lastName}
                                                age={v.age}
                                                pic={v.photo}
                                                onPress={() => navigation.push("DetailContact", {
                                                    data: v
                                                })}
                                                isDelete={isDelete}
                                                onPressDelete={() => handleDelete(v.id)}
                                            />
                                        )
                                    })
                                }
                            </>
                    }
                    <View className="h-2 w-full mb-16" />
                </ScrollView>
            </View>
            <TouchableOpacity style={Tailwind`w-18 h-18 rounded-full items-center justify-center bg-red--primary absolute bottom-12 right-7`} onPress={() => navigation.push("CreateContact")} testID="add-button" >
                <Text className="font-bold text-base text-white">+ Add</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDataContact: (value) => dispatch({ type: 'CHANGE_DATACONTACT', newValue: value }),

    }
}

export default connect(null, mapDispatchToProps)(Home);