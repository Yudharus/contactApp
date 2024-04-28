import React, { useEffect } from 'react'
import View from '../components/atoms/atoms/View.atom'
import Text from '../components/atoms/atoms/Text.atom'
import Image from '../components/atoms/atoms/Image.atom'
import { GetContact } from '../libs/fetchings/Contacts'
import { connect } from 'react-redux'


const Splash = ({ navigation, changeDataContact }) => {

    useEffect(() => {
        const initData = async () => {
            try {
                const response = await GetContact()

                changeDataContact(response)
            } catch (error) {
                changeDataContact([])
                console.log(error)
            }
        }

        const timeout = setTimeout(() => {
            navigation.replace("Home")
            clearTimeout(timeout)
        }, 2000);
        initData()
    }, [])

    return (
        <View testID="splash-screen" className="flex-1 bg-red--primary items-center justify-center">
            <Image testID="splash-image" source={require("../assets/contact-book.png")} className="w-24 h-24 mb-6" />
            <Text className="font-bold text-2xl text-white">Contact App</Text>
        </View>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeDataContact: (value) => dispatch({ type: 'CHANGE_DATACONTACT', newValue: value }),

    }
}

export default connect(null, mapDispatchToProps)(Splash);