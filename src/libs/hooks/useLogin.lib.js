import AsyncStorage from "@react-native-async-storage/async-storage"
import { useState, useEffect } from "react"
import { ToastAndroid } from "react-native"

const useLogin = () => {
    const [isLogin, setIsLogin] = useState(false)

    useEffect(() => {
        async function initData() {
            try {
                const result = await AsyncStorage.getItem("token")

                setIsLogin(result ? true : false)
            } catch (error) {
                ToastAndroid.show("Gagal memuat data login.", 2000)
            }
        }

        initData()
    }, [])

    return [
        isLogin,
        setIsLogin
    ]
}

export default useLogin