import axios from "axios";

const API_URL = "xxx";

interface RegisterDormFinderForm {
    name : string,
    phone : string,
    password : string,
    lastName : string,
    email : string,
    gender : string,
}

interface RegisterDormOwnerForm {
    name : string,
    phone : string,
    password : string,
    lastName : string,
    email : string,
    gender : string,
    natID : string
}

interface LoginForm {
    email : string,
    password : string
}

async function RegisterDormFinder(form : RegisterDormFinderForm) {
    const response = await axios.post(`${API_URL}signup`,form)
    console.log(form)
    console.log(response.data)
    if (response.data.token) {
        localStorage.setItem("token",JSON.stringify(response.data))
    }
    return response.data
}
async function RegisterDormOwner(form : RegisterDormOwnerForm) {
    const response = await axios.post(`${API_URL}signup`,form)
    console.log(response.data)
    if (response.data.token) {
        localStorage.setItem("token",JSON.stringify(response.data))
    }
    return response.data
}
async function Login(form : LoginForm) {
    const response = await axios.post(`${API_URL}signin`,{form})
    if (response.data.token) {
        localStorage.setItem("token",JSON.stringify(response.data))
    }
    return response.data
}
function Logout() {
    localStorage.removeItem("token");
}
function getCurrentUser() {

    const token  = localStorage.getItem("token")
    if (typeof token === 'string') {
        const user = JSON.parse(token);
        return user
    } else {
        return null
    }
    
}

export default {
    RegisterDormFinder,
    RegisterDormOwner,
    Login,
    Logout,
    getCurrentUser
}


