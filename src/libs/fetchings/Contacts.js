import Axios from "../../configs/axios/Axios.config"

const GetContact = async () => {
    try {
        const response = await Axios.get(
            "/contact",
            {
                headers: {
                    accept: 'Application/json',
                }
            }
        )

        return response.data.data
    } catch (error) {

        return []
    }
}

const GetDetailContact = async (id = "") => {
    try {
        const response = await Axios.get(
            `/contact/${id}`,
            {
                headers: {
                    accept: 'Application/json',
                },
            },
        );

        return response.data.data;
    } catch (error) {

        return error;
    }
};

const DeleteContact = async (id = "") => {
    try {
        const response = await Axios.delete(
            `/contact/${id}`,
            {
                headers: {
                    accept: 'Application/json',
                },
            },
        );

        return response.data.data;
    } catch (error) {

        return error;
    }
};

const CreateNewContact = async (firstName = "", lastName = "", age = 1, photo = "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550") => {
    console.log(firstName, lastName, age, photo)
    try {
        const response = await Axios.post(
            '/contact',
            {
                "firstName": firstName,
                "lastName": lastName,
                "age": parseInt(age),
                "photo": photo
            },
            {
                headers: {
                    'Content-type': 'application/json',
                },
            },
        );

        return response
    } catch (error) {

        return error;
    }
};

const UpdateContact = async (id = 0, firstName = "", lastName = "", age = 1, photo = "http://vignette1.wikia.nocookie.net/lotr/images/6/68/Bilbo_baggins.jpg/revision/latest?cb=20130202022550") => {

    try {
        const response = await Axios.put(
            `/contact/${id}`,
            {
                "firstName": firstName,
                "lastName": lastName,
                "age": parseInt(age),
                "photo": photo
            },
            {
                headers: {
                    'Content-type': 'application/json',
                },
            },
        );

        return response
    } catch (error) {

        return error;
    }
};

export {
    GetContact,
    GetDetailContact,
    DeleteContact,
    CreateNewContact,
    UpdateContact
}